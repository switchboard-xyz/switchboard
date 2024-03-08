import { StarknetWithSignerBaseCommand } from "../../../starknet";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/starknet.js";
import chalk from "chalk";
import _ from "lodash";

export default class FunctionAddMrEnclave extends StarknetWithSignerBaseCommand {
  static enableJsonFlag = true;

  static aliases = ["starknet:function:addMrEnclave"];

  static description = "Configure a starknet function's mrEnclave settings";

  static flags = {
    ...StarknetWithSignerBaseCommand.flags,
    mrEnclave: Flags.string({
      description: "set the mr enclave to add",
      required: true,
      char: "e",
    }),
  };

  static args = {
    functionId: Args.string({
      description: "id of the function to build a request for",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionAddMrEnclave);

    const payerAccount = await this.account;
    // Loading the function account ensures that it exists.
    const [functionAccount] = await FunctionAccount.load(
      this.program,
      args.functionId
    );

    const mrEnclave = flags.mrEnclave;
    const transaction = functionAccount.addMrEnclaveTransaction(mrEnclave);
    const { transaction_hash } = await functionAccount.program.execute(
      payerAccount,
      transaction
    );
    this.logger.log(`TransactionHash: ${transaction_hash}`);
    this.logger.log(`Explorer: ${this.toUrl(transaction_hash)}`);
    if (flags.silent) return;

    const receipt = await functionAccount.program.waitForTransaction(
      transaction_hash
    );
    if (receipt.execution_status === "REVERTED") {
      throw new Error(`Transaction ${transaction_hash} failed`);
    }
    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}MrEnclave added successfully:`,
        transaction_hash
      )}`
    );
  }

  async catch(error: any) {
    super.catch(error, "failed to add mr enclave to function account");
  }
}
