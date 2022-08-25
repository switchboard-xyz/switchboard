/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
export * from "./SwitchboardDecimal.js";
export * from "./protos/index.js";

import protobuf from "protobufjs/minimal.js";

protobuf.util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
};
