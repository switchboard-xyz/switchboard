import { Args, Flags } from "@oclif/core";
import { AggregatorAccount, QueueAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

export default class AggregatorPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aggregator and it's associated accounts";

  static flags = {
    ...BaseCommand.flags,
    queuePubkey: Flags.string({
      description:
        "override the aggregators current queue. useful for viewing permission lease accounts if an aggregator has moved queues",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorPrint);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      flags.queuePubkey ?? aggregator.queuePubkey
    );

    const accounts = await aggregatorAccount.fetchAccounts(
      aggregator,
      queueAccount,
      queue
    );

    if (flags.json) {
      return accounts;
    }

    this.prettyPrintAggregatorAccounts(accounts);
  }

  async catch(error) {
    super.catch(error, "failed to print aggregator");
  }
}
