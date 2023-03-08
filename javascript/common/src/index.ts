export * from './OracleJob';
export * from './protos/index.js';
export * from './SwitchboardDecimal';
export * from './utils';
export { default as Big } from 'big.js';
export { default as BN } from 'bn.js';

import protobuf from 'protobufjs/minimal.js';
protobuf.util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
};
