import { useContext } from "react";
import { ApiDataContext } from "../components/ApiDataContext";
import type { DeclarationReflectionMap } from "../modules/typedocs/types";

export function useReflectionMap(): DeclarationReflectionMap {
  return useContext(ApiDataContext).reflections;
}
