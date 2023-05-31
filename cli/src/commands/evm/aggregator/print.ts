import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";
import { chalkString, stripTrailingZeros } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { OracleJob } from "@switchboard-xyz/common";
import { fetchJobsFromIPFS, Job, Permissions } from "@switchboard-xyz/evm.js";
import chalk from "chalk";

export default class AggregatorPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aggregator";

  static flags = {
    ...BaseCommand.flags,
    jobs: Flags.boolean({
      description: "print the job definitions for the aggregator",
    }),
    results: Flags.boolean({
      description: "print the current results for the aggregator",
    }),
  };

  static args = {
    aggregatorAddress: Args.string({
      description: "address of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorPrint);

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorAddress
    );

    let permissions: string | undefined;
    try {
      permissions = await Permissions.getSwitchboardPermissions(
        this.program,
        aggregator.queueAddress,
        aggregatorAccount.address
      );
    } catch {}

    let jobs: { name: string; weight?: number; job: OracleJob }[] | undefined;
    try {
      if (aggregator.jobsHash && aggregator.jobsHash.length > 0) {
        const parsedJobs: { name: string; weight?: number; job: OracleJob }[] =
          [];
        const jobDefinitions = await fetchJobsFromIPFS(aggregator.jobsHash);
        for (const jobDef of jobDefinitions) {
          let name = "";
          if ("name" in jobDef && typeof jobDef.name === "string") {
            name = jobDef.name;
          }

          let weight = 1;
          if ("weight" in jobDef && typeof jobDef.weight === "number") {
            weight = jobDef.weight;
          }

          if ("data" in jobDef && typeof jobDef.data === "string") {
            const oracleJob = OracleJob.decodeDelimited(
              Buffer.from(jobDef.data, "base64")
            );
            parsedJobs.push({ name, weight, job: oracleJob });
          }
        }

        if (parsedJobs.length === jobDefinitions.length) {
          jobs = parsedJobs;
        } else {
          this.logError(
            `Only found ${parsedJobs.length} definitions, expected ${jobDefinitions.length}`
          );
        }
        // TODO log error
      }
    } catch {}

    const aggregatorData = {
      ...aggregator,
      permissions,
      jobs,
    };

    if (flags.json) {
      return this.normalizeAccountData(
        aggregatorAccount.address,
        aggregatorData
      );
    }

    this.prettyPrintAggregator(aggregatorData, aggregatorAccount.address);

    if (flags.results) {
      const results = await aggregatorAccount.fetchAllResults();
      this.log(
        chalk.underline(
          chalkString("\n## Results", Array.from({ length: 44 }).join(" "))
        )
      );
      if (results && results.length > 0) {
        for (const result of results) {
          this.logger.info(
            chalkString(
              result.timestamp.toString(),
              stripTrailingZeros(result.result.toString())
            )
          );
        }
      } else {
        this.log("No results found");
      }
    }

    if (flags.jobs && jobs && (jobs?.length ?? 0) > 0) {
      this.log(
        chalk.underline(
          chalkString("\n## Jobs", Array.from({ length: 44 }).join(" "))
        )
      );

      for (const [n, job] of jobs.entries()) {
        this.logger.info(
          chalkString(
            `${job.name}, weight = ${job.weight ?? 1}`,
            "\n" + JSON.stringify(job.job.toJSON(), undefined, 2)
          )
        );
      }
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to print aggregator");
  }
}
