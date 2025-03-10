/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isCategoryIndex } from "../utils";

import { DefaultSidebarItemsGenerator } from "./generator";
import type {
  CategoryMetadataFile,
  NormalizedSidebar,
  NormalizedSidebarItem,
  NormalizedSidebars,
  ProcessedSidebar,
  ProcessedSidebarItem,
  ProcessedSidebars,
  SidebarItemAutogenerated,
  SidebarItemsGeneratorDoc,
  SidebarItemsGeneratorVersion,
  SidebarProcessorParams,
} from "./types";
import { validateSidebars } from "./validation";

import type {
  DocMetadataBase,
  VersionMetadata,
} from "@docusaurus/plugin-content-docs";
import combinePromises from "combine-promises";
import _ from "lodash";

function toSidebarItemsGeneratorDoc(
  doc: DocMetadataBase
): SidebarItemsGeneratorDoc {
  return _.pick(doc, [
    "id",
    "unversionedId",
    "title",
    "frontMatter",
    "source",
    "sourceDirName",
    "sidebarPosition",
  ]);
}

function toSidebarItemsGeneratorVersion(
  version: VersionMetadata
): SidebarItemsGeneratorVersion {
  return _.pick(version, ["versionName", "contentPath"]);
}

// Handle the generation of autogenerated sidebar items and other
// post-processing checks
async function processSidebar(
  unprocessedSidebar: NormalizedSidebar,
  categoriesMetadata: { [filePath: string]: CategoryMetadataFile },
  params: SidebarProcessorParams
): Promise<ProcessedSidebar> {
  const { sidebarItemsGenerator, numberPrefixParser, docs, version } = params;

  // Just a minor lazy transformation optimization
  const getSidebarItemsGeneratorDocsAndVersion = _.memoize(() => ({
    docs: docs.map(toSidebarItemsGeneratorDoc),
    version: toSidebarItemsGeneratorVersion(version),
  }));

  async function processAutoGeneratedItem(
    item: SidebarItemAutogenerated
  ): Promise<ProcessedSidebarItem[]> {
    const generatedItems = await sidebarItemsGenerator({
      item,
      numberPrefixParser,
      defaultSidebarItemsGenerator: DefaultSidebarItemsGenerator,
      isCategoryIndex,
      ...getSidebarItemsGeneratorDocsAndVersion(),
      categoriesMetadata,
    });
    // Process again... weird but sidebar item generated might generate some
    // auto-generated items?
    // TODO repeatedly process & unwrap autogenerated items until there are no
    // more autogenerated items, or when loop count (e.g. 10) is reached
    return processItems(generatedItems);
  }

  async function processItem(
    item: NormalizedSidebarItem
  ): Promise<ProcessedSidebarItem[]> {
    if (item.type === "category") {
      return [
        {
          ...item,
          items: (await Promise.all(item.items.map(processItem))).flat(),
        },
      ];
    }
    if (item.type === "autogenerated") {
      return processAutoGeneratedItem(item);
    }
    return [item];
  }

  async function processItems(
    items: NormalizedSidebarItem[]
  ): Promise<ProcessedSidebarItem[]> {
    return (await Promise.all(items.map(processItem))).flat();
  }

  const processedSidebar = await processItems(unprocessedSidebar);
  return processedSidebar;
}

export async function processSidebars(
  unprocessedSidebars: NormalizedSidebars,
  categoriesMetadata: { [filePath: string]: CategoryMetadataFile },
  params: SidebarProcessorParams
): Promise<ProcessedSidebars> {
  const processedSidebars = await combinePromises(
    _.mapValues(unprocessedSidebars, (unprocessedSidebar) =>
      processSidebar(unprocessedSidebar, categoriesMetadata, params)
    )
  );
  validateSidebars(processedSidebars);
  return processedSidebars;
}
