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

enum FunctionStatus {
  NONE,
  ACTIVE,
  NON_EXECUTABLE,
  EXPIRED,
  OUT_OF_FUNDS,
  INVALID_PERMISSIONS,
}

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
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionPrint);

    const [functionAccount, fnData] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );
    const out: any = {};
    out.name = fnData[0];
    out.authority = fnData[1];
    out.enclaveId = fnData[2];
    out.queueId = fnData[3];
    out.balance = fnData[4].toString();
    out.status = FunctionStatus[fnData[5]];
    out.schedule = fnData.config[0];
    out.permittedCallers = fnData.config[1];
    out.containerRegistry = fnData.config[2];
    out.container = fnData.config[3];
    out.version = fnData.config[4];
    out.paramsSchema = fnData.config[5];
    out.mrEnclaves = fnData.config[6];
    out.consecutiveFailures = fnData.state[0].toString();
    out.lastExecutionTimestamp = fnData.state[1].toString();
    out.nextAllowedTimestamp = fnData.state[2].toString();
    out.lastExecutionGasCost = fnData.state[3].toString();
    out.triggeredSince = fnData.state[4].toString();
    out.triggerCount = fnData.state[5].toString();
    out.queueIdx = fnData.state[6].toString();
    out.triggered = fnData.state[7];

    this.logger.log(`${JSON.stringify(out, undefined, 4)}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to print a function account");
  }
}
