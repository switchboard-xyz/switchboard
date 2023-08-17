import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/evm.js";

export default class FunctionPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Print a function account";

  static examples = [
    "$ sb evm function print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    functionKey: Args.string({
      description: "address of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionPrint);

    const functionAccount = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    if (flags.json) {
      return this.normalizeAccountData(
        functionAccount.address,
        functionAccount.data
      );
    }

    this.prettyPrintFunction(functionAccount.address, functionAccount.data);
  }

  async catch(error: any) {
    super.catch(error, "failed to print a function account");
  }
}
