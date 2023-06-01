import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args, Flags } from "@oclif/core";
import { Big } from "@switchboard-xyz/common";
import { OracleJob } from "@switchboard-xyz/common";
import {
  EnablePermissions,
  Job,
  Permissions,
  publishJobsToIPFS,
  toBigNumber,
} from "@switchboard-xyz/evm.js";

export default class CreateAggregator extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an aggregator for a given queue";

  static aliases = ["evm:create:aggregator"];

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
    metadata: Flags.string({
      description: "metadata of the aggregator for easier identification",
    }),
    forceReportPeriod: Flags.integer({
      description:
        "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
      default: 0,
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
    enableHistory: Flags.boolean({
      description: "enable history for the feed",
    }),
    enable: Flags.boolean({
      description: "enable the oracles heartbeat permissions",
    }),
    queueAuthority: Flags.string({
      description:
        "override the default signer when setting oracle permissions",
      dependsOn: ["enable"],
    }),
    fundAmount: Flags.string({
      description: "fund the aggregator with some wETH",
      default: "0.0",
    }),
  };

  static args = {
    queueAddress: Args.string({
      description: "address of the oracle queue",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CreateAggregator);

    const authority = await this.getAuthority(flags.authority);
    const authorityAddress = await authority.getAddress();

    let enableParams: EnablePermissions = false;
    if (flags.enable) {
      enableParams = true;

      if (flags.queueAuthority) {
        const queueAuthoritySigner = await this.getAuthority(
          flags.queueAuthority
        );
        enableParams = { queueAuthority: queueAuthoritySigner };
      }
    }

    const [queueAccount, queueData] = await this.loadQueue(args.queueAddress);

    const jobs = flags.job
      ? flags.job.map((defPath) => this.loadJobDefinitionWithMeta(defPath))
      : [];

    let jobsHash = "";
    if (jobs.length > 0) {
      jobsHash = await publishJobsToIPFS(
        jobs.map((j, i): Job => this.convertJob(j)),
        "https://api.switchboard.xyz/api/ipfs"
      );
    }

    const [aggregatorAccount, aggregatorInit] =
      await queueAccount.createAggregator(
        {
          name: flags.name ?? "",
          authority: authorityAddress,
          batchSize: flags.batchSize ?? 1,
          minUpdateDelaySeconds: flags.updateInterval ?? 30,
          minOracleResults: flags.minOracles ?? 1,
          minJobResults: flags.minJobs ?? 1,
          jobsHash: jobsHash,
          varianceThreshold: flags.varianceThreshold
            ? Number.parseFloat(flags.varianceThreshold)
            : 0,
          forceReportPeriod: flags.forceReportPeriod ?? 0,
          enableHistory: flags.enableHistory,
          fundAmount: toBigNumber(new Big(flags.fundAmount ?? 0)),
        },
        enableParams
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

    this.logger.info("\n");
    this.logger.info(this.toUrl(aggregatorInit.hash));
  }

  async catch(error: any) {
    super.catch(error, "Failed to create aggregator");
  }
}
