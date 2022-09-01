import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../../near";
import {
  OracleAccount,
  QueueAccount,
  PermissionAccount,
  AggregatorAccount,
} from "@switchboard-xyz/near.js";

export default class CreateAggregatorPermission extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a permission account for a near aggregator";

  static aliases = ["near:create:aggregator:permission"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "aggregatorAddress",
      description: "address of the aggregator in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CreateAggregatorPermission);

    const aggregatorAccount = new AggregatorAccount({
      connection: this.near.connection,
      address: this.parseAddress(args.aggregatorAddress),
    });
    const aggregatorData = await aggregatorAccount.loadData();

    const queueAccount = new QueueAccount({
      connection: this.near.connection,
      address: aggregatorData.queue,
    });
    const queueData = await queueAccount.loadData();

    let permissionAccount: PermissionAccount;
    let permissionData: any;
    try {
      const permissionKey = PermissionAccount.keyFromSeed(
        queueData.authority,
        queueAccount.address,
        aggregatorAccount.address
      );
      permissionAccount = new PermissionAccount({
        connection: this.near.connection,
        address: permissionKey,
      });
      permissionData = await permissionAccount.loadData();
    } catch (error) {
      permissionAccount = await PermissionAccount.create(this.signer, {
        authority: queueData.authority,
        granter: queueAccount.address,
        grantee: aggregatorAccount.address,
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
      "Failed to create a permission account for a near aggregator"
    );
  }
}
