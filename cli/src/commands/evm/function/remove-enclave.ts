import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { ethers } from "ethers";

export default class FunctionRemoveMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Remove MrEnclave to a function account";

  static examples = [
    "$ sb evm function removeMrEnclave 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --removeMrEnclace 0xDEADBEEF --account ~/.arbitrum-kp.txt --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
  ];

  static flags = {
    ...BaseCommand.flags,
    mrEnclave: Flags.string({
      required: true,
      description: "The MrEnclave to remove",
      default: "",
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "address of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionRemoveMrEnclave);

    const mrEnclave = [...ethers.utils.arrayify(flags.mrEnclave)];

    const fnAccount = new FunctionAccount(this.program, args.functionKey);

    const txn = await fnAccount.removeMrEnclave(mrEnclave);

    if (flags.silent) {
      this.logger.info(`Function removeMrEnclave signature: ${txn!.hash}`);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}MrEnclave removeed to Function Account successfully:`,
        fnAccount.address
      )}`
    );

    this.logger.info(`Function removeMrEnclave signature: ${txn!.hash}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to remove mrEnclave to a function account");
  }
}
