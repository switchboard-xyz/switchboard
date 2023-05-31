import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args, Flags } from "@oclif/core";

export default class AggregatorPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aggregator";

  static flags = {
    ...BaseCommand.flags,
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

    if (flags.json) {
      return this.normalizeAccountData(aggregatorAccount.address, aggregator);
    }

    this.prettyPrintAggregator(aggregator, aggregatorAccount.address);
  }

  async catch(error: any) {
    super.catch(error, "failed to print aggregator");
  }
}
