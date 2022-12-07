import { Flags } from "@oclif/core";
import { CrankAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

export default class CrankPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a crank";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "crankKey",
      description: "public key of the crank account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(CrankPrint);

    const [crankAccount, crank] = await CrankAccount.load(
      this.program,
      args.crankKey
    );

    if (flags.json) {
      return this.normalizeAccountData(crankAccount.publicKey, crank.toJSON());
    }

    this.prettyPrintCrank(crank, crankAccount.publicKey);
  }

  async catch(error) {
    super.catch(error, "failed to print crank");
  }
}
