import { Args, Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";

export default class CrankPush extends BaseCommand {
  static enableJsonFlag = true;

  static description = "push an aggregator onto the crank";

  static aliases = ["aptos:push:crank"];

  static flags = {
    ...BaseCommand.flags,
    aggregatorHexString: Flags.string({
      char: "a",
      description: "HexString address of the aggregator",
      required: true,
      // multiple: true
    }),
  };

  static args = {
    crankHexString: Args.string({
      description: "HexString address of the crank",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CrankPush);

    const [crankAccount, crankData] = await this.loadCrank(args.crankHexString);

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
      flags.aggregatorHexString
    );

    const sig = await crankAccount.push(this.signer, {
      aggregatorAddress: aggregatorAccount.address.toString(),
    });

    if (flags.json) {
      return {
        signature: sig,
        url: this.toUrl(sig),
      };
    }

    this.logger.info(this.toUrl(sig));
  }

  async catch(error: any) {
    super.catch(error, "Failed to push aggregator onto crank");
  }
}
