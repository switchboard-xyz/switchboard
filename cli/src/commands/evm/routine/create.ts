import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import {
  AttestationQueueAccount,
  FunctionAccount,
  RoutineAccount,
} from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { ethers } from "ethers";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class RoutineCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new routine account for a given function";

  static examples = [
    '$ sb evm routine create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --fundAmount 0.25 --container "mgild/randomness" --version latest',
  ];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      description:
        "keypair or address to delegate authority to for managing the function account",
      required: false,
    }),
    fundAmount: Flags.string({
      required: false,
      description: "token amount to load into the function's escrow wallet.",
      default: "0.0",
    }),
    schedule: Flags.string({
      description:
        "the cron schedule to execute the function periodically (Ex. '15 * * * * *' will execute the function every 15 seconds)",
      required: false,
      default: "",
    }),
    params: Flags.string({
      required: false,
      description: "the parameters this routine should pass to the function",
      default: "",
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "address of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(RoutineCreate);

    let authority;
    if (flags.authority) {
      authority = flags.authority;
    } else {
      // TODO: looks wrong
      const authorityKeypair = await this.getAuthority(flags.authority);
      authority = await authorityKeypair.getAddress();
    }

    const fundAmount = flags.fundAmount ? Number(flags.fundAmount) : undefined;
    if (fundAmount && fundAmount < 0) {
      throw new Error("amount to fund must be greater than 0");
    }

    const functionAccount = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    // get all param sets - expect them in the format type:value separated by commas, and sets separated by semicolons
    // e.g. "uint256:1,string:hello;uint256:2,string:hello1"
    // - if there's no params - it'll be an empty array

    let params;
    if (flags.params) {
      // get the encoded params as an array
      const callParams = flags.params
        .split(",") // split by comma eg get ["uint256:1", "string:hello"]
        .map((param) => param.trim().split(":")); // split by colon eg get [["uint256", "1"], ["string", "hello"]]

      // get the marams as Array<type> and Array<value>
      const types = callParams.map(([type, _]) => type?.trim());
      const values = callParams.map(([_, value]) => value?.trim());

      // get Uint8Array of encoded params
      const paramSet = ethers.utils.arrayify(
        ethers.utils.defaultAbiCoder.encode(types, values)
      );

      params = Buffer.from(paramSet).toString("utf-8");
    } else {
      params = Buffer.from(ethers.utils.arrayify("0x")).toString("utf-8");
    }

    const [routineAccount, txn] = await RoutineAccount.create(this.program, {
      authority: authority!,
      schedule: flags.schedule,
      params,
      functionId: args.functionKey,
    });

    // const fundTxn =
    // fundAmount && fundAmount > 0
    // ? await (async () => {
    // await sleep(4000);
    // return await functionAccount.escrowFund(
    // ethers.utils.parseEther(fundAmount.toString())
    // );
    // })()
    // : undefined;

    this.logger.info(`Routine address: ${routineAccount.address}`);
    this.logger.info(`Routine create signature: ${txn!.hash}`);
    // if (fundTxn) {
    // this.logger.info(`Routine fund signature: ${fundTxn!.hash}`);
    // }
  }

  async catch(error: any) {
    super.catch(error, "failed to create a routine account");
  }
}
