/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { DocsMarkdownOption } from "../types";

import { linkify } from "./linkify";

import type { LoaderContext } from "webpack";

export default function markdownLoader(
  this: LoaderContext<DocsMarkdownOption>,
  source: string
): void {
  const fileString = source;
  const callback = this.async();
  const options = this.getOptions();
  return callback(null, linkify(fileString, this.resourcePath, options));
}
