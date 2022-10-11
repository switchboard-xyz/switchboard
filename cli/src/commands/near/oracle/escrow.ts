import { Flags } from "@oclif/core";
import { NearWithoutSignerBaseCommand as BaseCommand } from "../../../near";
import { AggregatorAccount, QueueAccount } from "@switchboard-xyz/near.js";

export default class AggregatorEscrow extends BaseCommand {
  static enableJsonFlag = true;

  static description = "view an aggregators escrow state";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "oracleAddress",
      description: "address of the aggregator in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(AggregatorEscrow);

    const [oracleAccount, oracleData] = await this.loadOracle(
      args.oracleAddress
    );

    const escrow = oracleAccount.escrow;
    const data = this.normalizeAccountData(oracleAccount.address, {
      ...oracleData.toJSON(),
      escrow: (await escrow.loadData()).toJSON(),
    });

    console.log((await escrow.loadData()).toJSON());
  }

  async catch(error) {
    super.catch(error, "Failed to print near aggregator's escrow");
  }
}
