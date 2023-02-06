import { Args, Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import { CrankAccount } from "@switchboard-xyz/near.js";

export default class CrankCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new crank";

  static aliases = ["near:create:crank"];

  static flags = {
    ...BaseCommand.flags,
    name: Flags.string({
      description: "name of the crank for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the crank for easier identification",
    }),
    maxRows: Flags.integer({
      description: "maximum number of rows on the crank",
      default: 100,
    }),
  };

  static args = {
    queueAddress: Args.string({
      description: "address of the queue in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CrankCreate);

    const crankAccount = await CrankAccount.create(this.program, {
      queue: this.parseAddress(args.queueAddress),
      maxRows: flags.maxRows,
      name: Buffer.from(flags.name || ""),
      metadata: Buffer.from(flags.metadata || ""),
    });
    const crankData = await crankAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(crankAccount.address, crankData);
    }

    this.logger.info(
      `Crank Key (Uint8Array): [${crankAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Crank Key (Base58): ${this.encodeAddress(crankAccount.address)}`
    );
    this.logger.info(JSON.stringify(crankData, this.jsonReplacers, 2));
  }

  async catch(error: any) {
    super.catch(error, "Failed to create near crank");
  }
}
