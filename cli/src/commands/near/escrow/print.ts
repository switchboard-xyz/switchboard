import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";

import { Flags } from "@oclif/core";
import { EscrowAccount } from "@switchboard-xyz/near.js";

export default class CreateEscrow extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an escrow token account";

  static aliases = ["near:print:escrow"];

  static flags = {
    ...BaseCommand.flags,
    // accountId: Flags.string({
    //   char: "a",
    //   description: "account ID to fetch escrow for",
    // }),
  };

  async run() {
    const { flags, args } = await this.parse(CreateEscrow);

    const [
      escrowAccount,
      createEscrowAction,
    ] = await EscrowAccount.getOrCreateStaticAccountAction(this.program);
    if (createEscrowAction) {
      throw new Error(
        `Failed to find user's escrow account for ${flags.accountName}`
      );
    }

    const escrow = await escrowAccount.loadData();
    console.log(escrow.toJSON());
  }

  async catch(error: any) {
    super.catch(error, "Failed to create near escrow account");
  }
}
