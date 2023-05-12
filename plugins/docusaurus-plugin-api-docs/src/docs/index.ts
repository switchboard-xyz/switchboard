import type { CommanderStatic } from "commander";
import type {
  DocFrontMatter,
  DocMetadataBase,
  LoadedContent,
  LoadedVersion,
  PluginOptions,
  PropTagsListPage,
  VersionMetadata,
} from "@docusaurus/plugin-content-docs";
import type { Configuration, RuleSetRule } from "webpack";
import {
  addDocNavigation,
  type DocEnv,
  processDocMetadata,
  readVersionDocs,
} from "./docs";
import path from "path";
import logger from "@docusaurus/logger";
import type {
  ConfigureWebpackUtils,
  DocusaurusConfig,
  LoadContext,
  PluginContentLoadedActions,
} from "@docusaurus/types";
import { loadSidebars } from "./sidebars";
import {
  addTrailingPathSeparator,
  aliasedSitePath,
  createAbsoluteFilePathMatcher,
  createSlugger,
  docuHash,
  getContentPathList,
  normalizeUrl,
  posixPath,
} from "@docusaurus/utils";
import { createSidebarsUtils } from "./sidebars/utils";
import _ from "lodash";
import type {
  DocsMarkdownOption,
  FullVersion,
  SourceToPermalink,
  VersionTag,
} from "./types";
import { getVersionTags } from "./tags";
import { toTagDocListProp } from "./props";
import { createVersionRoutes } from "./routes";
import { toGlobalDataVersion } from "./globalData";
import { getCategoryGeneratedIndexMetadataList } from "./categoryGeneratedIndex";
import { cliDocsVersionCommand } from "./cli";
import { VERSIONS_JSON_FILE } from "./constants";

export type DocFile = {
  contentPath: string; // /!\ may be localized
  filePath: string; // /!\ may be localized
  source: string;
  content: string;
};

export async function apiDocsExtendCli(
  cli: CommanderStatic,
  context: LoadContext,
  options: PluginOptions,
  pluginId: string = "api"
) {
  const isDefaultPluginId = false;
  // Need to create one distinct command per plugin instance
  // otherwise 2 instances would try to execute the command!
  const command = isDefaultPluginId
    ? "docs:version"
    : `docs:version:${pluginId}`;
  const commandDescription = isDefaultPluginId
    ? "Tag a new docs version"
    : `Tag a new docs version (${pluginId})`;

  cli
    .command(command)
    .arguments("<version>")
    .description(commandDescription)
    .action((version: unknown) =>
      cliDocsVersionCommand(version, options, context)
    );
}

export async function apiDocsLoadContent(
  context: LoadContext,
  options: PluginOptions,
  versionsMetadata: VersionMetadata[]
): Promise<LoadedContent> {
  async function loadVersionDocsBase(
    versionMetadata: VersionMetadata
  ): Promise<DocMetadataBase[]> {
    const docFiles = await readVersionDocs(versionMetadata, options);
    if (docFiles.length === 0) {
      throw new Error(
        `Docs version "${
          versionMetadata.versionName
        }" has no docs! At least one doc should exist at "${path.relative(
          context.siteDir,
          versionMetadata.contentPath
        )}".`
      );
    }
    function processVersionDoc(docFile: DocFile) {
      return processDocMetadata({
        docFile,
        versionMetadata,
        context,
        options,
        env: process.env.NODE_ENV as DocEnv,
      });
    }
    return Promise.all(docFiles.map(processVersionDoc));
  }

  async function doLoadVersion(
    versionMetadata: VersionMetadata
  ): Promise<LoadedVersion> {
    const docsBase: DocMetadataBase[] = await loadVersionDocsBase(
      versionMetadata
    );

    const [drafts, docs] = _.partition(docsBase, (doc) => doc.draft);

    const sidebars = await loadSidebars(versionMetadata.sidebarFilePath, {
      sidebarItemsGenerator: options.sidebarItemsGenerator,
      numberPrefixParser: options.numberPrefixParser,
      docs,
      drafts,
      version: versionMetadata,
      sidebarOptions: {
        sidebarCollapsed: options.sidebarCollapsed,
        sidebarCollapsible: options.sidebarCollapsible,
      },
      categoryLabelSlugger: createSlugger(),
    });

    const sidebarsUtils = createSidebarsUtils(sidebars);

    return {
      ...versionMetadata,
      docs: addDocNavigation(
        docs,
        sidebarsUtils,
        versionMetadata.sidebarFilePath as string
      ),
      drafts,
      sidebars,
    };
  }

  async function loadVersion(versionMetadata: VersionMetadata) {
    try {
      return await doLoadVersion(versionMetadata);
    } catch (err) {
      logger.error`Loading of version failed for version name=${versionMetadata.versionName}`;
      throw err;
    }
  }

  return {
    loadedVersions: await Promise.all(versionsMetadata.map(loadVersion)),
  };
}

export async function apiDocsContentLoaded(
  actions: PluginContentLoadedActions,
  options: PluginOptions,
  loadedVersions: LoadedVersion[],
  pluginId: string,
  pluginDataDirRoot: string,
  baseUrl: string
): Promise<void> {
  const aliasedSource = (source: string) =>
    `~docs/${posixPath(path.relative(pluginDataDirRoot, source))}`;

  const {
    docLayoutComponent,
    docItemComponent,
    docCategoryGeneratedIndexComponent,
    breadcrumbs,
  } = options;
  const { addRoute, createData, setGlobalData } = actions;

  logger.warn(`Typedoc API: # Versions = ${loadedVersions.length}`);
  for (const v of loadedVersions) {
    logger.warn(`Typedoc API: Version ${v.label} = # docs ${v.docs.length}`);
  }

  const versions: FullVersion[] = loadedVersions.map((version) => {
    const sidebarsUtils = createSidebarsUtils(version.sidebars);
    return {
      ...version,
      sidebarsUtils,
      categoryGeneratedIndices: getCategoryGeneratedIndexMetadataList({
        docs: version.docs,
        sidebarsUtils,
      }),
    };
  });

  logger.warn(
    `Typedoc API: Full Versions (${versions.length}) = [${versions
      .map((v) => v.label)
      .join(", ")}]`
  );

  async function createVersionTagsRoutes(version: FullVersion) {
    const versionTags = getVersionTags(version.docs);

    // TODO tags should be a sub route of the version route
    async function createTagsListPage() {
      const tagsProp: PropTagsListPage["tags"] = Object.values(versionTags).map(
        (tagValue) => ({
          label: tagValue.label,
          permalink: tagValue.permalink,
          count: tagValue.docIds.length,
        })
      );

      // Only create /tags page if there are tags.
      if (tagsProp.length > 0) {
        const tagsPropPath = await createData(
          `${docuHash(`tags-list-${version.versionName}-prop`)}.json`,
          JSON.stringify(tagsProp, null, 2)
        );
        addRoute({
          path: version.tagsPath,
          exact: true,
          component: options.docTagsListComponent,
          modules: {
            tags: aliasedSource(tagsPropPath),
          },
        });

        logger.warn(`Added version tag route: ${version.tagsPath}`);
      }
    }

    // TODO tags should be a sub route of the version route
    async function createTagDocListPage(tag: VersionTag) {
      const tagProps = toTagDocListProp({
        allTagsPath: version.tagsPath,
        tag,
        docs: version.docs,
      });
      const tagPropPath = await createData(
        `${docuHash(`tag-${tag.permalink}`)}.json`,
        JSON.stringify(tagProps, null, 2)
      );
      addRoute({
        path: tag.permalink,
        component: options.docTagDocListComponent,
        exact: true,
        modules: {
          tag: aliasedSource(tagPropPath),
        },
      });

      logger.warn(`Added tag route: ${tag.permalink}`);
    }

    await createTagsListPage();
    await Promise.all(Object.values(versionTags).map(createTagDocListPage));
  }

  await Promise.all(
    versions.map((version) =>
      createVersionRoutes({
        version,
        docItemComponent,
        docLayoutComponent,
        docCategoryGeneratedIndexComponent,
        pluginId,
        aliasedSource,
        actions,
      })
    )
  );

  // TODO tags should be a sub route of the version route
  await Promise.all(versions.map(createVersionTagsRoutes));

  setGlobalData({
    path: normalizeUrl([baseUrl, options.routeBasePath]),
    versions: versions.map(toGlobalDataVersion),
    breadcrumbs,
  });
}

export function apiDocsConfigureWebpack(
  _config: Configuration,
  isServer: boolean,
  utils: ConfigureWebpackUtils,
  content: LoadedContent,
  options: PluginOptions,
  versionsMetadata: VersionMetadata[],
  siteConfig: DocusaurusConfig,
  siteDir: string,
  dataDir: string,
  pluginDataDirRoot: string
) {
  const { getJSLoader } = utils;
  const {
    rehypePlugins,
    remarkPlugins,
    beforeDefaultRehypePlugins,
    beforeDefaultRemarkPlugins,
  } = options;

  function getSourceToPermalink(): SourceToPermalink {
    const allDocs = content.loadedVersions.flatMap((v) => v.docs);
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
          loader: path.resolve(__dirname, "./markdown/index.js"),
          options: docsMarkdownOptions,
        },
      ].filter(Boolean),
    };
  }

  return {
    ignoreWarnings: [
      // Suppress warnings about non-existing of versions file.
      (e: Error) =>
        e.message.includes("Can't resolve") &&
        e.message.includes(VERSIONS_JSON_FILE),
    ],
    resolve: {
      alias: {
        "~docs": pluginDataDirRoot,
      },
    },
    module: {
      rules: [createMDXLoaderRule()],
    },
  };
}
