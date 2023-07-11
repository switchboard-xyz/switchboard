import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import {
  attestationTypes,
  FunctionAccount,
  SB_ATTESTATION_PID,
  TransactionObject,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "wrap SOL into a function accounts escrow wallet";

  static flags = {
    ...BaseCommand.flags,
    fundAmount: Flags.string({
      description: "",
      default: "0.0",
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionCreate);

    const fundAmount = flags.fundAmount ? Number(flags.fundAmount) : undefined;
    if (!fundAmount || fundAmount < 0) {
      throw new Error("amount to fund must be greater than 0");
    }

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    const wallet = await functionAccount.wallet;

    const fundWalletIxn = attestationTypes.walletFund(
      this.program,
      {
        params: {
          // eslint-disable-next-line unicorn/no-null
          transferAmount: null,
          wrapAmount: this.program.mint.toTokenAmountBN(fundAmount),
        },
      },
      {
        wallet: wallet.publicKey,
        mint: this.program.mint.address,
        authority: this.payer,
        attestationQueue: functionState.attestationQueue,
        tokenWallet: wallet.tokenWallet,
        funderWallet: SB_ATTESTATION_PID, // not needed
        funder: this.payer,
        state: this.program.attestationProgramState.publicKey,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        systemProgram: anchor.web3.SystemProgram.programId,
      }
    );

    const txn = new TransactionObject(this.payer, [fundWalletIxn], []);

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function Account funded successfully:`,
        signature
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to fund function account");
  }
}
