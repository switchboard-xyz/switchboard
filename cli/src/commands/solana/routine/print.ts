import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import * as splToken from "@solana/spl-token";
import { LAMPORTS_PER_SOL, PublicKey, Transaction } from "@solana/web3.js";
import {
  FunctionRoutineAccount,
  SwitchboardWallet,
} from "@switchboard-xyz/solana.js";

async function getTokenAccountBalance(
  connection: any,
  tokenAccountAddress: any
): Promise<bigint> {
  try {
    // Create a PublicKey object for the token account address
    const tokenAccountPubkey = new PublicKey(tokenAccountAddress);

    // Get account info
    const tokenAccountInfo = await connection.getAccountInfo(
      tokenAccountPubkey
    );

    // Parse the account info to get the token balance
    const tokenAccount = splToken.AccountLayout.decode(tokenAccountInfo.data);
    return tokenAccount.amount;
  } catch (error) {
    console.error("Error in getTokenAccountBalance:", error);
    throw error;
  }
}

export default class FunctionRoutinePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a function routine account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    routineKey: Args.string({
      description: "public key of the routine account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionRoutinePrint);

    const [routineAccount, routineState] = await FunctionRoutineAccount.load(
      this.program,
      args.routineKey
    );

    const balance =
      Number(
        await getTokenAccountBalance(
          this.program.provider.connection,
          routineState.escrowTokenWallet
        )
      ) / LAMPORTS_PER_SOL;

    if (flags.json) {
      return this.normalizeAccountData(routineAccount.publicKey, {
        ...routineState.toJSON(),
        balance,
      });
    }

    this.prettyPrintRoutine(routineState, balance, routineAccount.publicKey);
  }

  async catch(error: any) {
    super.catch(error, "failed to print routine");
  }
}
