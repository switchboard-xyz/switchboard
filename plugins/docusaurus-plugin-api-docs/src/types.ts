import type {
  PluginOptions as DocsPluginOptions,
  LoadedContent as DocsLoadedContent,
} from "@docusaurus/plugin-content-docs";
import type { DocusaurusPluginTypeDocApiOptions } from "./modules/typedocs/types";
import type { LoadedContent as TypedocLoadedContent } from "./modules/typedocs/types";

export type PluginOptions = DocsPluginOptions & {
  typedocs: DocusaurusPluginTypeDocApiOptions;
} & {
  defaultSidebar?: string | "api";
};

export type LoadedContent = {
  docs: DocsLoadedContent;
  typedocs?: TypedocLoadedContent;
};
