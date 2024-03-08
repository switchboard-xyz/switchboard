import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { SwitchboardSecrets } from "@switchboard-xyz/common";
import chalk from "chalk";
import fs from "fs";

export default class PrintSecrets extends BaseCommand {
  static enableJsonFlag = true;

  static description =
    "print the list of user secrets along with their whitelisted MrEnclaves";

  static examples = [""];

  static flags = {
    ...BaseCommand.flags,
  };

  async run() {
    const { args, flags } = await this.parse(PrintSecrets);

    const sbSecrets = new SwitchboardSecrets();

    const secrets = await sbSecrets.getUserSecrets(
      this.program.walletPubkey.toBase58(),
      "ed25519"
    );

    this.log(JSON.stringify(secrets, undefined, 2));
  }

  async catch(error: any) {
    super.catch(error, "failed to print user secrets secret");
  }
}
