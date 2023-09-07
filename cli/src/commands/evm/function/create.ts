import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import {
  AttestationQueueAccount,
  FunctionAccount,
} from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { ethers } from "ethers";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class FunctionCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new function account for a given queue";

  static examples = [
    "$ sb evm function create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name function-1 --fundAmount 0.25 --container switchboardlabs/basic-oracle-function --version latest",
  ];

  static flags = {
    ...BaseCommand.flags,
    name: Flags.string({
      char: "n",
      description: "name of the function for easier identification",
      default: "",
      required: false,
    }),
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
    schedule: Flags.string({
      description:
        "the cron schedule to execute the function periodically (Ex. '15 * * * * *' will execute the function every 15 seconds)",
      required: false,
      default: "",
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
    mrEnclave: Flags.string({
      required: false,
      description:
        "the MrEnclave value to set for the function - if not provided, will be set automatically after its first run",
    }),
  };

  static args = {
    queueKey: Args.string({
      description: "address of the attestation queue account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionCreate);

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

    const attestationQueueAccount = await AttestationQueueAccount.load(
      this.program,
      args.queueKey
    );

    let containerRegistry: "dockerhub" | "ipfs" | undefined;
    if (flags.containerRegistry) {
      if (
        flags.containerRegistry !== "dockerhub" &&
        flags.containerRegistry !== "ipfs"
      ) {
        throw new Error(
          `--containerRegistry needs to be 'dockerhub' or 'ipfs'`
        );
      }
      containerRegistry = flags.containerRegistry;
    }

    const [functionAccount, txn] = await FunctionAccount.create(this.program, {
      name: flags.name,
      authority: authority!,
      schedule: flags.schedule,
      container: flags.container,
      containerRegistry: containerRegistry!,
      version: flags.version,
      // TODO: ADD MR NECLAVE ON INIT TO SDK
      // mrEnclave: parseRawMrEnclave(flags.mrEnclave ?? ""),
      attestationQueue: args.queueKey,
    });

    const fundTxn =
      fundAmount && fundAmount > 0
        ? await (async () => {
            await sleep(4000);
            return await functionAccount.escrowFund(
              ethers.utils.parseEther(fundAmount.toString())
            );
          })()
        : undefined;

    if (flags.silent) {
      this.logger.info(`Function create signature: ${txn!.hash}`);
      if (fundTxn) {
        this.logger.info(`Function fund signature: ${fundTxn!.hash}`);
      }

      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function Account created successfully:`,
        functionAccount.address
      )}`
    );

    this.logger.info(`Function create signature: ${txn!.hash}`);
    this.logger.info(`Function fund signature: ${fundTxn?.hash}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to create a function account");
  }
}
