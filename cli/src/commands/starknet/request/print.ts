import { StarknetWithoutSignerBaseCommand } from "../../../starknet";

import { Args } from "@oclif/core";
import { RequestAccount } from "@switchboard-xyz/starknet.js";

export default class RequestPrint extends StarknetWithoutSignerBaseCommand {
  static enableJsonFlag = true;

  static description = "Print a request's state";

  static examples = [
    "$ sb starknet request print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --network testnet",
  ];

  static flags = {
    ...StarknetWithoutSignerBaseCommand.flags,
  };

  static args = {
    requestId: Args.string({
      description: "id of the request",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(RequestPrint);
    const requestAccount = new RequestAccount(this.program, args.requestId);
    const data = await requestAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(requestAccount.address, data);
    }

    this.prettyPrintRequest(args.requestId, data);
  }

  async catch(error: any) {
    super.catch(error, "failed to print request");
  }
}
