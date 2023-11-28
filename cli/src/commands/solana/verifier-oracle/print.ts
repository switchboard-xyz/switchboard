import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

import { Args, Flags } from "@oclif/core";
import { VerifierAccount } from "@switchboard-xyz/solana.js";

export default class VerifierPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a verifier oracle account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    verifierKey: Args.string({
      description: "public key of the verifier account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(VerifierPrint);

    const [verifierAccount, verifierState] = await VerifierAccount.load(
      this.program,
      args.verifierKey
    );

    if (flags.json) {
      return this.normalizeAccountData(
        verifierAccount.publicKey,
        verifierState
      );
    }

    this.prettyPrintVerifierOracle(verifierState, verifierAccount.publicKey);
  }

  async catch(error: any) {
    super.catch(error, "failed to print verifier oracle");
  }
}
