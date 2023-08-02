import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";
import { chalkString } from "../../../utils";

import { Flags } from "@oclif/core";

export default class CreateJob extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create the hash for a set of jobs";

  static aliases = ["evm:create:jobs"];

  static examples = [
    "$ sb evm job create --arbitrum --testnet --job my_job.json",
    "$ sb evm job create --arbitrum --testnet --hash bafkreihvxeb7rwyrilzmouid2onuwajkkng4ykdwrr6vaxjgg3zv3cghdy --removeJob my_job.json",
  ];

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

    const addJobs = (flags.job ?? [])
      .map((jobDefPath) => this.loadJobDefinitionWithMeta(jobDefPath))
      .map((iJob) => this.convertJob(iJob));

    const removeJobs = (flags.removeJob ?? [])
      .map((jobDefPath) => this.loadJobDefinitionWithMeta(jobDefPath))
      .map((iJob) => this.convertJob(iJob));

    const [jobsHash, finalJobs] = await this.getUpdatedJobsHash(
      flags.hash,
      addJobs,
      removeJobs
    );

    if (flags.json) {
      return {
        cid: jobsHash,
        jobs: finalJobs,
      };
    }

    this.success(
      `Created IPFS job hash for ${finalJobs.length} jobs: `,
      jobsHash
    );

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
