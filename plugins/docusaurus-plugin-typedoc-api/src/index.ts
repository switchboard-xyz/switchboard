/* eslint-disable no-console, sort-keys */

import fs from "fs";
import path from "path";
import logger from "@docusaurus/logger";
import type {
  PluginOptions as DocsPluginOptions,
  PropSidebarItem,
  PropVersionDocs,
  PropVersionMetadata,
} from "@docusaurus/plugin-content-docs";
import { normalizeUrl } from "@docusaurus/utils";
import type {
  LoadContext,
  Plugin,
  PluginContentLoadedActions,
} from "@docusaurus/types";
import { DEFAULT_PLUGIN_ID } from "@docusaurus/utils";
import {
  formatPackagesWithoutHostInfo,
  generateJson,
  loadPackageJsonAndDocs,
} from "./plugin/data";
import {
  getVersionedDocsDirPath,
  readVersionsMetadata,
} from "./plugin/version";
import type {
  DocusaurusPluginTypeDocApiOptions,
  LoadedVersion,
  PackageEntryConfig,
  ResolvedPackageConfig,
} from "./types";
import _ from "lodash";
import {
  TypedocGenerator,
  type GeneratorContext,
  OclifGenerator,
} from "./generator";
import { CURRENT_VERSION_NAME } from "./docs/constants";

/** Map of category label to sort priority */
const SIDEBAR_PRIORITY: Map<string, number> = new Map([
  ["Overview", 1],
  ["@switchboard-xyz/cli", 5],
  ["@switchboard-xyz/common", 10],
  ["@switchboard-xyz/oracle", 11],
  ["@switchboard-xyz/aptos.js", 21],
  ["@switchboard-xyz/evm.js", 31],
  // skip 10, evm might be popular
  ["@switchboard-xyz/near.js", 51],
  ["@switchboard-xyz/solana.js", 61],
  ["@switchboard-xyz/starknet.js", 71],
  ["@switchboard-xyz/sui.js", 81],
]);

const sortPackages = (a: PropSidebarItem, b: PropSidebarItem) => {
  const aName =
    "label" in a && typeof a.label === "string"
      ? a.label
      : "value" in a
      ? a.value
      : a.type;
  const bName =
    "label" in b && typeof b.label === "string"
      ? b.label
      : "value" in b
      ? b.value
      : b.type;
  const aPri = SIDEBAR_PRIORITY.get(aName) ?? 999;
  const bPri = SIDEBAR_PRIORITY.get(bName) ?? 999;
  if (aPri === bPri) {
    return aName.localeCompare(bName);
  }
  return aPri - bPri;
};

interface PluginRouteData {
  versionMetadata: string;
  options: string;
  commands: string;
  packages: string;
}

const DEFAULT_API_DOCS_OPTIONS: DocsPluginOptions = {
  id: "api-docs",
  path: "api",
  routeBasePath: "api",
  editCurrentVersion: false,
  editLocalizedFiles: false,
  numberPrefixParser: (filename: string) => {
    return { filename, numberPrefix: undefined };
  },
  breadcrumbs: false,
  disableVersioning: false,
  includeCurrentVersion: true,
  versions: {},
  admonitions: false,
  remarkPlugins: [],
  rehypePlugins: [],
  beforeDefaultRemarkPlugins: [],
  beforeDefaultRehypePlugins: [],
  sidebarCollapsible: false,
  sidebarCollapsed: false,
  include: ["**/*.{md,mdx}"],
  exclude: [],
  docLayoutComponent: "@theme/DocPage",
  docItemComponent: "@theme/DocItem",
  docTagDocListComponent: "@theme/DocTagDocListPage",
  docTagsListComponent: "@theme/DocTagsListPage",
  docCategoryGeneratedIndexComponent: "@theme/DocCategoryGeneratedIndexPage",
  sidebarItemsGenerator: async function ({
    defaultSidebarItemsGenerator,
    ...rest
  }) {
    const sidebar = await defaultSidebarItemsGenerator(rest);
    return sidebar;
  },
  tagsBasePath: "tags",
};

const DEFAULT_OPTIONS: Required<DocusaurusPluginTypeDocApiOptions> = {
  banner: "",
  breadcrumbs: true,
  changelogName: "CHANGELOG.md",
  changelogs: false,
  debug: false,
  disableVersioning: false,
  exclude: [],
  gitRefName: "master",
  id: DEFAULT_PLUGIN_ID,
  includeCurrentVersion: true,
  lastVersion: "",
  minimal: false,
  onlyIncludeVersions: [],
  packageJsonName: "package.json",
  packages: [],
  projectRoot: ".",
  sortPackages: (a, d) => a.packageName.localeCompare(d.packageName),
  sortSidebar: (a, d) => a.localeCompare(d),
  readmeName: "README.md",
  readmes: false,
  removeScopes: [],
  routeBasePath: "api",
  tsconfigName: "tsconfig.json",
  typedocOptions: {},
  versions: {},
  includeApiDir: true,
  apiDocs: DEFAULT_API_DOCS_OPTIONS,
};

type MyPluginContent = {
  typedocs: TypedocGenerator;
  oclif: OclifGenerator;
};

export default function typedocApiPlugin(
  context: LoadContext,
  pluginOptions: DocusaurusPluginTypeDocApiOptions
): Plugin<MyPluginContent> {
  logger.warn(`Using custom typedoc plugin`);
  const options: Required<DocusaurusPluginTypeDocApiOptions> = {
    ...DEFAULT_OPTIONS,
    ...pluginOptions,
    apiDocs: {
      ...DEFAULT_OPTIONS.apiDocs,
      ...pluginOptions.apiDocs,
    },
  };
  const { changelogs, id: pluginId, projectRoot, readmes } = options;
  const isDefaultPluginId = pluginId === DEFAULT_PLUGIN_ID;
  const versionsMetadata = readVersionsMetadata(context, options);
  const versionsDocsDir = getVersionedDocsDirPath(context.siteDir, pluginId);

  const generatorContext: GeneratorContext = {
    options,
    generatedFilesDir: context.generatedFilesDir,
    projectRoot,
    pluginId,
    versionsDocsDir,
    siteDir: context.siteDir,
  };

  // Determine entry points from configs
  const entryPoints: string[] = [];
  const packageConfigs: ResolvedPackageConfig[] = options.packages.map(
    (pkgItem) => {
      const pkgConfig =
        typeof pkgItem === "string" ? { path: pkgItem } : pkgItem;
      const entries: Record<string, PackageEntryConfig> = {};

      if (!pkgConfig.entry || typeof pkgConfig.entry === "string") {
        entries.index = {
          label: "Index",
          path: pkgConfig.entry ?? ("src/index.ts" as any),
        };
      } else {
        Object.entries(pkgConfig.entry).forEach(([importPath, entryConfig]) => {
          entries[importPath] =
            typeof entryConfig === "string"
              ? {
                  label: "Index",
                  path: entryConfig,
                }
              : entryConfig;
        });
      }

      Object.values(entries).forEach((entryConfig) => {
        entryPoints.push(path.join(pkgConfig.path, entryConfig.path));
      });

      return {
        entryPoints: entries,
        packagePath: pkgConfig.path || ".",
        packageSlug: pkgConfig.slug ?? path.basename(pkgConfig.path),
        // Load later on
        packageName: "",
        packageVersion: "",
      };
    }
  );

  return {
    name: "docusaurus-plugin-typedoc-api",

    extendCli(cli) {
      const command = isDefaultPluginId
        ? "api:version"
        : `api:version:${pluginId}`;
      const commandDescription = isDefaultPluginId
        ? "Tag a new API version"
        : `Tag a new API version (${pluginId})`;

      cli
        .command(command)
        .arguments("<version>")
        .description(commandDescription)
        .action(async (version: unknown) => {
          const outDir = path.join(versionsDocsDir, `version-${version}`);
          const prefix = isDefaultPluginId ? "api" : pluginId;

          console.log(`[${prefix}]:`, "Generating docs...");

          await generateJson(
            projectRoot,
            entryPoints,
            path.join(outDir, "api-typedoc.json"),
            options
          );

          console.log(`[${prefix}]:`, "Persisting packages...");

          // Load info from `package.json`s
          packageConfigs.forEach((cfg) => {
            const { packageJson } = loadPackageJsonAndDocs(
              path.join(options.projectRoot, cfg.packagePath),
              options.packageJsonName,
              options.readmeName,
              options.changelogName
            );

            // eslint-disable-next-line no-param-reassign
            cfg.packageName = packageJson.name;
            // eslint-disable-next-line no-param-reassign
            cfg.packageVersion = packageJson.version;
          });

          await fs.promises.writeFile(
            path.join(outDir, "api-packages.json"),
            JSON.stringify(packageConfigs),
            "utf8"
          );

          console.log(`[${prefix}]:`, `version ${version} created!`);
        });
    },

    getPathsToWatch(): Array<string> {
      const projectRoot = path.join(__dirname, "..");

      const libDir = path.join(projectRoot, "lib");
      const files = getFilesInDirectory(libDir, [".js", ".ts"]);

      const assetsDir = path.join(projectRoot, "assets");
      const assetFiles = getFilesInDirectory(assetsDir);
      files.push(...assetFiles);

      return files;
    },

    async loadContent(): Promise<MyPluginContent> {
      const typedocs = await TypedocGenerator.load(
        generatorContext,
        // (await versionsMetadata).filter((v) => v.versionName === "current"),
        await versionsMetadata,
        packageConfigs,
        entryPoints
      );

      const oclif = await OclifGenerator.load(
        generatorContext,
        await versionsMetadata
      );

      return { typedocs, oclif };
    },

    async contentLoaded({
      content,
      actions,
    }: {
      content: MyPluginContent;
      actions: PluginContentLoadedActions;
    }) {
      if (!content) {
        return;
      }

      async function createPluginVersionData(
        loadedVersion: LoadedVersion,
        docs: PropVersionDocs
      ): Promise<PluginRouteData> {
        const version = loadedVersion.versionName;

        const versionMetadata = await actions.createData(
          `version-${loadedVersion.versionName}.json`,
          JSON.stringify({
            badge: loadedVersion.versionBadge,
            banner: loadedVersion.versionBanner,
            className: loadedVersion.versionClassName,
            docs,
            docsSidebars: {
              api:
                loadedVersion.versionName in sidebarItems
                  ? sidebarItems[loadedVersion.versionName]
                  : [],
            },
            isLast: loadedVersion.isLast,
            label: loadedVersion.versionLabel,
            noIndex: false,
            pluginId: "default",
            version: loadedVersion.versionName,
          } as PropVersionMetadata)
        );

        const optionsData = await actions.createData(
          "options.json",
          JSON.stringify({
            banner: options.banner ?? "",
            breadcrumbs: options.breadcrumbs ?? true,
            gitRefName: options.gitRefName ?? "main",
            minimal: options.minimal ?? false,
            pluginId: "default",
            scopes: options.removeScopes ?? [],
          })
        );

        const packagesData = await actions.createData(
          `packages-${version}.json`,
          JSON.stringify(formatPackagesWithoutHostInfo(loadedVersion.packages))
        );

        const commandsData = await actions.createData(
          `commands-${version}.json`,
          JSON.stringify(content.oclif.commands)
        );

        return {
          versionMetadata,
          options: optionsData,
          packages: packagesData,
          commands: commandsData,
        };
      }

      /** Create the versionMetadata and react context data for each version */
      async function createPluginData(
        loadedVersions: LoadedVersion[]
      ): Promise<Record<string, PluginRouteData>> {
        const docs: PropVersionDocs = {};
        // Create an index of versions for quick lookups.
        // This is hacky, but it works, so shrug.
        content.typedocs.loadedVersions.forEach((loadedVersion) => {
          // should we include 'current' version here?
          if (loadedVersion.versionName !== CURRENT_VERSION_NAME) {
            docs[loadedVersion.versionName] = {
              id: loadedVersion.versionPath,
              title: loadedVersion.versionLabel,
              description: loadedVersion.versionLabel,
            };
          }
        });
        const pluginData: Record<string, PluginRouteData> = Object.fromEntries(
          await Promise.all(
            loadedVersions.map(async (loadedVersion) => {
              const pluginData = await createPluginVersionData(
                loadedVersion,
                docs
              );
              return [loadedVersion.versionName, pluginData];
            })
          )
        );
        return pluginData;
      }

      const typedocSidebarItems = await content.typedocs.fetchSidebarItems();
      const oclifSidebarItems = await content.oclif.fetchSidebarItems();
      const sidebarItems = mergeObjects(typedocSidebarItems, oclifSidebarItems);

      // sort sidebar items then add some hard coded links
      Object.keys(sidebarItems).forEach((version) => {
        const versionItems = sidebarItems[version].sort(sortPackages);
        versionItems.unshift(
          {
            type: "link",
            label: "Overview",
            href: normalizeUrl(["/api"]), // TODO: Handle version path dynamically somehow
          },
          {
            type: "html",
            value: '<div class="sidebar-buffer" />',
          },
          {
            type: "html",
            className: "header-typescript-link",
            value: " <b>Typescript</b>",
          },
          {
            type: "html",
            value: '<hr class="dropdown-separator">',
          }
        );
        versionItems.push(
          {
            type: "html",
            value: '<div class="sidebar-buffer" />',
          },
          {
            type: "html",
            className: "header-rust-link",
            value: " <b>Rust</b>",
          },
          {
            type: "html",
            value: '<hr class="dropdown-separator">',
          },
          {
            type: "link",
            label: "switchboard-v2",
            href: "https://docs.rs/crate/switchboard-v2",
          }
        );
        sidebarItems[version] = versionItems;
      });

      // This is where the sidebar gets created
      const pluginData: Record<string, PluginRouteData> =
        await createPluginData(content.typedocs.loadedVersions);

      const typedocRoutes = await content.typedocs.fetchRoutes();
      const oclifRoutes = await content.oclif.fetchRoutes();
      // const routes = mergeObjects(typedocRoutes, oclifRoutes);

      await content.typedocs.createRoutes(
        actions,
        typedocRoutes,
        pluginData,
        oclifRoutes
      );
      // await content.oclif.createRoutes(actions, oclifRoutes, versionsMetadata);

      // TODO: call actions.addRoute here after all of the needed routes are generated
    },

    configureWebpack(config, isServer, utils) {
      if (!readmes && !changelogs) {
        return {};
      }

      // Whitelist the folders that this webpack rule applies to, otherwise we collide with the native
      // docs/blog plugins. We need to include the specific files only, as in polyrepo mode, the `cfg.packagePath`
      // can be project root (where the regular docs are too).
      const include = packageConfigs.flatMap((cfg) => [
        path.join(options.projectRoot, cfg.packagePath, options.readmeName),
        path.join(options.projectRoot, cfg.packagePath, options.changelogName),
      ]);

      return {
        module: {
          rules: [
            {
              test: /\.mdx?$/,
              include,
              use: [
                utils.getJSLoader({ isServer }),
                {
                  loader: require.resolve("@docusaurus/mdx-loader"),
                  options: {
                    admonitions: true,
                    staticDir: path.join(context.siteDir, "static"),
                    // Since this isnt a doc/blog page, we can get
                    // away with it being a partial!
                    isMDXPartial: () => true,
                    markdownConfig: context.siteConfig.markdown,
                  },
                },
                {
                  loader: path.resolve(__dirname, "./markdownLoader.js"),
                },
              ],
            },
          ],
        },
      };
    },
  };
}

function mergeObjects<T>(
  a: Record<string, Array<T>>,
  ...others: Array<Record<string, Array<T>>>
): Record<string, Array<T>> {
  let merged: Record<string, Array<T>> = { ...a };
  others.forEach((b) => {
    Object.keys(b).forEach((key) => {
      if (key in merged) {
        merged[key] = [...merged[key], ...b[key]];
      } else {
        merged[key] = [...b[key]];
      }
    });
  });

  return merged;
}

// function insertAutogeneratedText(fileContent: string, newText: string): string {
//   const startDelimiter = "// START:AUTOGENERATED";
//   const endDelimiter = "// END:AUTOGENERATED";

//   const lines = fileContent.split("\n");
//   const startingLine = lines.findIndex((l) => l.startsWith(startDelimiter));
//   if (startingLine === -1) {
//     throw new Error(`Failed to find starting delimiter`);
//   }
//   const endingLine = lines.findIndex((l) => l.startsWith(endDelimiter));
//   if (endingLine === -1) {
//     throw new Error(`Failed to find ending delimiter`);
//   }

//   const finalLines = [
//     ...lines.slice(0, startingLine),
//     startDelimiter,
//     newText,
//     endDelimiter,
//     ...lines.slice(endingLine + 1),
//   ];

//   return finalLines.join("\n");
// }

function getFilesInDirectory(dir: string, exts?: string[]): string[] {
  let myFiles: string[] = [];

  // Read the contents of the directory
  const files = fs.readdirSync(dir);

  // Iterate over the files in the directory
  for (const file of files) {
    const filePath = path.join(dir, file);

    // Check if the file is a directory
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      // Recursively search for TS files in subdirectories
      myFiles = myFiles.concat(getFilesInDirectory(filePath));
    } else {
      // Check if the file has a .ts extension
      const ext = path.extname(file);
      if (!exts || exts.includes(ext)) {
        myFiles.push(filePath);
      }
    }
  }

  return myFiles;
}
