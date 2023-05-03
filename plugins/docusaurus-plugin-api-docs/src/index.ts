/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from "path";
import fs from "fs";
import _ from "lodash";
import logger from "@docusaurus/logger";
import {
  docuHash,
  aliasedSitePath,
  getContentPathList,
  addTrailingPathSeparator,
  createAbsoluteFilePathMatcher,
  DEFAULT_PLUGIN_ID,
} from "@docusaurus/utils";
import {
  loadSidebars,
  resolveSidebarPathOption,
} from "./modules/docs/sidebars";

import { cliDocsVersionCommand } from "./modules/docs/cli";

import type {
  DocFrontMatter,
  VersionMetadata,
} from "@docusaurus/plugin-content-docs";
import type { LoadContext, Plugin } from "@docusaurus/types";
import type {
  SourceToPermalink,
  DocsMarkdownOption,
} from "./modules/docs/types";
import type { RuleSetRule } from "webpack";
import type { PluginOptions, LoadedContent } from "./types";
import { VERSIONS_JSON_FILE } from "./modules/docs/constants";
import type {
  PackageEntryConfig,
  ResolvedPackageConfig,
} from "./modules/typedocs/types";
import { getVersionedDocsDirPath } from "./modules/typedocs/plugin/version";
import {
  generateJson,
  loadPackageJsonAndDocs,
} from "./modules/typedocs/plugin/data";
import { apiDocsContentLoaded, apiDocsLoadContent } from "./modules/docs";
import { readVersionsMetadata } from "./modules/docs/versions";
import { DEFAULT_OPTIONS } from "./options";
import { DEFAULT_OPTIONS as TYPEDOCS_DEFAULT_OPTIONS } from "./modules/typedocs";

export default async function pluginApiDocs(
  context: LoadContext,
  options: PluginOptions
): Promise<Plugin<LoadedContent>> {
  const { siteDir, generatedFilesDir, baseUrl, siteConfig } = context;

  // Mutate options to resolve sidebar path according to siteDir
  options.sidebarPath = resolveSidebarPathOption(siteDir, options.sidebarPath);

  const pluginId = options.id;

  // const versionsMetadata = await readVersionsMetadata({ context, options });
  const versionsMetadata: Array<VersionMetadata> = [];
  const docsVersionsMetadata = readVersionsMetadata({
    context,
    options: options,
  });
  const versionsDocsDir = getVersionedDocsDirPath(context.siteDir, pluginId);

  const pluginDataDirRoot = path.join(
    generatedFilesDir,
    "docusaurus-plugin-api-docs"
  );
  const dataDir = path.join(pluginDataDirRoot, pluginId);

  // Determine entry points from configs
  const entryPoints: string[] = [];
  const packageConfigs: ResolvedPackageConfig[] = (
    options.typedocs?.packages ?? []
  ).map((pkgItem) => {
    const pkgConfig = typeof pkgItem === "string" ? { path: pkgItem } : pkgItem;
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
  });

  return {
    name: "docusaurus-plugin-api-docs",

    extendCli(cli) {
      const isDefaultPluginId = pluginId === DEFAULT_PLUGIN_ID;

      // Need to create one distinct command per plugin instance
      // otherwise 2 instances would try to execute the command!
      const command = isDefaultPluginId
        ? "api:version"
        : `api:version:${pluginId}`;
      const commandDescription = isDefaultPluginId
        ? "Tag a new api version"
        : `Tag a new api version (${pluginId})`;

      cli
        .command(command)
        .arguments("<version>")
        .description(commandDescription)
        .action(async (version: unknown) => {
          await cliDocsVersionCommand(version, options, context);

          const outDir = path.join(versionsDocsDir, `version-${version}`);
          const prefix = isDefaultPluginId ? "api" : pluginId;

          console.log(`[${prefix}]:`, "Generating docs...");

          await generateJson(
            options.typedocs.projectRoot,
            entryPoints,
            path.join(outDir, "api-typedoc.json"),
            options.typedocs
          );

          console.log(`[${prefix}]:`, "Persisting packages...");

          // Load info from `package.json`s
          packageConfigs.forEach((cfg) => {
            const { packageJson } = loadPackageJsonAndDocs(
              path.join(options.typedocs.projectRoot, cfg.packagePath),
              options.typedocs.packageJsonName,
              options.typedocs.readmeName,
              options.typedocs.changelogName
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

    // getTranslationFiles({ content }) {
    //   return getLoadedContentTranslationFiles(content);
    // },

    getPathsToWatch() {
      const allPaths: Array<string> = [];

      // if (docPlugin.getPathsToWatch !== undefined) {
      //   allPaths.push(...docPlugin.getPathsToWatch());
      // }
      // if (typedocPlugin && typedocPlugin.getPathsToWatch !== undefined) {
      //   allPaths.push(...typedocPlugin.getPathsToWatch());
      // }

      return allPaths;
    },

    async loadContent(): Promise<LoadedContent> {
      // if (!docPlugin.loadContent) {
      //   throw new Error(`No doc content to load`);
      // }
      // const docs = await docPlugin.loadContent();

      // const typedocs =
      //   typedocPlugin && typedocPlugin.loadContent !== undefined
      //     ? await typedocPlugin.loadContent()
      //     : undefined;

      // return { docs, typedocs };

      const docs = await apiDocsLoadContent(
        context,
        options,
        await docsVersionsMetadata
      );

      return { docs };
    },

    async contentLoaded({ content, actions, allContent }) {
      // const { docs, typedocs } = content;
      // if (!docPlugin.contentLoaded) {
      //   throw new Error(`No doc content to load`);
      // }
      // await docPlugin.contentLoaded({
      //   content: docs,
      //   allContent,
      //   actions,
      // });
      // if (typedocs && typedocPlugin && typedocPlugin.contentLoaded) {
      //   await typedocPlugin.contentLoaded({
      //     content: typedocs,
      //     actions,
      //     allContent, // TODO: We may need to update this after contentLoaded is called for the first plugin
      //   });
      // }

      // handle api docs first
      try {
        logger.warn(
          `API routes (# versions = ${content.docs.loadedVersions.length}) loaded`
        );

        await apiDocsContentLoaded(
          actions,
          options,
          content.docs.loadedVersions,
          pluginId,
          pluginDataDirRoot,
          context.baseUrl
        );

        logger.warn(
          `API routes (# versions = ${content.docs.loadedVersions.length}) added`
        );
      } catch (error) {
        logger.error(`Failed to load API docs`);
        logger.error(error);
      }
    },

    configureWebpack(_config, isServer, utils, content) {
      const { getJSLoader } = utils;
      const {
        rehypePlugins,
        remarkPlugins,
        beforeDefaultRehypePlugins,
        beforeDefaultRemarkPlugins,
      } = options;

      function getSourceToPermalink(): SourceToPermalink {
        const allDocs = content.docs.loadedVersions.flatMap((v) => v.docs);
        return Object.fromEntries(
          allDocs.map(({ source, permalink }) => [source, permalink])
        );
      }

      const docsMarkdownOptions: DocsMarkdownOption = {
        siteDir,
        sourceToPermalink: getSourceToPermalink(),
        versionsMetadata,
        onBrokenMarkdownLink: (brokenMarkdownLink) => {
          logger.report(
            siteConfig.onBrokenMarkdownLinks
          )`Docs markdown link couldn't be resolved: (url=${brokenMarkdownLink.link}) in path=${brokenMarkdownLink.filePath} for version number=${brokenMarkdownLink.contentPaths.versionName}`;
        },
      };

      function createMDXLoaderRule(): RuleSetRule {
        const contentDirs = versionsMetadata
          .flatMap(getContentPathList)
          // Trailing slash is important, see https://github.com/facebook/docusaurus/pull/3970
          .map(addTrailingPathSeparator);
        return {
          test: /\.mdx?$/i,
          include: contentDirs,
          use: [
            getJSLoader({ isServer }),
            {
              loader: require.resolve("@docusaurus/mdx-loader"),
              options: {
                admonitions: options.admonitions,
                remarkPlugins,
                rehypePlugins,
                beforeDefaultRehypePlugins,
                beforeDefaultRemarkPlugins,
                staticDirs: siteConfig.staticDirectories.map((dir) =>
                  path.resolve(siteDir, dir)
                ),
                siteDir,
                isMDXPartial: createAbsoluteFilePathMatcher(
                  options.exclude,
                  contentDirs
                ),
                metadataPath: (mdxPath: string) => {
                  // Note that metadataPath must be the same/in-sync as
                  // the path from createData for each MDX.
                  const aliasedPath = aliasedSitePath(mdxPath, siteDir);
                  return path.join(dataDir, `${docuHash(aliasedPath)}.json`);
                },
                // Assets allow to convert some relative images paths to
                // require(...) calls
                createAssets: ({
                  frontMatter,
                }: {
                  frontMatter: DocFrontMatter;
                }) => ({
                  image: frontMatter.image,
                }),
                markdownConfig: siteConfig.markdown,
              },
            },
            {
              loader: path.resolve(
                __dirname,
                "./modules/docs/markdown/index.js"
              ),
              options: docsMarkdownOptions,
            },
            // {
            //   loader: path.resolve(
            //     __dirname,
            //     "./modules/typedocs/markdownLoader.js"
            //   ),
            // },
          ].filter(Boolean),
        };
      }

      return {
        ignoreWarnings: [
          // Suppress warnings about non-existing of versions file.
          (e) =>
            e.message.includes("Can't resolve") &&
            e.message.includes(VERSIONS_JSON_FILE),
        ],
        resolve: {
          // symlinks: true,
          alias: {
            "~api": pluginDataDirRoot,
          },
        },
        module: {
          rules: [createMDXLoaderRule()],
        },
      };
    },
  };
}

export { validateOptions } from "./options";
