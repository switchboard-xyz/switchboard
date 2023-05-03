import { createContext } from "react";
import type { ApiOptions, DeclarationReflectionMap } from "../types";
import type { OclifCommandMap } from "../cli/types";

export const ApiDataContext = createContext<{
  options: ApiOptions;
  reflections: DeclarationReflectionMap;
  commands: OclifCommandMap;
}>({
  options: {
    banner: "",
    breadcrumbs: true,
    gitRefName: "main",
    minimal: false,
    pluginId: "default",
    scopes: [],
  },
  reflections: {},
  commands: {},
});
