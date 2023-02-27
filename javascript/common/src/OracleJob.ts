import * as proto from "./protos";
import YAML from "yaml";
import protobuf from "protobufjs/minimal.js";
import Big from "big.js";
import validation from "./validation";

protobuf.util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
};

export * from "./protos/index.js";

export class OracleJob extends proto.OracleJob {
  public static create(properties?: proto.IOracleJob | undefined): OracleJob {
    return new OracleJob(properties);
  }
  public static fromObject(object: { [k: string]: any }): OracleJob {
    return this.create(super.fromObject(object));
  }
  public static decodeDelimited(r: protobuf.Reader | Uint8Array): OracleJob {
    return this.create(super.decodeDelimited(r));
  }
  /**
   *  Creates an {@linkcode OracleJob} message from a YAML string.
   */
  public static fromYaml(src: string): OracleJob {
    return this.fromObject(YAML.parse(src));
  }
  /**
   *  Converts this {@linkcode OracleJob} to YAML.
   */
  public toYaml() {
    return YAML.stringify(this.toJSON());
  }
  /**
   *  Validate this {@linkcode OracleJob} structure.
   */
  public validate() {
    return validation(this);
  }
}

/**
 * Serialize a stringified OracleJob and replace any json comments
 * @param [job] Stringified OracleJob or object with an array of Switchboard tasks defined
 * @throws {String}
 * @returns {OracleJob}
 */
export function serializeOracleJob(
  job: string | proto.IOracleJob | Record<string, any>
): OracleJob {
  if (!job) {
    throw new Error("");
  }

  let jobObj: proto.IOracleJob;
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
      throw new Error(`OracleJob has no tasks defined`);
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

/**
 * Deserialize an OracleJob from on-chain data
 * @param [jobData] Serialized OracleJob data
 * @returns {OracleJob}
 */
export function deserializeOracleJob(jobData: Buffer | Uint8Array): OracleJob {
  return OracleJob.decodeDelimited(jobData);
}

export type TaskSimulatorNetwork = "devnet" | "mainnet-beta";

export type TaskRunnerResponse1 = TaskRunnerError | TaskRunnerResponse;

export type TaskRunnerMeta = {
  taskRunnerVersion: string;
};

export type TaskRunnerError = TaskRunnerMeta & {
  error: string;
};

export type TaskRunnerResponse = TaskRunnerMeta & {
  results: Array<Big>;
  result: Big;
};

export async function simulateOracleJobs(
  jobs: Array<OracleJob>,
  network: TaskSimulatorNetwork = "devnet"
): Promise<TaskRunnerResponse> {
  const response = await fetch("https://task.switchboard.xyz/simulate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jobs: jobs.map((j) => j.toJSON()),
      cluster: network,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to simulate job definition, Status=${response.status}`
    );
  }
  const payload: {
    results: Array<string>;
    result: string;
    task_runner_version: string;
  } = await response.json();

  return {
    results: payload.results.map((r) => new Big(r)),
    result: new Big(payload.result),
    taskRunnerVersion: payload.task_runner_version,
  };
}
