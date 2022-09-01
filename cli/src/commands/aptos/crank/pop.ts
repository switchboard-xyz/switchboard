import { Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";

export default class CrankPop extends BaseCommand {
  static enableJsonFlag = true;

  static description = "pop the crank";

  static aliases = ["aptos:pop:crank"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "crankHexString",
      description: "HexString address of the crank",
    },
  ];

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

  async catch(error) {
    super.catch(error, "Failed to pop crank");
  }
}
