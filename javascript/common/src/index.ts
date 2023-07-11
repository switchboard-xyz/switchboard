export * as BigUtils from "./big.js";
export { default as networks } from "./networks/index.js";
export * from "./networks/types.js";
export * from "./OracleJob.js";
export * from "./protos/index.js";
export * from "./SwitchboardDecimal.js";
export * from "./utils/index.js";
export { Big } from "big.js";
export { default as BN } from "bn.js";
export { default as bs58 } from "bs58";

import { OracleJob } from "./protos/index.js";
export import ITask = OracleJob.ITask;
export import Task = OracleJob.Task;

import protobuf from "protobufjs/minimal.js";
protobuf.util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
};
