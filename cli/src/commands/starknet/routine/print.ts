import { StarknetWithoutSignerBaseCommand } from "../../../starknet";

import { Args } from "@oclif/core";
import { RoutineAccount } from "@switchboard-xyz/starknet.js";

export default class RoutinePrint extends StarknetWithoutSignerBaseCommand {
  static enableJsonFlag = true;

  static description = "Print a routine's state";

  static examples = [
    "$ sb starknet routine print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --network testnet",
  ];

  static flags = {
    ...StarknetWithoutSignerBaseCommand.flags,
  };

  static args = {
    routineId: Args.string({
      description: "id of the routine",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(RoutinePrint);
    const routineAccount = new RoutineAccount(this.program, args.routineId);
    const data = await routineAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(routineAccount.address, data);
    }

    this.prettyPrintRoutine(args.routineId, data);
  }

  async catch(error: any) {
    super.catch(error, "failed to print routine");
  }
}
