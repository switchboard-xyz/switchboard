import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";

export default class CreateEscrow extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an escrow token account";

  static aliases = ["near:create:escrow"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that will be the authority for the oracle",
    }),
    mint: Flags.string({
      description: "token mint to create escrow account for",
      default: "wrap.test",
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CreateEscrow);

    const escrowAccount = await this.loadEscrow();
    const escrowData = await escrowAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(escrowAccount.address, escrowData);
    }

    this.logger.info(
      `Escrow Key (Uint8Array): [${escrowAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Escrow Key (Base58): ${this.encodeAddress(escrowAccount.address)}`
    );
    this.logger.info(JSON.stringify(escrowData, this.jsonReplacers, 2));
  }

  async catch(error: any) {
    super.catch(error, "Failed to create near escrow account");
  }
}
