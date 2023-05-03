import type {
  PropSidebarItem,
  VersionBanner,
} from "@docusaurus/plugin-content-docs";
import type {
  SidebarItem,
  DocusaurusPluginTypeDocApiOptions,
  ResolvedPackageConfig,
  PackageReflectionGroup,
  ApiOptions,
} from "./types";
import type {
  PluginContentLoadedActions,
  RouteConfig,
} from "@docusaurus/types";
import { CURRENT_VERSION_NAME } from "./docs/constants";
import path from "path";
import fs from "fs";
import { extractSidebar } from "./plugin/sidebar";
import { flattenAndGroupPackages, generateJson } from "./plugin/data";
import type { JSONOutput } from "typedoc";
import { normalizeUrl } from "@docusaurus/utils";
import logger from "@docusaurus/logger";
import _ from "lodash";
import { convertToCommands, readCliCommands } from "./cli";
import type { CliVersionMetadata, ParsedCommand } from "./cli/types";

type GeneratorType = "typedocs" | "oclif";

async function importFile<T>(file: string): Promise<T> {
  const data = await fs.promises.readFile(file, "utf8");

  if (file.endsWith(".json")) {
    return JSON.parse(data) as T;
  }

  return data as unknown as T;
}

export interface GeneratorContext {
  options: DocusaurusPluginTypeDocApiOptions;
  generatedFilesDir: string;
  projectRoot: string;
  pluginId: string;
  versionsDocsDir: string;
  siteDir: string;
}

export interface VersionMetadata {
  versionName: string; // 1.0.0
  versionLabel: string; // Version 1.0.0
  versionPath: string; // /baseUrl/api/1.0.0
  versionBadge: boolean;
  versionBanner: VersionBanner | null;
  versionClassName: string;
  isLast: boolean;
  routePriority: number | undefined; // -1 for the latest
}

const CURRENT_VERSION_METADATA: VersionMetadata = {
  versionName: "current",
  versionLabel: "Next",
  versionPath: "/",
  versionBadge: false,
  versionClassName: "",
  versionBanner: null,
  isLast: false,
  routePriority: undefined,
};

export interface LoadedVersion extends VersionMetadata {
  // mainDocId: string;
  packages: PackageReflectionGroup[];
  sidebars: SidebarItem[];
}

export abstract class Generator<T extends VersionMetadata> {
  abstract type: GeneratorType;
  abstract loadedVersions: Array<T>;

  constructor(readonly context: GeneratorContext) {}

  get options(): DocusaurusPluginTypeDocApiOptions {
    return this.context.options;
  }

  abstract fetchSidebarItems(
    ...args: any[]
  ): Promise<Record<string, PropSidebarItem[]>>;

  abstract fetchRoutes(...args: any[]): Promise<Record<string, RouteConfig[]>>;

  abstract createRoutes(...args: any[]): Promise<void>;
}

export class TypedocGenerator extends Generator<LoadedVersion> {
  type: GeneratorType = "typedocs";
  constructor(
    context: GeneratorContext,
    readonly loadedVersions: LoadedVersion[]
  ) {
    super(context);
  }

  public static async load(
    context: GeneratorContext,
    versionsMetadata: VersionMetadata[],
    packageConfigs: ResolvedPackageConfig[],
    entryPoints: string[]
  ): Promise<TypedocGenerator> {
    const loadedVersions: LoadedVersion[] = await Promise.all(
      versionsMetadata.map(async (metadata: VersionMetadata) => {
        let packages: PackageReflectionGroup[] = [];

        // Current data needs to be generated on demand
        if (metadata.versionName === CURRENT_VERSION_NAME) {
          const outFile = path.join(
            context.generatedFilesDir,
            `api-typedoc-${context.pluginId}.json`
          );

          await generateJson(
            context.projectRoot,
            entryPoints,
            outFile,
            context.options
          );

          packages = flattenAndGroupPackages(
            packageConfigs,
            await importFile(outFile),
            metadata.versionPath,
            context.options
          );

          // Versioned data is stored in the file system
        } else {
          const outDir = path.join(
            context.versionsDocsDir,
            `version-${metadata.versionName}`
          );

          packages = flattenAndGroupPackages(
            await importFile(path.join(outDir, "api-packages.json")),
            await importFile(path.join(outDir, "api-typedoc.json")),
            metadata.versionPath,
            context.options,
            true
          );
        }

        packages.sort((a, d) => context.options.sortPackages!(a, d));

        // TODO: Load API directory and add to sidebar
        const sidebars = extractSidebar(
          packages,
          context.options.removeScopes ?? [],
          context.options.changelogs ?? false,
          context.options.sortSidebar!
        );

        return {
          ...metadata,
          packages,
          sidebars,
        } as LoadedVersion;
      })
    );

    const typedocGenerator = new TypedocGenerator(context, loadedVersions);
    return typedocGenerator;
  }

  async fetchSidebarItems(): Promise<Record<string, PropSidebarItem[]>> {
    const versionSidebarItems: Record<string, PropSidebarItem[]> =
      Object.fromEntries(
        this.loadedVersions.map((v): [string, PropSidebarItem[]] => [
          v.versionName,
          [...v.sidebars],
        ])
      );
    return versionSidebarItems;
  }

  createRoute(
    info: JSONOutput.Reflection,
    modules?: Record<string, string>
  ): RouteConfig {
    return {
      path: info.permalink,
      exact: true,
      component: path.join(__dirname, "./components/ApiItem.js"),
      modules,
      sidebar: "api",
      // Map the ID here instead of creating a JSON data file,
      // otherwise this will create thousands of files!
      id: info.id,
    };
  }

  async fetchRoutes(): Promise<Record<string, RouteConfig[]>> {
    const versionRoutes: Record<string, RouteConfig[]> = Object.fromEntries(
      await Promise.all(
        this.loadedVersions.map(
          async (loadedVersion): Promise<[string, RouteConfig[]]> => {
            const routes: RouteConfig[] = [];

            loadedVersion.packages.forEach((pkg) => {
              pkg.entryPoints.forEach((entry) => {
                const children =
                  entry.reflection.children?.filter(
                    (child) => !child.permalink?.includes("#")
                  ) ?? [];

                // Map a route for every declaration in the package (the exported APIs)
                const subRoutes = children.map((child) =>
                  this.createRoute(child)
                );

                // Map a top-level package route, otherwise `DocPage` shows a page not found
                subRoutes.push(
                  this.createRoute(
                    entry.reflection,
                    entry.index && this.options.readmes && pkg.readmePath
                      ? { readme: pkg.readmePath }
                      : undefined
                  )
                );

                if (
                  entry.index &&
                  this.options.changelogs &&
                  pkg.changelogPath
                ) {
                  subRoutes.push({
                    path: normalizeUrl([
                      entry.reflection.permalink,
                      "changelog",
                    ]),
                    exact: true,
                    component: path.join(
                      __dirname,
                      "./components/ApiChangelog.js"
                    ),
                    modules: { changelog: pkg.changelogPath },
                    sidebar: "api",
                  });
                }

                routes.push(...subRoutes);
              });
            });

            return [loadedVersion.versionName, routes];
          }
        )
      )
    );

    return versionRoutes;
  }

  async createRoutes(
    actions: PluginContentLoadedActions,
    versionsRoutes: Record<string, RouteConfig[]>,
    versionsMetadata: Record<
      string,
      {
        versionMetadata: string;
        options: string;
        packages: string;
        commands: string;
      }
    >,
    cliVersionsRoutes: Record<string, RouteConfig[]>
  ): Promise<void> {
    await Promise.all(
      this.loadedVersions.map(async (loadedVersion) => {
        const routes = versionsRoutes[loadedVersion.versionName] ?? [];
        if (routes.length === 0) {
          logger.warn(
            `No typedoc routes found for version ${loadedVersion.versionName}`
          );
          return;
        }

        const cliRoutes = cliVersionsRoutes[loadedVersion.versionName] ?? [];
        if (cliRoutes.length === 0) {
          logger.warn(
            `No cli routes found for version ${loadedVersion.versionName}`
          );
          return;
        }

        const { versionMetadata, options, packages, commands } =
          loadedVersion.versionName in versionsMetadata
            ? versionsMetadata[loadedVersion.versionName]
            : {
                versionMetadata: undefined,
                options: undefined,
                packages: undefined,
                commands: undefined,
              };
        if (!versionMetadata || !options || !packages || !commands) {
          logger.warn(
            `Failed to find metadata for version ${loadedVersion.versionName}`
          );
          return;
        }

        const cliIndexPermalink = normalizeUrl([
          loadedVersion.versionPath,
          "cli",
        ]);

        cliRoutes.push({
          path: cliIndexPermalink,
          exact: true,
          component: path.join(__dirname, "./components/CliIndex.js"),
          modules: {
            options,
            commands,
            versionMetadata,
            readme: path.join(
              this.options.projectRoot,
              "cli",
              "README.template.md"
            ),
          },
          sidebar: "api",
        });

        routes.push(...cliRoutes);

        const indexPermalink = normalizeUrl([loadedVersion.versionPath]);

        if (loadedVersion.packages.length > 1) {
          // Only write out the ApiIndex only when we have multiple packages
          // otherwise we will have 2 top-level entries in the route entries
          routes.push({
            path: indexPermalink,
            exact: true,
            component: path.join(__dirname, "./components/ApiIndex.js"),
            modules: {
              options,
              packages,
              versionMetadata,
              readme: path.join(this.context.siteDir, "api", "overview.mdx"),
            },
            sidebar: "api",
          });
        }

        actions.addRoute({
          path: indexPermalink,
          exact: false,
          component: path.join(__dirname, "./components/ApiPage.js"),
          routes: routes,
          modules: {
            options,
            packages,
            commands,
            versionMetadata,
          },
          priority: loadedVersion.routePriority,
        });
      })
    );
  }
}

export class OclifGenerator extends Generator<CliVersionMetadata> {
  type: GeneratorType = "oclif";

  constructor(
    context: GeneratorContext,
    readonly loadedVersions: CliVersionMetadata[],
    readonly commands: ParsedCommand[]
  ) {
    super(context);
  }

  public static async load(
    context: GeneratorContext,
    versionsMetadata: VersionMetadata[]
  ): Promise<OclifGenerator> {
    const allCommands: ParsedCommand[] = readCliCommands(
      context.projectRoot
    ).filter(Boolean);
    logger.warn(`Found ${allCommands.length} OCLIF CLI commands`);
    if (allCommands.length === 0) {
      throw new Error(`Failed to find any commands`);
    }

    const oclifGenerator = new OclifGenerator(
      context,
      versionsMetadata.map((v): CliVersionMetadata => {
        return {
          ...v,
          commands: allCommands,
        };
      }),
      allCommands
    );
    return oclifGenerator;
  }

  async fetchSidebarItems(): Promise<Record<string, PropSidebarItem[]>> {
    const commands = convertToCommands(this.commands);

    const ver: Record<string, PropSidebarItem[]> = Object.fromEntries(
      this.loadedVersions.map((v) => {
        const sidebarItems: PropSidebarItem[] = [
          {
            type: "category",
            label: "@switchboard-xyz/cli",
            collapsed: true,
            collapsible: true,
            items: [
              {
                type: "link",
                label: "Overview",
                href: normalizeUrl([v.versionPath, "cli"]),
              },
              // config items
              {
                type: "category",
                label: "Config",
                collapsed: true,
                collapsible: true,
                items: [
                  {
                    type: "link",
                    label: "Print",
                    href: normalizeUrl([
                      v.versionPath,
                      "cli",
                      "config",
                      "print",
                    ]),
                  },
                  {
                    type: "link",
                    label: "Set",
                    href: normalizeUrl([v.versionPath, "cli", "config", "set"]),
                  },
                ],
              },
              // chain items
              ...["aptos", "near", "solana"].map((chain): PropSidebarItem => {
                return {
                  type: "category",
                  label: capitalizeWords(chain),
                  collapsed: true,
                  collapsible: true,
                  items: [
                    ...Object.entries(
                      commands[chain as "aptos" | "near" | "solana"]
                    ).map(([topic, cmds]): PropSidebarItem => {
                      return {
                        type: "category",
                        label: capitalizeWords(topic),
                        collapsed: true,
                        collapsible: true,
                        items: cmds.map((command): PropSidebarItem => {
                          const subTopic =
                            command.topics.length > 2
                              ? command.topics.slice(2).join(" ")
                              : "";
                          return {
                            type: "link",
                            label: capitalizeWords(subTopic),
                            href: normalizeUrl([
                              v.versionPath,
                              command.permalink,
                            ]),
                          };
                        }),
                      };
                    }),
                  ],
                };
              }),
            ],
          },
        ];

        return [v.versionName, sidebarItems];
      })
    );

    return ver;
  }

  createRoute(
    command: ParsedCommand,
    modules?: Record<string, string>
  ): RouteConfig {
    return {
      path: command.permalink,
      exact: true,
      component: path.join(__dirname, "./components/CliCommand.js"),
      modules,
      sidebar: "api",
      // Map the ID here instead of creating a JSON data file,
      // otherwise this will create thousands of files!
      id: command.id,
    };
  }

  async fetchRoutes(): Promise<Record<string, RouteConfig[]>> {
    const routes: Record<string, RouteConfig[]> = Object.fromEntries(
      this.loadedVersions.map((v) => {
        return [
          v.versionName,
          v.commands.map((c) => {
            return this.createRoute({
              ...c,
              permalink: normalizeUrl([v.versionPath, c.permalink]),
            });
          }),
        ];
      })
    );
    return routes;
  }

  async createRoutes(
    actions: PluginContentLoadedActions,
    versionsRoutes: Record<string, RouteConfig[]>,
    versionsMetadata: Record<string, { versionMetadata: string }>
  ): Promise<void> {
    throw new Error(`disabled`);
    // await Promise.all(
    //   // 1. Define version metadata
    //   // 2. Save packages
    //   // 3. Save plugin options
    //   // 4. Loop through packages & entrypoints and create subroutes
    //   this.loadedVersions.map(async (loadedVersion) => {
    //     const version = loadedVersion.versionName;

    //     const routes = versionsRoutes[loadedVersion.versionName] ?? [];
    //     if (routes.length === 0) {
    //       logger.warn(
    //         `No cli routes found for version ${loadedVersion.versionName}`
    //       );
    //       return;
    //     }

    //     const { versionMetadata } =
    //       loadedVersion.versionName in versionsMetadata
    //         ? versionsMetadata[loadedVersion.versionName]
    //         : { versionMetadata: undefined };
    //     if (!versionMetadata) {
    //       logger.warn(
    //         `Failed to find cli version metadata for version ${loadedVersion.versionName}`
    //       );
    //       return;
    //     }

    //     const commandsData = await actions.createData(
    //       `commands-${version}.json`,
    //       JSON.stringify(loadedVersion.commands)
    //     );

    //     const optionsContextData: ApiOptions = {
    //       banner: this.options.banner ?? "",
    //       breadcrumbs: this.options.breadcrumbs ?? true,
    //       gitRefName: this.options.gitRefName ?? "main",
    //       minimal: this.options.minimal ?? false,
    //       pluginId: "default",
    //       scopes: this.options.removeScopes ?? [],
    //     };
    //     const optionsData = await actions.createData(
    //       "options.json",
    //       JSON.stringify(optionsContextData)
    //     );

    //     const indexPermalink = normalizeUrl([loadedVersion.versionPath, "cli"]);

    //     console.log(`cli index permalink: ${indexPermalink}`);

    //     routes.push({
    //       path: indexPermalink,
    //       exact: true,
    //       component: path.join(__dirname, "./components/CliIndex.js"),
    //       modules: {
    //         options: optionsData,
    //         commands: commandsData,
    //         versionMetadata,
    //       },
    //       sidebar: "api",
    //     });

    //     actions.addRoute({
    //       path: indexPermalink,
    //       exact: false,
    //       component: path.join(__dirname, "./components/CliPage.js"),
    //       routes: routes,
    //       modules: {
    //         options: optionsData,
    //         commands: commandsData,
    //         versionMetadata,
    //       },
    //       priority: loadedVersion.routePriority,
    //     });
    //   })
    // );
  }
}

function capitalizeWords(input: string): string {
  const words = input.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}

type NestedObject<T> = T & { children?: NestedObject<T>[] };

interface ObjectWithPermalink {
  permalink: string;
  [key: string]: any;
}

function nestObjectsByPermalink<T extends ObjectWithPermalink>(
  objects: T[]
): NestedObject<T>[] {
  const rootObjects: NestedObject<T>[] = [];

  const objectMap: Map<string, NestedObject<T>> = new Map();

  for (const object of objects) {
    const parts = object.permalink.split("/");
    let currentObjects = rootObjects;

    for (const part of parts) {
      const permalink =
        currentObjects.length === 0
          ? `/${part}`
          : `${currentObjects[0].permalink}/${part}`;

      let currentObject = objectMap.get(permalink);

      if (!currentObject) {
        currentObject = {
          permalink,
          children: [],
        } as unknown as NestedObject<T>;

        objectMap.set(permalink, currentObject);
        currentObjects.push(currentObject);
      }

      currentObjects = currentObject.children!;
    }

    currentObjects.push(object);
  }

  return rootObjects;
}
