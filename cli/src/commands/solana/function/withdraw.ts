import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { sleep } from "@switchboard-xyz/common";
import { FunctionAccount } from "@switchboard-xyz/solana.js";
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
      required: false,
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

    // make sure they exist
    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      functionState.authority
    );

    const wallet = await functionAccount.wallet;
    const startingBalance = await wallet.getBalance();
    this.logger.debug(`Starting Balance: ${startingBalance}`);

    const txn = await functionAccount.withdrawInstruction(
      this.payer,
      withdrawAmount,
      flags.destinationWallet
        ? new PublicKey(flags.destinationWallet)
        : undefined
    );

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    let retryCount = 3;
    let finalBalance = await wallet.getBalance();
    while (retryCount > 0 && finalBalance === startingBalance) {
      finalBalance = await wallet.getBalance();
      if (finalBalance === startingBalance) {
        break;
      }
      await sleep(1000);
      --retryCount;
    }

    this.logger.debug(`Ending Balance: ${startingBalance}`);

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
