export * from "./SwitchboardDecimal";
export * from "./OracleJob";
export * from "./utils";
export * from "./protos/index.js";
export { default as Big } from "big.js";
export { default as BN } from "bn.js";

import protobuf from "protobufjs/minimal.js";
protobuf.util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
};
