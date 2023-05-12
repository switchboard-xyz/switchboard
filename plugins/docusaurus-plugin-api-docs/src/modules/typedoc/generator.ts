import {
  Generator,
  type GeneratorContext,
  type GeneratorType,
  type LoadedVersion,
  type PackageReflectionGroup,
  type ResolvedPackageConfig,
  type VersionMetadata,
} from "../../types";
import path from "path";
import { normalizeUrl } from "@docusaurus/utils";
import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";
import type { RouteConfig } from "@docusaurus/types";
import { CURRENT_VERSION_NAME } from "../../docs/constants";
import { flattenAndGroupPackages, generateJson } from "../../plugin/data";
import { getComponentPath, importFile } from "../../utils";
import { extractSidebar } from "../../plugin/sidebar";
import type { JSONOutput } from "typedoc";

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
      component: getComponentPath("ApiItem"),
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
                    component: getComponentPath("ApiChangelog"),
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
}
