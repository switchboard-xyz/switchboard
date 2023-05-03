import type {
  PluginContentLoadedActions,
  RouteConfig,
} from "@docusaurus/types";
import type {
  ApiOptions,
  DocusaurusPluginTypeDocApiOptions,
  LoadedVersion,
} from "./types";
import { CURRENT_VERSION_NAME } from "./docs/constants";
import type {
  PropVersionDocs,
  PropVersionMetadata,
} from "@docusaurus/plugin-content-docs";
import { formatPackagesWithoutHostInfo } from "./plugin/data";
import type { JSONOutput } from "typedoc";
import path from "path";
import { normalizeUrl } from "@docusaurus/utils";

export async function typedocsContentLoaded(
  actions: PluginContentLoadedActions,
  options: DocusaurusPluginTypeDocApiOptions,
  loadedVersions: LoadedVersion[],
  pluginId: string
): Promise<void> {
  const {
    banner,
    breadcrumbs,
    readmes,
    removeScopes,
    minimal,
    gitRefName,
    changelogs,
  } = options;

  const docs: PropVersionDocs = {};

  // Create an index of versions for quick lookups.
  // This is hacky, but it works, so shrug.
  loadedVersions.forEach((loadedVersion) => {
    if (loadedVersion.versionName !== CURRENT_VERSION_NAME) {
      docs[loadedVersion.versionName] = {
        id: loadedVersion.versionPath,
        title: loadedVersion.versionLabel,
        description: loadedVersion.versionLabel,
      };
    }
  });

  await Promise.all(
    // 1. Define version metadata
    // 2. Save packages
    // 3. Save plugin options
    // 4. Loop through packages & entrypoints and create subroutes
    loadedVersions.map(async (loadedVersion) => {
      const version = loadedVersion.versionName;

      // Define version metadata for all pages. We need to use the same structure as
      // "docs" so that we can utilize the same React components.
      // https://github.com/facebook/docusaurus/blob/master/packages/docusaurus-plugin-content-docs/src/index.ts#L337
      const versionMetadata = await actions.createData(
        `version-${version}.json`,
        JSON.stringify({
          badge: loadedVersion.versionBadge,
          banner: loadedVersion.versionBanner,
          className: loadedVersion.versionClassName,
          docs,
          docsSidebars: { api: loadedVersion.sidebars },
          isLast: loadedVersion.isLast,
          label: loadedVersion.versionLabel,
          noIndex: false,
          pluginId,
          version: loadedVersion.versionName,
        } as PropVersionMetadata)
      );

      const packagesData = await actions.createData(
        `packages-${version}.json`,
        JSON.stringify(formatPackagesWithoutHostInfo(loadedVersion.packages))
      );

      const optionsContextData: ApiOptions = {
        banner: banner ?? "",
        breadcrumbs: breadcrumbs ?? true,
        gitRefName: gitRefName ?? "main",
        minimal: minimal ?? false,
        pluginId,
        scopes: removeScopes ?? [],
      };
      const optionsData = await actions.createData(
        "options.json",
        JSON.stringify(optionsContextData)
      );

      function createRoute(
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

      const routes: RouteConfig[] = [];

      loadedVersion.packages.forEach((pkg) => {
        pkg.entryPoints.forEach((entry) => {
          const children =
            entry.reflection.children?.filter(
              (child) => !child.permalink?.includes("#")
            ) ?? [];

          // Map a route for every declaration in the package (the exported APIs)
          const subRoutes = children.map((child) => createRoute(child));

          // Map a top-level package route, otherwise `DocPage` shows a page not found
          subRoutes.push(
            createRoute(
              entry.reflection,
              entry.index && readmes && pkg.readmePath
                ? { readme: pkg.readmePath }
                : undefined
            )
          );

          if (entry.index && changelogs && pkg.changelogPath) {
            subRoutes.push({
              path: normalizeUrl([entry.reflection.permalink, "changelog"]),
              exact: true,
              component: path.join(__dirname, "./components/ApiChangelog.js"),
              modules: { changelog: pkg.changelogPath },
              sidebar: "api",
            });
          }

          routes.push(...subRoutes);
        });
      });

      const indexPermalink = normalizeUrl([loadedVersion.versionPath]);

      if (loadedVersion.packages.length > 1) {
        // Only write out the ApiIndex only when we have multiple packages
        // otherwise we will have 2 top-level entries in the route entries
        routes.push({
          path: indexPermalink,
          exact: true,
          component: path.join(__dirname, "./components/ApiIndex.js"),
          modules: {
            options: optionsData,
            packages: packagesData,
            versionMetadata,
          },
          sidebar: "api",
        });
      }

      actions.addRoute({
        path: indexPermalink,
        exact: false,
        component: path.join(__dirname, "./components/ApiPage.js"),
        routes,
        modules: {
          options: optionsData,
          packages: packagesData,
          versionMetadata,
        },
        priority: loadedVersion.routePriority,
      });
    })
  );
}
