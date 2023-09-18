import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  attestationTypes,
  FunctionAccount,
  TransactionObject,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionWithdraw extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Withdraw funds from a function's escrow";

  static flags = {
    ...BaseCommand.flags,
    withdrawAmount: Flags.string({
      description:
        "Amount of wrapped SOL to withdraw from the function's escrow",
    }),
    authority: Flags.string({
      description: "path to authority keypair if different from payer keypair",
    }),
    destinationWallet: Flags.string({
      description:
        "pubkey of tokenWallet to receive withdrawed funds. Defaults to payer associated token wallet",
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionWithdraw);

    const withdrawAmount = flags.withdrawAmount
      ? Number(flags.withdrawAmount)
      : undefined;
    if (!withdrawAmount || withdrawAmount < 0) {
      throw new Error("amount to withdraw must be greater than 0");
    }

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      functionState.authority
    );

    const wallet = await functionAccount.wallet;

    let createTokenWalletTxn: TransactionObject | undefined;
    let destinationWallet = flags.destinationWallet
      ? new PublicKey(flags.destinationWallet)
      : undefined;

    if (!destinationWallet) {
      [destinationWallet, createTokenWalletTxn] =
        await this.program.mint.getOrCreateWrappedUserInstructions(this.payer, {
          fundUpTo: 0,
        });
    }

    const withdrawWalletIxn = attestationTypes.walletWithdraw(
      this.program,
      {
        params: {
          amount: this.program.mint.toTokenAmountBN(withdrawAmount),
        },
      },
      {
        wallet: wallet.publicKey,
        mint: this.program.mint.address,
        authority: authority.publicKey,
        attestationQueue: functionState.attestationQueue,
        tokenWallet: wallet.tokenWallet,
        destinationWallet: destinationWallet,
        state: this.program.attestationProgramState.publicKey,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      }
    );

    const txn = createTokenWalletTxn
      ? createTokenWalletTxn.add(withdrawWalletIxn, [authority])
      : new TransactionObject(this.payer, [withdrawWalletIxn], [authority]);

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function Account withdrawal successfully:`,
        signature
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to withdraw from function account");
  }
}
