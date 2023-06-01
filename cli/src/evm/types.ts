import { OracleJob } from "@switchboard-xyz/common";
import { Job } from "@switchboard-xyz/evm.js";

export type BaseDefinition = {
  path: string;
};

export type RawJobDefinition = BaseDefinition & {
  name?: string;
  weight?: number;
  data?: string;
  tasks?: OracleJob.ITask[];
};

export type JobDefinition = BaseDefinition & {
  name: string;
  weight: number;
  job: OracleJob;
};

export type BaseJob = BaseDefinition & Job;
