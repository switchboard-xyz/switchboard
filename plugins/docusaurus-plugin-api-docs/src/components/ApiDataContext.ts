import { createContext } from "react";
import type { ApiOptions, DeclarationReflectionMap } from "../types";
import type { OclifCommandMap } from "../modules/oclif/types";
import type { ProtoMessageMap } from "../modules/protobufs";

export const ApiDataContext = createContext<{
  options: ApiOptions;
  reflections: DeclarationReflectionMap;
  commands: OclifCommandMap;
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
  commands: {},
  protobufs: {},
});
