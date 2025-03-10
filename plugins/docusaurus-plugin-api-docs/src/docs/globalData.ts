/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Sidebars } from "./sidebars/types";
import { getMainDocId } from "./docs";
import type { FullVersion } from "./types";

import type {
  CategoryGeneratedIndexMetadata,
  DocMetadata,
} from "@docusaurus/plugin-content-docs";
import type {
  GlobalDoc,
  GlobalSidebar,
  GlobalVersion,
} from "@docusaurus/plugin-content-docs/client";
import _ from "lodash";

function toGlobalDataDoc(doc: DocMetadata): GlobalDoc {
  return {
    id: doc.unversionedId,
    path: doc.permalink,
    sidebar: doc.sidebar,
  };
}

function toGlobalDataGeneratedIndex(
  doc: CategoryGeneratedIndexMetadata
): GlobalDoc {
  return {
    id: doc.slug,
    path: doc.permalink,
    sidebar: doc.sidebar,
  };
}

function toGlobalSidebars(
  sidebars: Sidebars,
  version: FullVersion
): { [sidebarId: string]: GlobalSidebar } {
  return _.mapValues(sidebars, (sidebar, sidebarId) => {
    const firstLink = version.sidebarsUtils.getFirstLink(sidebarId);
    if (!firstLink) {
      return {};
    }
    return {
      link: {
        path:
          firstLink.type === "generated-index"
            ? firstLink.permalink
            : version.docs.find(
                (doc) =>
                  doc.id === firstLink.id || doc.unversionedId === firstLink.id
              )!.permalink,
        label: firstLink.label,
      },
    };
  });
}

export function toGlobalDataVersion(version: FullVersion): GlobalVersion {
  return {
    name: version.versionName,
    label: version.label,
    isLast: version.isLast,
    path: version.path,
    mainDocId: getMainDocId(version),
    docs: version.docs
      .map(toGlobalDataDoc)
      .concat(version.categoryGeneratedIndices.map(toGlobalDataGeneratedIndex)),
    draftIds: version.drafts.map((doc) => doc.unversionedId),
    sidebars: toGlobalSidebars(version.sidebars, version),
  };
}
