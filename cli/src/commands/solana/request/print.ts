import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import * as splToken from "@solana/spl-token";
import { LAMPORTS_PER_SOL, PublicKey, Transaction } from "@solana/web3.js";
import {
  FunctionRequestAccount,
  SwitchboardWallet,
} from "@switchboard-xyz/solana.js";

export default class FunctionRequestPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a function request account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    requestKey: Args.string({
      description: "public key of the request account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionRequestPrint);

    const [requestAccount, requestState] = await FunctionRequestAccount.load(
      this.program,
      args.requestKey
    );

    if (flags.json) {
      return this.normalizeAccountData(requestAccount.publicKey, {
        ...requestState.toJSON(),
      });
    }

    this.prettyPrintRequest(requestState, requestAccount.publicKey);
  }

  async catch(error: any) {
    super.catch(error, "failed to print request");
  }
}
