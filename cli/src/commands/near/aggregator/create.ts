import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import {
  AggregatorAccount,
  JobAccount,
  SwitchboardDecimal,
} from "@switchboard-xyz/near.js";
import Big from "big.js";
import { OracleJob } from "@switchboard-xyz/common";

export default class CreateAggregator extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a near aggregator for a given queue";

  static aliases = ["near:create:aggregator"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that will be the authority for the oracle",
    }),
    crankAddress: Flags.string({
      description: "optional, address of the crank to add the aggregator to",
    }),
    name: Flags.string({
      description: "name of the crank for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the crank for easier identification",
    }),
    forceReportPeriod: Flags.integer({
      description:
        "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
      default: 0,
    }),
    batchSize: Flags.integer({
      description: "number of oracles requested for each open round call",
    }),
    minJobs: Flags.integer({
      description: "number of jobs that must respond before an oracle responds",
    }),
    minOracles: Flags.integer({
      description:
        "number of oracles that must respond before a value is accepted on-chain",
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
  };

  static args = [
    {
      name: "queueAddress",
      description: "address of the queue in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CreateAggregator);

    const jobs: JobAccount[] = flags.job
      ? await Promise.all(
          flags.job.map(async (jobDefinition) => {
            const oracleJob = this.loadJobJson(jobDefinition);
            const jobAccount = await JobAccount.create(this.signer, {
              authority: flags.authority || this.signer.accountId,
              data: Buffer.from(OracleJob.encodeDelimited(oracleJob).finish()),
              name: Buffer.from(flags.name || ""),
              metadata: Buffer.from(flags.metadata || ""),
            });

            return jobAccount;
          })
        )
      : [];

    const aggregatorAccount = await AggregatorAccount.create(this.signer, {
      authority: flags.authority || this.signer.accountId,
      queue: this.parseAddress(args.queueAddress),
      name: Buffer.from(flags.name || ""),
      metadata: Buffer.from(flags.metadata || ""),
      batchSize: flags.batchSize,
      minOracleResults: flags.minOracles,
      minJobResults: flags.minJobs,
      minUpdateDelaySeconds: flags.updateInterval,
      startAfter: 0,
      varianceThreshold: SwitchboardDecimal.fromBig(
        new Big(flags.varianceThreshold)
      ),
      forceReportPeriod: flags.forceReportPeriod,
      crank: flags.crankAddress
        ? this.parseAddress(flags.crankAddress)
        : undefined,
    });
    const accountData = await aggregatorAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(aggregatorAccount.address, accountData);
    }

    // for await (const job of jobs) {
    //   const tx = await aggregatorAccount.addJob();
    // }

    this.logger.info(
      `Aggregator Key (Uint8Array): [${aggregatorAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Aggregator Key (Base58): ${this.encodeAddress(
        aggregatorAccount.address
      )}`
    );
    this.logger.info(JSON.stringify(accountData, this.jsonReplacers, 2));
  }

  async catch(error) {
    super.catch(error, "Failed to create near aggregator");
  }
}
