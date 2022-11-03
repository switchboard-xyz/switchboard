/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
import { IOracleJob, OracleJob } from "./protos/index.js";

import protobuf from "protobufjs/minimal.js";

protobuf.util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
};

export * from "./protos/index.js";

/**
 * Serialize a stringified OracleJob and replace any json comments
 * @param [job] Stringified OracleJob or object with an array of Switchboard tasks defined
 * @throws {String}
 * @returns {OracleJob}
 */
export function serializeOracleJob(
  job: string | IOracleJob | Record<string, any>
): OracleJob {
  if (!job) {
    throw new Error("");
  }

  let jobObj: IOracleJob;
  if (typeof job === "string") {
    const parsedFileString = job
      // replace all json comments https://regex101.com/r/B8WkuX/1
      .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, "");
    jobObj = OracleJob.fromObject(JSON.parse(parsedFileString));
  } else {
    if (!("tasks" in job) || !Array.isArray(job.tasks)) {
      throw new Error(`OracleJob is missing the 'tasks' property`);
    }
    if (job.tasks.length === 0) {
      throw new Error(`OracleJob hos no tasks defined`);
    }
    jobObj = job;
  }

  try {
    const err = OracleJob.verify(jobObj);
    if (err !== null) {
      throw new Error(err);
    }
    return OracleJob.create(jobObj);
  } catch (error) {
    throw new Error(`failed to serialize oracle job: ${error}`);
  }
}
