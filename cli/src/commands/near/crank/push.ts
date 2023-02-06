import { Args, Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import { AggregatorAccount, CrankAccount } from "@switchboard-xyz/near.js";

export default class CrankPush extends BaseCommand {
  static enableJsonFlag = true;

  static description = "push an aggregator onto the crank";

  static aliases = ["near:push:crank"];

  static flags = {
    ...BaseCommand.flags,
    aggregatorAddress: Flags.string({
      char: "a",
      description: "address of the aggregator in Uint8 or Base58 encoding",
      required: true,
      // multiple: true
    }),
  };

  static args = {
    crankAddress: Args.string({
      description: "address of the crank in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CrankPush);

    const crankAccount = new CrankAccount({
      program: this.program,
      address: this.parseAddress(args.crankAddress),
    });
    const crankData = await crankAccount.loadData();

    const aggregatorAccount = new AggregatorAccount({
      program: this.program,
      address: this.parseAddress(flags.aggregatorAddress),
    });
    const aggregatorData = await aggregatorAccount.loadData();

    const txnReceipt = await crankAccount.push({
      aggregator: aggregatorAccount.address,
    });

    if (flags.json) {
      return {
        signature: txnReceipt.transaction.hash,
        url: this.toUrl(txnReceipt.transaction.hash),
        ...txnReceipt,
      };
    }

    this.logger.info(JSON.stringify(txnReceipt, this.jsonReplacers, 2));
    this.logger.info(this.toUrl(txnReceipt.transaction.hash));
  }

  async catch(error: any) {
    super.catch(error, "Failed to push near crank");
  }
}
