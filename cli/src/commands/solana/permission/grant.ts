import { Flags } from "@oclif/core";
import { flags } from "@oclif/parser";
import { PublicKey } from "@solana/web3.js";
import {
  PermissionAccount,
  SwitchboardProgram,
  types,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

export default class PermissionGrant extends BaseCommand {
  static description = "enable a resources permissions";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the permission account",
    }),
  };

  static args = [
    {
      name: "permissionKey",
      description: "public key of the permission account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(PermissionGrant);

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

    const granteeAccountInfo = await this.program.connection.getAccountInfo(
      permissionData.grantee
    );
    const granteeAccountType =
      SwitchboardProgram.getAccountType(granteeAccountInfo);

    let permission: types.SwitchboardPermissionKind;
    switch (granteeAccountType) {
      case "Oracle": {
        permission = new types.SwitchboardPermission.PermitOracleHeartbeat();
        break;
      }
      case "Aggregator":
      case "BufferRelayer": {
        permission = new types.SwitchboardPermission.PermitOracleQueueUsage();
        break;
      }
      case "Vrf": {
        permission = new types.SwitchboardPermission.PermitVrfRequests();
        break;
      }
      default: {
        throw new Error(
          `Unable to determine correct permissions to assign for resource type ${granteeAccountType}`
        );
      }
    }

    const txn = permissionAccount.setInstruction(this.payer, {
      enable: true,
      queueAuthority: authority,
      permission: permission,
    });

    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(`${CHECK_ICON}Permissions set successfully`)}`
    );
    this.logger.log(this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "failed to set permissions");
  }
}
