import { Command, Flags } from "@oclif/core";
import { OracleJob } from "@switchboard-xyz/common";
import fetch from "node-fetch";
import { CliBaseCommand as BaseCommand } from "../../BaseCommand";

export default class JobTest extends BaseCommand {
  static enableJsonFlag = true;

  static description =
    "test a job definition against the Switchboard task-runner";

  static examples = ["$ sbv2 job:test"];

  static flags = {
    ...BaseCommand.flags,
    devnet: Flags.boolean({
      char: "d",
      description: "test against a devnet task-runner",
    }),
    job: Flags.string({
      description: "filesystem path to job definition file",
      multiple: true,
    }),
    // jobKey: Flags.string({
    //   description: "on-chain job account to simulate",
    // }),
    // aggregatorKey: Flags.string({
    //   description: "on-chain aggregator account to simulate",
    // }),
  };

  async run() {
    const { args, flags } = await this.parse(JobTest);

    const jobs: Array<OracleJob> = [];
    if (flags.job && Array.isArray(flags.job ?? [])) {
      for (const jobDefinition of flags.job ?? []) {
        const oracleJobs = this.loadJobDefinitions(jobDefinition);
        jobs.push(...oracleJobs);
      }
    }

    if (jobs.length === 0) {
      throw new Error(`Failed to find any jobs to simulate`);
    }

    const response = await fetch("https://task.switchboard.xyz/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jobs: jobs.map((j) => j.toJSON()),
        cluster: flags.devnet ? "devnet" : "mainnet-beta",
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to simulate job definition, ${response.status}`);
    }

    const payload = await response.json();

    if (flags.json) {
      return payload;
    }

    // this.logger.info(JSON.stringify(payload, undefined, 2));
    this.logger.info(JSON.stringify(payload, undefined, 2));
  }

  async catch(error) {
    super.catch(error, "Failed to test job definitions");
  }
}
