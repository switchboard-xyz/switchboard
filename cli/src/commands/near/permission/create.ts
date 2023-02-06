import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import {
  OracleAccount,
  QueueAccount,
  PermissionAccount,
  AggregatorAccount,
  SwitchboardPermission,
} from "@switchboard-xyz/near.js";

export default class CreateOraclePermissions extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a permission account";

  static aliases = ["near:create:oracle:permission"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate account that is the granters authority",
    }),
    granter: Flags.string({
      required: true,
      description:
        "account that will grant permissions, typically the OracleQueue",
    }),
    grantee: Flags.string({
      required: true,
      description:
        "account that will be granted permissions, typically an Oracle or Aggregator",
    }),
    enable: Flags.boolean({
      description: "enable permissions",
    }),
  };

  async getGranteeAccountType(
    granteeAddress: Uint8Array
  ): Promise<"Aggregator" | "Oracle"> {
    // first try aggregator
    try {
      const aggregator = new AggregatorAccount({
        program: this.program,
        address: granteeAddress,
      });
      await aggregator.loadData();
      return "Aggregator";
    } catch {}

    // next try oracle
    try {
      const oracle = new OracleAccount({
        program: this.program,
        address: granteeAddress,
      });
      await oracle.loadData();
      return "Oracle";
    } catch {}

    throw new Error(
      `Failed to determine whether grantee was an Oracle or an Aggregator`
    );
  }

  async run() {
    const { flags } = await this.parse(CreateOraclePermissions);

    const granter = new QueueAccount({
      program: this.program,
      address: this.parseAddress(flags.granter),
    });
    const granterData = await granter.loadData();

    const granteeAddress = this.parseAddress(flags.grantee);

    const accountType = await this.getGranteeAccountType(granteeAddress);

    let permissionAccount: PermissionAccount;
    let permissionData: any;
    try {
      const permissionKey = PermissionAccount.keyFromSeed(
        granterData.authority,
        granter.address,
        granteeAddress
      );
      permissionAccount = new PermissionAccount({
        program: this.program,
        address: permissionKey,
      });
      permissionData = await permissionAccount.loadData();
    } catch {
      permissionAccount = await PermissionAccount.create(this.program, {
        authority: granterData.authority,
        granter: granter.address,
        grantee: granteeAddress,
      });
      permissionData = await permissionAccount.loadData();
    }

    if (flags.enable) {
      const queueAuthority = this.getAuthority(
        flags.authority,
        granterData.authority
      );
      const permission: SwitchboardPermission =
        accountType === "Aggregator"
          ? SwitchboardPermission.PERMIT_ORACLE_QUEUE_USAGE
          : accountType === "Oracle"
          ? SwitchboardPermission.PERMIT_ORACLE_HEARTBEAT
          : SwitchboardPermission.NONE;
      const txn = await permissionAccount.set({
        permission,
        enable: flags.enable,
      });
      permissionData = await permissionAccount.loadData();
    }

    if (flags.json) {
      return this.normalizeAccountData(
        permissionAccount.address,
        permissionData
      );
    }

    this.logger.info(
      `Permission Key (Uint8Array): [${permissionAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Permission Key (Base58): ${this.encodeAddress(
        permissionAccount.address
      )}`
    );
    this.logger.info(JSON.stringify(permissionData, this.jsonReplacers, 2));
  }

  async catch(error) {
    super.catch(
      error,
      "Failed to create a permission account for a near oracle"
    );
  }
}
