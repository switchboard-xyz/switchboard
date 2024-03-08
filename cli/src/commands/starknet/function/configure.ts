import { StarknetWithSignerBaseCommand } from "../../../starknet";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import type { ContainerRegistryType } from "@switchboard-xyz/starknet.js";
import {
  AttestationQueueAccount,
  FunctionAccount,
} from "@switchboard-xyz/starknet.js";
import chalk from "chalk";

export default class FunctionCreate extends StarknetWithSignerBaseCommand {
  static enableJsonFlag = true;

  static description = "Configure a starknet function's settings";

  static examples = [
    "$ sb starknet function configure F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name function-1 --fundAmount 0.25 --container switchboardlabs/basic-oracle-function --version latest",
  ];

  static flags = {
    ...StarknetWithSignerBaseCommand.flags,
    name: Flags.string({
      description: "set the function name",
      required: false,
    }),
    authorityId: Flags.string({
      description:
        "address to delegate authority to for managing the function account",
      required: false,
    }),
    container: Flags.string({
      description:
        "the location of the container (Ex. switchboardlabs/basic-oracle-function)",
      required: false,
    }),
    containerRegistry: Flags.string({
      description:
        "the registry to pull the container from (Ex. Docker or IPFS)",
      options: ["dockerhub", "ipfs"],
      default: "dockerhub",
      required: false,
    }),
    version: Flags.string({
      description:
        "the version of the container to pull from the registry (Ex. 'latest' or 'mainnet')",
      required: false,
    }),
  };

  static args = {
    functionId: Args.string({
      description: "id of the function to configure",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionCreate);

    const payerAccount = await this.account;
    // Default the authority to the payer account.
    const authority = flags.authority ?? payerAccount.address;
    // Loading the function account ensures that it exists.
    const [functionAccount] = await FunctionAccount.load(
      this.program,
      args.functionId
    );

    const transaction = await functionAccount.updateTransaction({
      name: flags.name,
      authorityId: flags.authorityId,
      containerRegistry: flags.containerRegistry as ContainerRegistryType,
      container: flags.container,
      version: flags.version,
    });
    const { transaction_hash } = await functionAccount.program.execute(
      payerAccount,
      transaction
    );
    this.logger.log(`TransactionHash: ${transaction_hash}`);
    this.logger.log(`Explorer: ${this.toUrl(transaction_hash)}`);
    if (flags.silent) return;

    const receipt = await functionAccount.program.waitForTransaction(
      transaction_hash
    );
    if (receipt.execution_status === "REVERTED") {
      throw new Error(`Transaction ${transaction_hash} failed`);
    }
    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function configured successfully:`,
        transaction_hash
      )}`
    );
  }

  async catch(error: any) {
    super.catch(error, "failed to create a function account");
  }
}
