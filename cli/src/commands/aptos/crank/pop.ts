import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";

import { Args } from "@oclif/core";

export default class CrankPop extends BaseCommand {
  static enableJsonFlag = true;

  static description = "pop the crank";

  static aliases = ["aptos:pop:crank"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    crankHexString: Args.string({
      description: "HexString address of the crank",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CrankPop);

    const [crankAccount, crankData] = await this.loadCrank(args.crankHexString);

    const sig = await crankAccount.pop(this.signer);

    if (flags.json) {
      return {
        signature: sig,
        url: this.toUrl(sig),
      };
    }

    this.logger.info(this.toUrl(sig));
  }

  async catch(error: any) {
    super.catch(error, "Failed to pop crank");
  }
}
