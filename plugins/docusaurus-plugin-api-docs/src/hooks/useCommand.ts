import { useContext } from "react";
import type { ParsedCommand } from "../modules/oclif/types";
import { ApiDataContext } from "../components/ApiDataContext";

export function useCommand<T = ParsedCommand>(id?: string): T | null {
  const { commands } = useContext(ApiDataContext);

  // 0 is a valid ID
  if (id === undefined) {
    return null;
  }

  if (commands[id]) {
    return commands[id] as unknown as T;
  }

  throw new Error(`Unable to find command with ID ${id}`);
}
