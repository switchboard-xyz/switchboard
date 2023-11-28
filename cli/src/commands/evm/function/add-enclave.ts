import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { ethers } from "ethers";

export default class FunctionAddMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Add MrEnclave to a function account";

  static examples = [
    "sb evm function add-enclave $FUNCTION_ID --chain arbitrum --network testnet --mrEnclave $MEASUREMENT --account ../.kp.txt --programId $SWITCHBOARD_ADDRESS",
  ];

  static flags = {
    ...BaseCommand.flags,
    mrEnclave: Flags.string({
      required: true,
      description: "The MrEnclave to add",
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
    const { args, flags } = await this.parse(FunctionAddMrEnclave);

    const mrEnclave = [...ethers.utils.arrayify(flags.mrEnclave)];

    const fnAccount = new FunctionAccount(this.program, args.functionKey);

    const txn = await fnAccount.addMrEnclave(mrEnclave);

    if (flags.silent) {
      this.logger.info(`Function addMrEnclave signature: ${txn!.hash}`);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}MrEnclave added to Function Account successfully:`,
        fnAccount.address
      )}`
    );

    this.logger.info(`Function addMrEnclave signature: ${txn!.hash}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to add mrEnclave to a function account");
  }
}
