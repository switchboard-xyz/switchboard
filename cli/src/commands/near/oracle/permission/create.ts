import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../../near";
import {
  OracleAccount,
  QueueAccount,
  PermissionAccount,
} from "@switchboard-xyz/near.js";

export default class CreateOraclePermissions extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a permission account for a near oracle";

  static aliases = ["near:create:oracle:permission"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "oracleAddress",
      description: "address of the oracle in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CreateOraclePermissions);

    const oracleAccount = new OracleAccount({
      program: this.program,
      address: this.parseAddress(args.oracleAddress),
    });
    const oracleData = await oracleAccount.loadData();

    const queueAccount = new QueueAccount({
      program: this.program,
      address: oracleData.queue,
    });
    const queueData = await queueAccount.loadData();

    let oraclePermissionAccount: PermissionAccount;
    let oraclePermissionData: any;
    try {
      const permissionKey = PermissionAccount.keyFromSeed(
        queueData.authority,
        queueAccount.address,
        oracleAccount.address
      );
      oraclePermissionAccount = new PermissionAccount({
        program: this.program,
        address: permissionKey,
      });
      oraclePermissionData = await oraclePermissionAccount.loadData();
    } catch (error) {
      oraclePermissionAccount = await PermissionAccount.create(this.program, {
        authority: queueData.authority,
        granter: queueAccount.address,
        grantee: oracleAccount.address,
      });
      oraclePermissionData = await oraclePermissionAccount.loadData();
    }

    if (flags.json) {
      return this.normalizeAccountData(
        oraclePermissionAccount.address,
        oraclePermissionData
      );
    }

    this.logger.info(
      `Permission Key (Uint8Array): [${oraclePermissionAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Permission Key (Base58): ${this.encodeAddress(
        oraclePermissionAccount.address
      )}`
    );
    this.logger.info(
      JSON.stringify(oraclePermissionData, this.jsonReplacers, 2)
    );
  }

  async catch(error) {
    super.catch(
      error,
      "Failed to create a permission account for a near oracle"
    );
  }
}
