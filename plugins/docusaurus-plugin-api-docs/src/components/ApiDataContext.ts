import type { ProtoMessageMap } from "../modules/protobufs";
import type { ApiOptions, DeclarationReflectionMap } from "../types";

import { createContext } from "react";

export const ApiDataContext = createContext<{
  options: ApiOptions;
  reflections: DeclarationReflectionMap;
  protobufs: ProtoMessageMap;
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
  protobufs: {},
});
