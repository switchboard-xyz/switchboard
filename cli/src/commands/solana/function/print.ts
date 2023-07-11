import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

import { Args, Flags } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/solana.js";

export default class FunctionPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a function account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionPrint);

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    if (flags.json) {
      return this.normalizeAccountData(functionAccount.publicKey, {
        ...functionState.toJSON(),
      });
    }

    this.prettyPrintFunction(functionState, functionAccount.publicKey);
  }

  async catch(error: any) {
    super.catch(error, "failed to print function");
  }
}
