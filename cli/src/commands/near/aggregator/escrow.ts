import { Flags } from "@oclif/core";
import { NearWithoutSignerBaseCommand as BaseCommand } from "../../../near";
import { AggregatorAccount, QueueAccount } from "@switchboard-xyz/near.js";

export default class AggregatorEscrow extends BaseCommand {
  static description = "view an aggregators escrow state";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "aggregatorAddress",
      description: "address of the aggregator in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(AggregatorEscrow);

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
      args.aggregatorAddress
    );

    const escrow = aggregatorAccount.escrow;

    console.log((await escrow.loadData()).toJSON());
  }

  async catch(error) {
    super.catch(error, "Failed to print near aggregator's escrow");
  }
}
