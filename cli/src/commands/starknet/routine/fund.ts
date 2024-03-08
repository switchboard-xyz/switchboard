import { StarknetWithSignerBaseCommand } from "../../../starknet";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { Big, sleep } from "@switchboard-xyz/common";
import { RoutineAccount } from "@switchboard-xyz/starknet.js";
import chalk from "chalk";
import { parseEther } from "ethers/lib/utils";

export default class FunctionRoutineFund extends StarknetWithSignerBaseCommand {
  static enableJsonFlag = true;

  static description = "Fund a new routine account";

  static examples = [
    "$ sb solana routine fund CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --fundAmount 1.25",
  ];

  static flags = {
    ...StarknetWithSignerBaseCommand.flags,
    fundAmount: Flags.string({
      required: true,
      description: "token amount to load into the routines's escrow wallet.",
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

    const payerAccount = await this.account;

    const fundAmount = flags.fundAmount
      ? new Big(parseEther(flags.fundAmount).toString())
      : undefined;
    if (!fundAmount || fundAmount.lte(0)) {
      throw new Error("amount to fund must be greater than 0");
    }

    const routineAccount = new RoutineAccount(this.program, args.routineKey);

    const getBalance = async () =>
      await routineAccount.loadData().then((data) => data.balance.toString());

    const startingBalance = await getBalance();
    this.logger.debug(`Starting Balance: ${startingBalance}`);

    const transaction = routineAccount.fundTransaction(fundAmount);
    console.log(JSON.stringify(transaction, undefined, 2));
    const { transaction_hash } = await routineAccount.program.execute(
      payerAccount,
      transaction
    );

    this.logger.log(`TransactionHash: ${transaction_hash}`);
    this.logger.log(`Explorer: ${this.toUrl(transaction_hash)}`);
    if (flags.silent) return;

    let retryCount = 10;
    while (retryCount > 0) {
      this.logger.log(`  Checking for changes (${retryCount})...`);
      const finalBalance = await getBalance();
      if (finalBalance !== startingBalance) {
        this.logger.log(`Ending Balance: ${finalBalance}`);
        this.logger.log(
          `${chalk.green(
            `${CHECK_ICON}Routine Account funded successfully:`,
            transaction_hash
          )}`
        );
        break;
      }
      await sleep(4000);
      --retryCount;
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to fund a routine account");
  }
}
