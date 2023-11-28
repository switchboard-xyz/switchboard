import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { isBase58 } from "@switchboard-xyz/common";
import { sleep } from "@switchboard-xyz/common";
import { FunctionRoutineAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionRoutineFund extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Fund a new routine account";

  static examples = [
    "$ sb solana routine fund CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --fundAmount 1.25",
  ];

  static flags = {
    ...BaseCommand.flags,
    fundAmount: Flags.string({
      required: false,
      description: "token amount to load into the routines's escrow wallet.",
      default: "0.0",
    }),
  };

  static args = {
    routineKey: Args.string({
      description: "public key of the routine account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionRoutineFund);

    let authority: PublicKey | undefined;
    if (flags.authority) {
      if (isBase58(flags.authority)) {
        authority = new PublicKey(flags.authority);
      } else {
        const authorityKeypair = await this.loadAuthority(flags.authority);
        authority = authorityKeypair.publicKey;
      }
    }

    const fundAmount = flags.fundAmount ? Number(flags.fundAmount) : undefined;
    if (fundAmount && fundAmount < 0) {
      throw new Error("amount to fund must be greater than 0");
    }

    const routineAccount = new FunctionRoutineAccount(
      this.program,
      args.routineKey
    );

    const startingBalance = await routineAccount.getBalance();
    this.logger.debug(`Starting Balance: ${startingBalance}`);

    const signature = await routineAccount
      .fundInstruction(this.payer, { wrapAmount: fundAmount })
      .then((txn: any) => this.signAndSend(txn));

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    let retryCount = 3;
    let finalBalance = await routineAccount.getBalance();
    while (retryCount > 0 && finalBalance === startingBalance) {
      finalBalance = await routineAccount.getBalance();
      if (finalBalance !== startingBalance) break;
      await sleep(1000);
      --retryCount;
    }
    this.logger.debug(`Ending Balance: ${finalBalance}`);
    this.logger.info(this.toUrl(signature));
    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Routine Account funded successfully:`,
        signature
      )}`
    );
  }

  async catch(error: any) {
    super.catch(error, "failed to fund a routine account");
  }
}
