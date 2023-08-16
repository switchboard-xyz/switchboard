import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { isBase58, parseRawMrEnclave } from "@switchboard-xyz/common";
import {
  AttestationQueueAccount,
  FunctionAccount,
  SwitchboardProgram,
} from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { ethers } from "ethers";

export default class FunctionAddMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Add MrEnclave to a function account";

  static examples = [
    "$ sb evm function addMrEnclave 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --addMrEnclace 0xDEADBEEF --account ~/.arbitrum-kp.txt --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
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
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionAddMrEnclave);

    const mrEnclave = [...ethers.utils.arrayify(flags.mrEnclave)];

    const [functionAccount, fnData] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    // const txn = await functionAccount.addMrEnclave(mrEnclave);

    // if (flags.silent) {
    //   this.logger.info(`Function addMrEnclave signature: ${txn!.hash}`);
    //   return;
    // }

    // this.logger.log(
    //   `${chalk.green(
    //     `${CHECK_ICON}MrEnclave added to Function Account successfully:`,
    //     functionAccount.address
    //   )}`
    // );

    // this.logger.info(`Function addMrEnclave signature: ${txn!.hash}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to add mrEnclave to a function account");
  }
}
