/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { DocFrontMatter } from "@docusaurus/plugin-content-docs";
import {
  FrontMatterTagsSchema,
  FrontMatterTOCHeadingLevels,
  JoiFrontMatter as Joi, // Custom instance for front matter
  URISchema,
  validateFrontMatter,
} from "@docusaurus/utils-validation";

const FrontMatterLastUpdateErrorMessage =
  "{{#label}} does not look like a valid front matter FileChange object. Please use a FileChange object (with an author and/or date).";

// NOTE: we don't add any default value on purpose here
// We don't want default values to magically appear in doc metadata and props
// While the user did not provide those values explicitly
// We use default values in code instead
const DocFrontMatterSchema = Joi.object<DocFrontMatter>({
  id: Joi.string(),
  // See https://github.com/facebook/docusaurus/issues/4591#issuecomment-822372398
  title: Joi.string().allow(""),
  hide_title: Joi.boolean(),
  hide_table_of_contents: Joi.boolean(),
  keywords: Joi.array().items(Joi.string().required()),
  image: URISchema,
  // See https://github.com/facebook/docusaurus/issues/4591#issuecomment-822372398
  description: Joi.string().allow(""),
  slug: Joi.string(),
  sidebar_label: Joi.string(),
  sidebar_position: Joi.number(),
  sidebar_class_name: Joi.string(),
  sidebar_custom_props: Joi.object().unknown(),
  displayed_sidebar: Joi.string().allow(null),
  tags: FrontMatterTagsSchema,
  pagination_label: Joi.string(),
  custom_edit_url: URISchema.allow("", null),
  parse_number_prefixes: Joi.boolean(),
  pagination_next: Joi.string().allow(null),
  pagination_prev: Joi.string().allow(null),
  draft: Joi.boolean(),
  ...FrontMatterTOCHeadingLevels,
  last_update: Joi.object({
    author: Joi.string(),
    date: Joi.date().raw(),
  })
    .or("author", "date")
    .messages({
      "object.missing": FrontMatterLastUpdateErrorMessage,
      "object.base": FrontMatterLastUpdateErrorMessage,
    }),
}).unknown();

export function validateDocFrontMatter(frontMatter: {
  [key: string]: unknown;
}): DocFrontMatter {
  return validateFrontMatter(frontMatter, DocFrontMatterSchema);
}
