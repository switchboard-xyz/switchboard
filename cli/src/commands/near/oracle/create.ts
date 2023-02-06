import { Args, Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import {
  OracleAccount,
  PermissionAccount,
  SwitchboardPermission,
} from "@switchboard-xyz/near.js";

export default class CreateOracle extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a near oracle for a given queue";

  static aliases = ["near:create:oracle"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that will be the authority for the oracle",
    }),
    name: Flags.string({
      description: "name of the oracle for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the oracle for easier identification",
    }),
  };

  static args = {
    queueAddress: Args.string({
      description: "address of the queue in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CreateOracle);

    const [queueAccount, queueData] = await this.loadQueue(args.queueAddress);

    const oracleAccount = await OracleAccount.create(this.program, {
      authority: flags.authority || this.program.account.accountId,
      queue: this.parseAddress(args.queueAddress),
      name: Buffer.from(flags.name || ""),
      metadata: Buffer.from(flags.metadata || ""),
    });
    const oracleData = await oracleAccount.loadData();

    const permissionAccount = await PermissionAccount.create(this.program, {
      authority: queueData.authority,
      granter: queueAccount.address,
      grantee: oracleAccount.address,
    });

    if (this.program.account.accountId === queueData.authority) {
      await permissionAccount.set({
        permission: SwitchboardPermission.PERMIT_ORACLE_HEARTBEAT,
        enable: true,
      });
    }

    const permissionData = await permissionAccount.loadData();

    const escrowData = await oracleAccount.escrow.loadData();

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.address, {
        ...oracleData.toJSON(),
        escrow: escrowData.toJSON(),
        permissions: this.normalizeAccountData(
          permissionAccount.address,
          permissionData.toJSON()
        ),
      });
    }

    this.logger.info(
      `Oracle Key (Uint8Array): [${oracleAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Oracle Key (Base58): ${this.encodeAddress(oracleAccount.address)}`
    );
    this.logger.info(JSON.stringify(oracleData, this.jsonReplacers, 2));
  }

  async catch(error: any) {
    super.catch(error, "Failed to create near oracle");
  }
}
