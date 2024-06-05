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

  static description = "create a new function account for a given queue";

  static examples = [
    "$ sb starknet function create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name function-1 --fundAmount 0.25 --container switchboardlabs/basic-oracle-function --version latest",
  ];

  static flags = {
    ...StarknetWithSignerBaseCommand.flags,
    name: Flags.string({
      char: "n",
      description: "name of the function for easier identification",
      default: "",
      required: false,
    }),
    authority: Flags.string({
      char: "a",
      description:
        "address to delegate authority to for managing the function account",
      required: false,
    }),
    container: Flags.string({
      description:
        "the location of the container (Ex. switchboardlabs/basic-oracle-function)",
      required: true,
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
      default: "latest",
      required: false,
    }),
  };

  static args = {
    attestationQueueId: Args.string({
      description: "id of the attestation queue",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionCreate);

    const payerAccount = await this.account;
    // Default the authority to the payer account.
    const authority = flags.authority ?? payerAccount.address;
    // Loading the attestation queue account ensures that it exists.
    const [attestationQueueAccount] = await AttestationQueueAccount.load(
      this.program,
      args.attestationQueueId
    );

    const [functionAccount, tx_hash] = await FunctionAccount.create(
      /* program= */ this.program,
      /* payer= */ this.account,
      /* params= */ {
        name: flags.name,
        authorityId: authority,
        attestationQueueId: attestationQueueAccount.address,
        container: flags.container,
        containerRegistry: flags.containerRegistry as ContainerRegistryType,
        version: flags.version,
      }
    );

    this.logger.info(`Function create signature: ${tx_hash}`);
    this.logger.info(`Function id: ${functionAccount.address}`);
    if (flags.silent) return;

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function Account created successfully:`,
        functionAccount.address
      )}`
    );
  }

  async catch(error: any) {
    super.catch(error, "failed to create a function account");
  }
}
