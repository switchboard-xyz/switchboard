import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { sleep } from "@switchboard-xyz/common";
import { FunctionAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionFund extends BaseCommand {
  static enableJsonFlag = true;

  static description = "wrap SOL into a function accounts escrow wallet";

  static flags = {
    ...BaseCommand.flags,
    amount: Flags.string({
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
    const { args, flags } = await this.parse(FunctionFund);

    const fundAmount = flags.fundAmount ? Number(flags.fundAmount) : undefined;
    if (!fundAmount || fundAmount < 0) {
      throw new Error("amount to fund must be greater than 0");
    }

    // make sure they exist
    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );
    const wallet = await functionAccount.wallet;
    const startingBalance = await wallet.getBalance();
    this.logger.debug(`Starting Balance: ${startingBalance}`);

    const txn = await functionAccount.fundInstruction(this.payer, {
      wrapAmount: fundAmount,
    });
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
