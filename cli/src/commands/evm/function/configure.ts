import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { ethers } from "ethers";

export default class FunctionConfigure extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Configure a function account";

  static examples = [
    "$ sb evm function fund 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --fundAmount 0.02 --account ~/.arbitrum-kp.txt --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
  ];

  static flags = {
    ...BaseCommand.flags,
    name: Flags.string({
      required: false,
      description: "update the name for the function",
      default: undefined,
    }),
    authority: Flags.string({
      required: false,
      description: "update the authority for the function",
      default: undefined,
    }),
    containerRegistry: Flags.string({
      required: false,
      description: "update the container registry for the function",
      default: undefined,
    }),
    container: Flags.string({
      required: false,
      description: "update the container for the function",
      default: undefined,
    }),
    version: Flags.string({
      required: false,
      description: "update the container version for the function",
      default: undefined,
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "address of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionConfigure);

    const fnAccount = new FunctionAccount(this.program, args.functionKey);

    const txn = await fnAccount.configure({
      name: flags.name,
      authority: flags.authority,
      containerRegistry: flags.containerRegistry,
      container: flags.container,
      version: flags.version,
      schedule: "",
    });

    if (flags.silent) {
      this.logger.info(`Function configure signature: ${txn!.hash}`);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function Account configured successfully:`,
        fnAccount.address
      )}`
    );

    this.logger.info(`Function configure signature: ${txn!.hash}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to configure a function account");
  }
}
