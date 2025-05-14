import protobuf from 'protobufjs/minimal.js';
protobuf.util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
  // oneofs: true,
};

import { oracle_job } from './protos/index.js';
export import OracleJob = oracle_job.OracleJob;
export import IOracleJob = oracle_job.IOracleJob;

export import ITask = OracleJob.ITask;
export import Task = OracleJob.Task;
