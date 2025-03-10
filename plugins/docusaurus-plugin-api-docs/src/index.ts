/* eslint-disable no-console, sort-keys */

import { CURRENT_VERSION_NAME } from "./docs/constants";
import { ProtobufGenerator } from "./modules/protobufs/generator";
import { TypedocGenerator } from "./modules/typedoc";
import { formatPackagesWithoutHostInfo } from "./plugin/data";
import {
  getVersionedDocsDirPath,
  readVersionsMetadata,
} from "./plugin/version";
import { DEFAULT_OPTIONS } from "./const";
import type {
  DocusaurusPluginTypeDocApiOptions,
  GeneratorContext,
  LoadedVersion,
  PackageEntryConfig,
  PluginRouteData,
  ResolvedPackageConfig,
} from "./types";
import { getComponentPath } from "./utils";

import logger from "@docusaurus/logger";
import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";
import type {
  PropVersionDocs,
  PropVersionMetadata,
} from "@docusaurus/plugin-content-docs";
import type {
  LoadContext,
  Plugin,
  PluginContentLoadedActions,
  RouteConfig,
} from "@docusaurus/types";
import { normalizeUrl } from "@docusaurus/utils";
import fs from "fs";
import _ from "lodash";
import path from "path";

type MyPluginContent = {
  typedocs: TypedocGenerator;
  protos: ProtobufGenerator;
};

export default function apiDocsPlugin(
  context: LoadContext,
  pluginOptions: DocusaurusPluginTypeDocApiOptions
): Plugin<MyPluginContent> {
  logger.info(`Using custom api docs plugin`);

  const localOptionsFile = path.join(context.siteDir, "api-docs.config.js");
  const localOptions: Partial<DocusaurusPluginTypeDocApiOptions> =
    fs.existsSync(localOptionsFile) ? require(localOptionsFile) : undefined;
  if (localOptions) {
    logger.info(`Loaded custom api doc options from config file`);
  }

  const options: Required<DocusaurusPluginTypeDocApiOptions> = {
    ...DEFAULT_OPTIONS,
    ...pluginOptions,
    ...localOptions,
  };
  const { changelogs, id: pluginId, projectRoot, readmes } = options;
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
    name: "docusaurus-plugin-api-docs",

    getPathsToWatch(): Array<string> {
      const pluginRoot = path.join(__dirname, "..");

      const libDir = path.join(pluginRoot, "lib");
      const files = getFilesInDirectory(libDir, [".js", ".ts"]);

      const assetsDir = path.join(pluginRoot, "assets");
      const assetFiles = getFilesInDirectory(assetsDir);
      files.push(...assetFiles);

      // watch plugin config file
      files.push(path.join(context.siteDir, "api-docs.config.js"));

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

      const protos = await ProtobufGenerator.load(
        generatorContext,
        await versionsMetadata
      );

      return { typedocs, protos };
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

        const pluginOptions = await actions.createData(
          "plugin-options.json",
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

        const protosData = await actions.createData(
          `protobuf-messages-${version}.json`,
          JSON.stringify(
            [
              content.protos.protobufs.oracleJob,
              content.protos.protobufs.oracleJobTask,
            ].concat(...content.protos.protobufs.tasks)
          )
        );

        return {
          versionMetadata,
          pluginOptions: pluginOptions,
          packages: packagesData,
          protobufMessages: protosData,
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
      const protobufSidebarItems = await content.protos.fetchSidebarItems();

      const sidebarItems = mergeObjects(
        typedocSidebarItems
        // protobufSidebarItems
      );

      // sort sidebar items then add some hard coded links
      Object.keys(sidebarItems).forEach((version) => {
        const protoSidebarItems = protobufSidebarItems[version] ?? [];
        const versionSidebarItems: PropSidebarItem[] = [
          // {
          // type: "link",
          // label: "Overview",
          // href: normalizeUrl(["/"]),
          // },
          {
            type: "html",
            value: '<div class="sidebar-buffer" />',
          },
          {
            type: "html",
            className: "heading_icon__protobuf",
            value: " <b>Protobuf</b>",
          },
          {
            type: "html",
            value: '<hr class="dropdown-separator">',
          },
          ...protoSidebarItems,
          {
            type: "html",
            value: '<div class="sidebar-buffer" />',
          },
          // {
          //   type: "html",
          //   className: "heading_icon__typescript",
          //   value: " <b>Typescript</b>",
          // },
          // {
          //   type: "html",
          //   value: '<hr class="dropdown-separator">',
          // },
          // ...sortedTypedocItems,
          // {
          //   type: "html",
          //   value: '<div class="sidebar-buffer" />',
          // },
          // {
          //   type: "html",
          //   className: "heading_icon__rust",
          //   value: " <b>Rust</b>",
          // },
          // {
          //   type: "html",
          //   value: '<hr class="dropdown-separator">',
          // },
          // {
          //   type: "link",
          //   label: "switchboard-common",
          //   href: "https://docs.rs/switchboard-common/latest/switchboard_common/",
          // },
          // {
          //   type: "link",
          //   label: "switchboard-evm",
          //   href: "https://docs.rs/switchboard-evm/latest/switchboard_evm/",
          // },
          // {
          //   type: "link",
          //   label: "switchboard-solana",
          //   href: "https://docs.rs/switchboard-solana/latest/switchboard_solana/",
          // },
          // {
          //   type: "link",
          //   label: "switchboard-utils",
          //   href: "https://docs.rs/switchboard-utils/latest/switchboard_utils/",
          // },
          // {
          //   type: "link",
          //   label: "[deprecated ]switchboard-v2",
          //   href: "https://docs.rs/switchboard-v2/latest/switchboard_v2/",
          // },
          // {
          //   type: "html",
          //   value: '<div class="sidebar-buffer" />',
          // },
          // {
          //   type: "html",
          //   className: "heading_icon__move",
          //   value: " <b>Move</b>",
          // },
          // {
          //   type: "html",
          //   value: '<hr class="dropdown-separator">',
          // },
          // {
          //   type: "link",
          //   label: "placeholder",
          //   href: "#",
          // },
          // {
          //   type: "html",
          //   value: '<div class="sidebar-buffer" />',
          // },
          // {
          //   type: "html",
          //   className: "heading_icon__solidity",
          //   value: " <b>Solidity</b>",
          // },
          // {
          //   type: "html",
          //   value: '<hr class="dropdown-separator">',
          // },
          // {
          //   type: "link",
          //   label: "placeholder",
          //   href: "#",
          // },
          // {
          //   type: "link",
          //   label: "placeholder",
          //   href: "#",
          // },
        ];
        sidebarItems[version] = versionSidebarItems;
      });

      // This is where the sidebar gets created
      const pluginData: Record<string, PluginRouteData> =
        await createPluginData(content.typedocs.loadedVersions);

      const typedocVersionsRoutes = await content.typedocs.fetchRoutes();
      const protobufVersionsRoutes = await content.protos.fetchRoutes();

      const versionsMetadata = pluginData;

      const loadedVersions = content.typedocs.loadedVersions;

      await Promise.all(
        loadedVersions.map(async (loadedVersion: LoadedVersion) => {
          // First collect and combine all routes, we will need this to generate the sidebar
          const allRoutes: RouteConfig[] = [];

          const typedocRoutes =
            typedocVersionsRoutes[loadedVersion.versionName] ?? [];
          allRoutes.push(...typedocRoutes);
          if (typedocRoutes.length === 0) {
            logger.warn(
              `No typedoc routes found for version ${loadedVersion.versionName}`
            );
            return;
          }

          const protobufRoutes =
            protobufVersionsRoutes[loadedVersion.versionName] ?? [];
          allRoutes.push(...protobufRoutes);
          if (protobufRoutes.length === 0) {
            logger.warn(
              `No protobuf routes found for version ${loadedVersion.versionName}`
            );
          }

          // Then get the pluginData paths to build the components
          const { versionMetadata, pluginOptions, packages, protobufMessages } =
            loadedVersion.versionName in versionsMetadata
              ? versionsMetadata[loadedVersion.versionName]
              : {
                  versionMetadata: undefined,
                  pluginOptions: undefined,
                  packages: undefined,
                  protobufMessages: undefined,
                };
          if (
            !versionMetadata ||
            !pluginOptions ||
            !packages ||
            !protobufMessages
          ) {
            logger.warn(
              `Failed to find metadata for version ${loadedVersion.versionName}`
            );
            return;
          }

          // Create the protobuf overview routes
          allRoutes.push({
            path: normalizeUrl([
              loadedVersion.versionPath,
              "protos",
              "OracleJob",
            ]),
            exact: true,
            component: getComponentPath("ProtoIndex"),
            modules: {
              options: pluginOptions,
              versionMetadata,
              // This is the README text at the top of the page.
              readme: path.join(context.siteDir, "protos", "index.mdx"),
              tasks: protobufMessages,
            },
            sidebar: "api",
          });

          const indexPermalink = normalizeUrl([loadedVersion.versionPath]);

          allRoutes.push({
            path: indexPermalink,
            exact: true,
            component: getComponentPath("OverviewPage"),
            modules: {
              options: pluginOptions,
              packages,
              versionMetadata,
              // This is the README text at the top of the page.
              readme: path.join(context.siteDir, "index.mdx"),
              tasks: protobufMessages,
            },
            sidebar: "api",
          });

          actions.addRoute({
            path: indexPermalink,
            exact: false,
            component: getComponentPath("ApiPage"),
            routes: allRoutes,
            modules: {
              options: pluginOptions,
              packages,
              versionMetadata,
              protobufMessages,
            },
            priority: loadedVersion.routePriority,
          });
        })
      );

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
        resolve: {
          fallback: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            process: "process/browser",
          },
        },
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
                    // Since this isn't a doc/blog page, we can get
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
  const merged: Record<string, Array<T>> = { ...a };
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
