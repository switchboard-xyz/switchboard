import { NearWithoutSignerBaseCommand as BaseCommand } from "../../../near";

import { Args } from "@oclif/core";

export default class AggregatorEscrow extends BaseCommand {
  static description = "view an aggregators escrow state";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    aggregatorAddress: Args.string({
      description: "address of the aggregator in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(AggregatorEscrow);

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
      args.aggregatorAddress
    );

    const escrow = aggregatorAccount.escrow;

    console.log((await escrow.loadData()).toJSON());
  }

  async catch(error: any) {
    super.catch(error, "Failed to print near aggregator's escrow");
  }
}
