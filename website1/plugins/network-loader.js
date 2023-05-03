import fs from "fs";
import path from "path";
import logger from "@docusaurus/logger";
import { normalizeUrl } from "@docusaurus/utils";
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
import _ from "lodash";
import {
  TypedocGenerator,
  type GeneratorContext,
  OclifGenerator,
} from "./generator";

export default function networkLoaderPlugin(context, pluginOptions) {
  //   const { changelogs, id: pluginId, projectRoot, readmes } = options;
  //   const isDefaultPluginId = pluginId === DEFAULT_PLUGIN_ID;

  const jsonFile = path.join(context.siteDir, "networks.json");

  return {
    name: "docusaurus-plugin-network-loader",

    getPathsToWatch() {
      const pluginFile = __filename;
      return [jsonFile, pluginFile];
    },

    async loadContent() {
      const networks = JSON.parse(fs.readFileSync(jsonFile, "utf-8"));
      return networks;
    },

    async contentLoaded({ content, actions }) {
      if (!content) {
        return;
      }
      const networksData = actions.createData(
        "networks",
        JSON.stringify(content)
      );
    },
  };
}
