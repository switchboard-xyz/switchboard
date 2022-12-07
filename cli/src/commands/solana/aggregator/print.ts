import { Flags } from "@oclif/core";
import { AggregatorAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

export default class AggregatorPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aggregator and it's associated accounts";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorPrint);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const accounts = await aggregatorAccount.fetchAccounts(aggregator);

    if (flags.json) {
      return accounts;
    }

    this.prettyPrintAggregatorAccounts(accounts);
  }

  async catch(error) {
    super.catch(error, "failed to print aggregator");
  }
}
