import { useContext } from "react";
import type { OclifCommandMap } from "../modules/oclif/types";
import { ApiDataContext } from "../components/ApiDataContext";

export function useCommandMap(): OclifCommandMap {
  return useContext(ApiDataContext).commands;
}
