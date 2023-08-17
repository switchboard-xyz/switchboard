import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { ethers } from "ethers";

export default class FunctionFund extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Fund a function account";

  static examples = [
    "$ sb evm function fund 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --fundAmount 0.02 --account ~/.arbitrum-kp.txt --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
  ];

  static flags = {
    ...BaseCommand.flags,
    fundAmount: Flags.string({
      required: false,
      description: "token amount to load into the function's escrow wallet.",
      default: "0.0",
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "address of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionFund);

    const fundAmount = flags.fundAmount ? Number(flags.fundAmount) : undefined;
    if (fundAmount && fundAmount < 0) {
      throw new Error("amount to fund must be greater than 0");
    }

    const myFunction = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    const fundTxn =
      fundAmount && fundAmount > 0
        ? await myFunction.escrowFund(
            ethers.utils.parseEther(fundAmount.toString())
          )
        : undefined;

    if (flags.silent) {
      this.logger.info(`Function fund signature: ${fundTxn!.hash}`);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function Account funded successfully:`,
        myFunction.address
      )}`
    );

    this.logger.info(`Function fund signature: ${fundTxn!.hash}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to fund a function account");
  }
}
