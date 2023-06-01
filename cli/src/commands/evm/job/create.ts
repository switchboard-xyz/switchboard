import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";
import { chalkString } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { Big } from "@switchboard-xyz/common";
import { OracleJob } from "@switchboard-xyz/common";
import {
  EnablePermissions,
  fetchJobsFromIPFS,
  Job,
  Permissions,
  publishJobsToIPFS,
  toBigNumber,
} from "@switchboard-xyz/evm.js";

export default class CreateJob extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create the hash for a set of jobs";

  static aliases = ["evm:create:jobs"];

  static flags = {
    ...BaseCommand.flags,
    hash: Flags.string({ description: "existing ipfs hash to modify" }),
    job: Flags.string({
      char: "j",
      description: "filesystem path to job definition file",
      multiple: true,
    }),
    removeJob: Flags.string({
      description: "job definitions to remove from the hash",
      multiple: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(CreateJob);

    let jobs: Job[] = [];
    if (flags.hash) {
      const existingJobs = await fetchJobsFromIPFS(flags.hash);
      jobs.push(...existingJobs);
    }

    const removeJobs = (flags.removeJob ?? [])
      .map((jobDefPath) => this.loadJobDefinitionWithMeta(jobDefPath))
      .map((iJob) => this.convertJob(iJob));

    for (const rmJob of removeJobs) {
      const idx = jobs.findIndex((j) => j.data === rmJob.data);
      if (idx === -1) {
        // TODO: Store file path for easier identification
        throw new Error(`Failed to remove job from job list`);
      }

      jobs = [...jobs.slice(0, idx), ...jobs.slice(idx + 1)];
    }

    const addJobs = (flags.job ?? [])
      .map((jobDefPath) => this.loadJobDefinitionWithMeta(jobDefPath))
      .map((iJob) => this.convertJob(iJob));

    jobs.push(...addJobs);

    if (jobs.length === 0) {
      throw new Error(`No jobs to publish to IPFS`);
    }

    const jobsHash = await publishJobsToIPFS(
      jobs,
      "https://api.switchboard.xyz/api/ipfs"
    );

    const finalJobs = jobs.map((job) => {
      const oracleJob = OracleJob.decodeDelimited(
        new Uint8Array(Buffer.from(job.data, "base64"))
      );
      return {
        ...job,
        ...oracleJob,
      };
    });

    if (flags.json) {
      return {
        cid: jobsHash,
        jobs: finalJobs,
      };
    }

    this.success(`Created IPFS job hash for ${jobs.length} jobs: `, jobsHash);

    for (const [n, job] of finalJobs.entries()) {
      this.logger.info(
        chalkString(
          `${job.name}, weight = ${job.weight ?? 1}`,
          "\n" + JSON.stringify({ tasks: job.tasks }, undefined, 2)
        )
      );
    }
  }

  async catch(error: any) {
    super.catch(error, "Failed to create job hash");
  }
}
