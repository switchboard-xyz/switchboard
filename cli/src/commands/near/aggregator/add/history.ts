import { NearWithSignerBaseCommand as BaseCommand } from "../../../../near";

import { Args, Flags } from "@oclif/core";

export default class AggregatorAddHistory extends BaseCommand {
  static description = "add rows to a history vector";

  static aliases = ["near:aggregator:history:add"];

  static flags = {
    ...BaseCommand.flags,
    // authority: Flags.string({
    //   char: "a",
    //   description: "alternate keypair that is the authority for the aggregator",
    // }),
    numRows: Flags.integer({
      description: "number of rows to add to the aggregator",
      default: 1000,
    }),
  };

  static args = {
    aggregatorAddress: Args.string({
      description: "address of the aggregator in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(AggregatorAddHistory);

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
      args.aggregatorAddress
    );

    const authority = this.getAuthority(
      flags.authority,
      aggregatorData.authority
    );

    const txnReceipt = await aggregatorAccount.addHistory({
      numRows: flags.numRows,
    });

    this.logger.info(`History added to aggregator successfully`);

    if (flags.json) {
      return {
        signature: txnReceipt.transaction.hash,
        url: this.toUrl(txnReceipt.transaction.hash),
        ...txnReceipt,
      };
    }
  }

  async catch(error: any) {
    super.catch(error, "Failed to add history to aggregator");
  }
}
