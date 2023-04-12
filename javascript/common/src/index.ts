export * as BigUtils from './big.js';
export * from './OracleJob.js';
export * from './protos/index.js';
export * from './SwitchboardDecimal.js';
export * from './utils/index.js';
export { Big } from 'big.js';
export { default as BN } from 'bn.js';

import protobuf from 'protobufjs/minimal.js';
protobuf.util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
};
