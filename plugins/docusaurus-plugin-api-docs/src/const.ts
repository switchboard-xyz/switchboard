import type {
  DocusaurusPluginTypeDocApiOptions,
  VersionMetadata,
} from "./types";
import { DEFAULT_PLUGIN_ID } from "@docusaurus/utils";

export const CURRENT_VERSION_METADATA: VersionMetadata = {
  versionName: "current",
  versionLabel: "Next",
  versionPath: "/",
  versionBadge: false,
  versionClassName: "",
  versionBanner: null,
  isLast: false,
  routePriority: undefined,
};

export const DEFAULT_OPTIONS: Required<DocusaurusPluginTypeDocApiOptions> = {
  banner: "",
  breadcrumbs: true,
  changelogName: "CHANGELOG.md",
  changelogs: false,
  debug: false,
  disableVersioning: false,
  exclude: [],
  gitRefName: "main",
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

  apiIndexMarkdown: "api/index.mdx",

  sidebar: {
    preItems: [],
    postItems: [],
  },

  protobufJson: "protos.json",
};
