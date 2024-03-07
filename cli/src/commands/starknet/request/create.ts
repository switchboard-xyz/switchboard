import { StarknetWithSignerBaseCommand } from "../../../starknet";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { FunctionAccount, RequestAccount } from "@switchboard-xyz/starknet.js";
import chalk from "chalk";
import { parseEther } from "ethers/lib/utils";

export default class RequestCreate extends StarknetWithSignerBaseCommand {
  static enableJsonFlag = true;

  static description = "create a new request account for a given function";

  static examples = [
    "$ sb starknet request create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name function-1 --fundAmount 0.25 --container switchboardlabs/basic-oracle-function --version latest",
  ];

  static flags = {
    ...StarknetWithSignerBaseCommand.flags,
    id: Flags.string({
      description: "an id to give the request",
      required: false,
    }),
    authorityId: Flags.string({
      char: "a",
      description:
        "address to delegate authority to for managing the request account",
      required: false,
    }),
    escrowId: Flags.string({
      description: "the address of the escrow that will fund this request",
      required: false,
    }),
    params: Flags.string({
      description:
        "a utf8 encoded params buffer to submit as arguments with the request",
      required: false,
      default: "",
    }),
    startAfter: Flags.integer({
      description: "a delay to add to your request triggers",
      default: 0,
      min: 0,
      required: false,
    }),
    initialFunding: Flags.string({
      required: false,
      description: "token amount to load into the request's escrow wallet.",
      default: "0.0",
    }),
  };

  static args = {
    functionId: Args.string({
      description: "id of the function to build a request for",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(RequestCreate);

    const payerAccount = await this.account;
    // Default the authority to the payer account.
    const authority = flags.authorityId ?? payerAccount.address;
    // Loading the function account ensures that it exists.
    const [functionAccount] = await FunctionAccount.load(
      this.program,
      args.functionId
    );

    const initialFunding = flags.initialFunding
      ? parseEther(flags.initialFunding).toBigInt()
      : undefined;
    if (initialFunding && initialFunding < 0) {
      throw new Error("amount to fund must be greater than 0");
    }

    const [requestAccount, tx_hash] = await RequestAccount.create(
      /* program= */ this.program,
      /* payer= */ this.account,
      /* params= */ {
        id: flags.id,
        authorityId: authority,
        functionId: functionAccount.address,
        params: Buffer.from(flags.params, "utf8"),
        startAfter: flags.startAfter,
        initialFunding: initialFunding,
        escrowId: flags.escrowId,
      }
    );

    this.logger.info(`Request create signature: ${tx_hash}`);
    this.logger.info(`Request id: ${requestAccount.address}`);
    if (flags.silent) return;

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Request Account created successfully:`,
        requestAccount.address
      )}`
    );
  }

  async catch(error: any) {
    super.catch(error, "failed to create a request account");
  }
}
