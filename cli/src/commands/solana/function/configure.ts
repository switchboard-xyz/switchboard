import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import type { ContainerRegistryType } from "@switchboard-xyz/solana.js";
import {
  attestationTypes,
  FunctionAccount,
  SB_ATTESTATION_PID,
  TransactionObject,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionConfigure extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Configure a solana funciton's settings";

  static flags = {
    ...BaseCommand.flags,
    name: Flags.string({
      description: "set the function name",
      default: undefined,
    }),
    metadata: Flags.string({
      description: "set the function metadata",
      default: undefined,
    }),
    container: Flags.string({
      description: "set the function container",
      default: undefined,
    }),
    containerRegistry: Flags.string({
      description: "set the function containerRegistry",
      default: undefined,
    }),
    version: Flags.string({
      description: "set the function version",
      default: undefined,
    }),
    schedule: Flags.string({
      description: "set the function schedule",
      default: undefined,
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionConfigure);

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );
    const signature = await functionAccount.setConfig({
      name: flags.name,
      metadata: flags.metadata,
      container: flags.container,
      containerRegistry: flags.containerRegistry as ContainerRegistryType,
      version: flags.version,
      schedule: flags.schedule,
    });

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function Account configured successfully:`,
        signature
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to configure function account");
  }
}
