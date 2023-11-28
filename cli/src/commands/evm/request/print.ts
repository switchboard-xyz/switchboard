import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args } from "@oclif/core";
import { RequestAccount } from "@switchboard-xyz/evm.js";

export default class RequestPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Print a function request";

  static examples = [
    "$ sb evm request print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    requestKey: Args.string({
      description: "address of the request account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(RequestPrint);

    const requestAccount = new RequestAccount(this.program, args.requestKey);
    const data = await requestAccount.loadData();

    this.prettyPrintRequest(requestAccount.address, data);
  }

  async catch(error: any) {
    super.catch(error, "failed to print a request account");
  }
}
