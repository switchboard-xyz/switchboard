import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args, Flags } from "@oclif/core";
import { Big } from "@switchboard-xyz/common";
import {
  AggregatorAccount,
  EnablePermissions,
  fetchJobsFromIPFS,
  Job,
  Permissions,
  toBigNumber,
} from "@switchboard-xyz/evm.js";

export default class SetAggregator extends BaseCommand {
  static enableJsonFlag = true;

  static description = "set an aggregators config";

  static aliases = ["evm:set:aggregator"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate account that will be the authority for the aggregator",
    }),
    name: Flags.string({
      description: "name of the aggregator for easier identification",
    }),
    forceReportPeriod: Flags.integer({
      description:
        "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
    }),
    batchSize: Flags.integer({
      description: "number of oracles requested for each open round call",
      default: 1,
    }),
    minJobs: Flags.integer({
      description: "number of jobs that must respond before an oracle responds",
      default: 1,
    }),
    minOracles: Flags.integer({
      description:
        "number of oracles that must respond before a value is accepted on-chain",
      default: 1,
    }),
    updateInterval: Flags.integer({
      description: "set an aggregator's minimum update delay",
      required: true,
    }),
    varianceThreshold: Flags.string({
      description:
        "percentage change between a previous accepted result and the next round before an oracle reports a value on-chain. Used to conserve lease cost during low volatility",
      default: "0",
    }),
    job: Flags.string({
      char: "j",
      description: "filesystem path to job definition file",
      multiple: true,
    }),
    removeJob: Flags.string({
      description: "job definitions to remove from the hash",
      multiple: true,
    }),
    enableHistory: Flags.boolean({
      description: "enable history for the feed",
    }),
  };

  static args = {
    aggregatorAddress: Args.string({
      description: "address of the aggregator",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(SetAggregator);

    const [aggregatorAccount, initialAggregatorState] =
      await this.loadAggregator(args.aggregatorAddress);

    const authority = await this.getAuthority(
      flags.authority,
      initialAggregatorState.authority
    );

    const addJobs = (flags.job ?? [])
      .map((jobDefPath) => this.loadJobDefinitionWithMeta(jobDefPath))
      .map((iJob) => this.convertJob(iJob));

    const removeJobs = (flags.removeJob ?? [])
      .map((jobDefPath) => this.loadJobDefinitionWithMeta(jobDefPath))
      .map((iJob) => this.convertJob(iJob));

    const jobsHash =
      addJobs.length > 0 || removeJobs.length > 0
        ? (
            await this.getUpdatedJobsHash(
              initialAggregatorState.jobsHash,
              addJobs,
              removeJobs
            )
          )[0]
        : initialAggregatorState.jobsHash;

    const tx = await aggregatorAccount.setConfig(
      {
        name: flags.name,
        batchSize: flags.batchSize,
        minUpdateDelaySeconds: flags.updateInterval,
        minOracleResults: flags.minOracles,
        minJobResults: flags.minJobs,
        jobsHash: jobsHash,
        varianceThreshold: flags.varianceThreshold
          ? Number.parseFloat(flags.varianceThreshold)
          : 0,
        forceReportPeriod: flags.forceReportPeriod,
        enableHistory: flags.enableHistory,
      },
      {
        signer: authority,
      }
    );

    const aggregator = await aggregatorAccount.loadData();

    let permissions: string | undefined;
    try {
      permissions = await Permissions.getSwitchboardPermissions(
        this.program,
        aggregator.queueAddress,
        aggregatorAccount.address
      );
    } catch {}

    let jobs: Job[] | undefined;
    try {
      jobs = await fetchJobsFromIPFS(jobsHash);
    } catch {}

    const aggregatorData = {
      ...aggregator,
      permissions,
      jobs: jobs ? this.jobsToJson(jobs) : undefined,
    };

    if (flags.json) {
      return this.normalizeAccountData(
        aggregatorAccount.address,
        aggregatorData
      );
    }

    this.prettyPrintAggregator(aggregatorData, aggregatorAccount.address);

    this.logger.info("\n");
    this.logger.info(this.toUrl(tx.hash));
  }

  async catch(error: any) {
    super.catch(error, "Failed to set the aggregators config");
  }
}
