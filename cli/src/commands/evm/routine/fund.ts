import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import {
  AttestationQueueAccount,
  FunctionAccount,
  RoutineAccount,
} from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { ethers } from "ethers";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class RoutineFund extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new routine account for a given function";

  static examples = [
    "$ sb evm routine fund F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --fundAmount 0.25",
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
    routineKey: Args.string({
      description: "address of the routine account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(RoutineFund);

    let authority;
    if (flags.authority) {
      authority = flags.authority;
    } else {
      // TODO: looks wrong
      const authorityKeypair = await this.getAuthority(flags.authority);
      authority = await authorityKeypair.getAddress();
    }

    const fundAmount = Number(flags.fundAmount);
    if (fundAmount && fundAmount < 0) {
      throw new Error("amount to fund must be greater than 0");
    }

    const routineAccount = await RoutineAccount.load(
      this.program,
      args.routineKey
    );

    const fundTxn = await routineAccount.escrowFund(
      ethers.utils.parseEther(fundAmount!.toString())
    );

    this.logger.info(`Routine fund signature: ${fundTxn!.hash}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to fund a routine account");
  }
}
