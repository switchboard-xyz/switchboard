import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import {
  AttestationQueueAccount,
  FunctionAccount,
  RequestAccount,
} from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { ethers } from "ethers";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class RequestSend extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new function account for a given queue";

  static examples = [
    "$ sb evm function send F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --fundAmount 0.01 --params abc123",
  ];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "keypair or address to delegate authority to for managing the function account",
      required: false,
    }),
    fundAmount: Flags.string({
      required: false,
      description: "token amount to load into the function's escrow wallet.",
      default: "0.0",
    }),
    params: Flags.string({
      description: "The parameters to send in this request",
      required: false,
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
    const { args, flags } = await this.parse(RequestSend);

    let authority;
    if (flags.authority) {
      authority = flags.authority;
    } else {
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

    let params;
    if (flags.params) {
      // get the encoded params as an array
      const callParams = flags.params
        .split(",") // split by comma eg get ["uint256:1", "string:hello"]
        .map((param) => param.trim().split(":")); // split by colon eg get [["uint256", "1"], ["string", "hello"]]

      // get the marams as Array<type> and Array<value>
      const types = callParams.map(([type, _]) => type.trim());
      const values = callParams.map(([_, value]) => value.trim());

      // get Uint8Array of encoded params
      const paramSet = ethers.utils.arrayify(
        ethers.utils.defaultAbiCoder.encode(types, values)
      );

      params = Buffer.from(paramSet).toString("utf-8");
    } else {
      params = Buffer.from(ethers.utils.arrayify("0x")).toString("utf-8");
    }

    const [requestAccount, txn] = await RequestAccount.send(
      this.program,
      {
        functionId: args.functionKey,
        params,
      },
      { value: ethers.utils.parseEther(flags.fundAmount) }
    );

    this.logger.info(
      `Request account: ${requestAccount.address.toLowerCase()}`
    );
    this.logger.info(`Request send signature: ${txn!.hash}`);

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Request Account created successfully:`,
        requestAccount.address.toLowerCase()
      )}`
    );
  }

  async catch(error: any) {
    super.catch(error, "failed to create a request account");
  }
}
