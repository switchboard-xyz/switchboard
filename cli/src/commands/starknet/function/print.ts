import { StarknetWithoutSignerBaseCommand } from "../../../starknet";

import { Args } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/starknet.js";

export default class FunctionPrint extends StarknetWithoutSignerBaseCommand {
  static enableJsonFlag = true;

  static description = "Print an function's state";

  static examples = [
    "$ sb starknet function print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --network testnet",
  ];

  static flags = {
    ...StarknetWithoutSignerBaseCommand.flags,
  };

  static args = {
    functionId: Args.string({
      description: "id of the function",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionPrint);
    const functionAccount = new FunctionAccount(this.program, args.functionId);
    const data = await functionAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(functionAccount.address, data);
    }

    this.prettyPrintFunction(args.functionId, data);
  }

  async catch(error: any) {
    super.catch(error, "failed to print function");
  }
}
