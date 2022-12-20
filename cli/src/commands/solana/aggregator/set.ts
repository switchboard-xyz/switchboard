import { Flags } from "@oclif/core";
import { AggregatorAccount, QueueAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";

export default class AggregatorSet extends BaseCommand {
  static enableJsonFlag = true;

  static description = "set an aggregators config";

  // static examples = ["$ sbv2 solana:aggregator:add:job"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the aggregator and required to make config changes",
    }),
    name: Flags.string({
      description: "name of the aggregator",
    }),
    metadata: Flags.string({
      description: "metadata of the aggregator",
    }),
    batchSize: Flags.integer({
      description: "number of oracles requested for each open round call",
    }),
    minJobs: Flags.string({
      description: "number of jobs that must respond before an oracle responds",
    }),
    minOracles: Flags.string({
      description:
        "number of oracles that must respond before a value is accepted on-chain",
    }),
    updateInterval: Flags.string({
      description: "set an aggregator's minimum update delay",
    }),
    varianceThreshold: Flags.string({
      description:
        "percentage change between a previous accepted result and the next round before an oracle reports a value on-chain. Used to conserve lease cost during low volatility",
    }),
    forceReportPeriod: Flags.string({
      description:
        "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
    }),
    // fee config
    basePriorityFee: Flags.integer({
      description: "",
    }),
    priorityFeeBump: Flags.integer({
      description: "",
    }),
    priorityFeeBumpPeriod: Flags.integer({
      description: "",
    }),
    maxPriorityFeeMultiplier: Flags.integer({
      description: "",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorSet);

    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregatorData.authority
    );

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      aggregatorData.queuePubkey
    );

    const txn = await aggregatorAccount.setConfigInstruction(this.payer, {
      authority,
      name: flags.name,
      metadata: flags.metadata,
      batchSize: flags.minOracles
        ? Number.parseInt(flags.minOracles, 10)
        : undefined,
      minOracleResults: flags.minOracles
        ? Number.parseInt(flags.minOracles, 10)
        : undefined,
      minJobResults: flags.minJobs
        ? Number.parseInt(flags.minJobs, 10)
        : undefined,
      forceReportPeriod: flags.forceReportPeriod
        ? Number.parseInt(flags.forceReportPeriod, 10)
        : undefined,
      varianceThreshold: flags.varianceThreshold
        ? Number.parseFloat(flags.varianceThreshold)
        : undefined,
      basePriorityFee: flags.basePriorityFee,
      priorityFeeBump: flags.priorityFeeBump,
      priorityFeeBumpPeriod: flags.priorityFeeBumpPeriod,
      maxPriorityFeeMultiplier: flags.maxPriorityFeeMultiplier,
    });
    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    if (flags.json) {
      const accounts = await aggregatorAccount.toAccountsJSON();
      return this.normalizeAccountData(aggregatorAccount.publicKey, accounts);
    }

    this.logger.info(this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "failed to set an aggregator's config");
  }
}
