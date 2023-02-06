import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { PermissionAccount, types } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

export default class PermissionRevoke extends BaseCommand {
  static description = "disable a resources permissions";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the permission account",
    }),
  };

  static args = {
    permissionKey: Args.string({
      description: "public key of the permission account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(PermissionRevoke);

    const permissionAccount = new PermissionAccount(
      this.program,
      new PublicKey(args.permissionKey)
    );
    const permissionData = await permissionAccount.loadData();

    const authority = await this.loadAuthority(
      flags.authority,
      permissionData.authority
    );

    if (!authority.publicKey.equals(permissionData.authority)) {
      throw new Error(
        `Authority mismatch, expected ${permissionData.authority}, received ${authority.publicKey}`
      );
    }

    const txn = permissionAccount.setInstruction(this.payer, {
      enable: false,
      queueAuthority: authority,
      permission: new types.SwitchboardPermission.PermitOracleQueueUsage(), // gets overwritten
    });

    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(`${CHECK_ICON}Permissions disabled successfully`)}`
    );
    this.logger.log(this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "failed to disabe permissions");
  }
}
