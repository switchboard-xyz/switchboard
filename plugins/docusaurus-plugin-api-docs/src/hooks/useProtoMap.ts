import { useContext } from "react";
import { ApiDataContext } from "../components/ApiDataContext";
import type { ProtoMessageMap } from "../modules/protobufs";

export function useProtoMap(): ProtoMessageMap {
  return useContext(ApiDataContext).protobufs;
}
