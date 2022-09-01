import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import { OracleAccount } from "@switchboard-xyz/near.js";

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

  static args = [
    {
      name: "queueAddress",
      description: "address of the queue in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CreateOracle);

    const oracleAccount = await OracleAccount.create(this.signer, {
      authority: flags.authority || this.signer.accountId,
      queue: this.parseAddress(args.queueAddress),
      name: Buffer.from(flags.name || ""),
      metadata: Buffer.from(flags.metadata || ""),
    });
    const oracleData = await oracleAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.address, oracleData);
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

  async catch(error) {
    super.catch(error, "Failed to create near oracle");
  }
}
