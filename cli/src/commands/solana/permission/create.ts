import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  AccountNotFoundError,
  PermissionAccount,
  QueueAccount,
  SwitchboardProgram,
  types,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class PermissionCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a permission account";

  // static examples = [
  //   "$ sbv2 solana lease create GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.5 --keypair ../payer-keypair.json",
  // ];

  static flags = {
    ...BaseCommand.flags,
    granter: Flags.string({
      required: true,
      description:
        "publicKey of the resource that is granting permissions. This is typically the QueueAccount.",
    }),
    grantee: Flags.string({
      required: true,
      description:
        "publicKey of the resource that is being granted permissions. This is typically an AggregatorAccount, BufferRelayerAccount, OracleAccount, or VrfAccount.",
    }),
    enable: Flags.boolean({
      description:
        "whether to enable permissions on the resource. --keypair or --authority must be provided",
    }),
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the granter",
    }),
  };

  async run() {
    const { flags } = await this.parse(PermissionCreate);

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      flags.granter
    );

    const authority = await this.loadAuthority(
      flags.authority,
      flags.enable ? queue.authority : undefined
    );

    const granteeAccountInfo = await this.program.connection.getAccountInfo(
      new PublicKey(flags.grantee)
    );
    if (!granteeAccountInfo) {
      throw new AccountNotFoundError("Grantee", new PublicKey(flags.grantee));
    }

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

    const [permissionAccount, permissionInit] =
      PermissionAccount.createInstruction(this.program, this.payer, {
        grantee: new PublicKey(flags.grantee),
        granter: queueAccount.publicKey,
        authority: authority.publicKey,
      });

    if (flags.enable) {
      permissionInit.combine(
        permissionAccount.setInstruction(this.payer, {
          enable: true,
          permission: permission,
          queueAuthority: authority,
        })
      );
    }

    const signature = await this.signAndSend(permissionInit);

    if (flags.json) {
      return this.normalizeAccountData(
        permissionAccount.publicKey,
        (await permissionAccount.loadData()).toJSON()
      );
    }

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Permission account created successfully`,
        permissionAccount.publicKey.toBase58()
      )}`
    );
    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to create a permission account");
  }
}
