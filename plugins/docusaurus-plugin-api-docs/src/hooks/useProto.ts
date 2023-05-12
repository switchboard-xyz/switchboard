import { useContext } from "react";
import { ApiDataContext } from "../components/ApiDataContext";
import type { ParsedProtobufMessage } from "../modules/protobufs";

export function useProto<T = ParsedProtobufMessage>(id?: string): T | null {
  const { protobufs } = useContext(ApiDataContext);

  // 0 is a valid ID
  if (id === undefined) {
    return null;
  }

  if (protobufs[id]) {
    return protobufs[id] as unknown as T;
  }

  throw new Error(
    `Unable to find proto with ID ${id}\n${JSON.stringify(
      protobufs,
      undefined,
      2
    )}`
  );
}
