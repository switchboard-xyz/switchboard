import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args } from "@oclif/core";
import { RoutineAccount } from "@switchboard-xyz/evm.js";

export default class RoutinePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Print a function routine";

  static examples = [
    "$ sb evm routine print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    routineKey: Args.string({
      description: "address of the routine account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(RoutinePrint);

    const routineAccount = new RoutineAccount(this.program, args.routineKey);
    const data = await routineAccount.loadData();

    // if (flags.json) {
    // return this.normalizeAccountData(
    // routineAccount.address,
    // routineAccount.data
    // );
    // }

    this.prettyPrintRoutine(routineAccount.address, data);
  }

  async catch(error: any) {
    super.catch(error, "failed to print a routine account");
  }
}
