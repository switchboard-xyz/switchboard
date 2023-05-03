import { useContext } from "react";
import type { OclifCommandMap } from "../cli/types";
import { ApiDataContext } from "../components/ApiDataContext";

export function useCommandMap(): OclifCommandMap {
  return useContext(ApiDataContext).commands;
}
