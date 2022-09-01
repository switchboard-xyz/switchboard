import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import {
  AggregatorAccount,
  CrankAccount,
  EscrowAccount,
  PID,
  QueueAccount,
} from "@switchboard-xyz/near.js";

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

  static args = [
    {
      name: "crankAddress",
      description: "address of the crank in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CrankPush);

    const crankAccount = new CrankAccount({
      connection: this.near.connection,
      address: this.parseAddress(args.crankAddress),
    });
    const crankData = await crankAccount.loadData();

    const aggregatorAccount = new AggregatorAccount({
      connection: this.near.connection,
      address: this.parseAddress(flags.aggregatorAddress),
    });
    const aggregatorData = await aggregatorAccount.loadData();

    const txnReceipt = await this.signer.functionCall({
      contractId: PID,
      methodName: "crank_push",
      args: {
        ix: {
          crank: [...crankAccount.address],
          aggregator: [...aggregatorAccount.address],
        },
      },
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

  async catch(error) {
    super.catch(error, "Failed to push near crank");
  }
}
