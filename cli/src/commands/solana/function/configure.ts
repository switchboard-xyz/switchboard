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

function stringToBool(s: string | undefined): boolean | undefined {
  if (s === undefined) {
    return undefined;
  }
  if (s === "true" || s === "1") {
    return true;
  }
  return false;
}

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
    requestsDisabled: Flags.string({
      description: "set whether requests can be made on this function",
      default: undefined,
    }),
    requestsDevFee: Flags.integer({
      description:
        "set the extra developer fee charged when a users calls a reqeusts on this function",
      default: undefined,
    }),
    requestsRequireAuthorization: Flags.string({
      description: "set whether anyone can make requests on this function",
      default: undefined,
    }),
    routinesDisabled: Flags.string({
      description: "set whether routines can be made on this function",
      default: undefined,
    }),
    routinesRequireAuthorization: Flags.string({
      description: "set whether anyone can make routines on this function",
      default: undefined,
    }),
    routinesDevFee: Flags.integer({
      description:
        "set the extra developer fee charged when a users calls a reqeusts on this function",
      default: undefined,
    }),
    authority: Flags.string({
      char: "a",
      description:
        "keypair or public key to delegate authority to for managing the function account",
    }),
    enableServices: Flags.boolean({
      description: "set whether services can be made for this function",
      default: undefined,
    }),
    servicesRotationInterval: Flags.integer({
      description: "",
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

    const authority = await this.loadAuthority(
      flags.authority,
      functionState.authority
    );

    let servicesDisabled: boolean | undefined;
    if (flags.enableServices !== undefined && flags.enableServices) {
      servicesDisabled = false;
    }

    const txn = await functionAccount.setConfigInstruction(this.payer, {
      name: flags.name,
      metadata: flags.metadata,
      container: flags.container,
      containerRegistry: flags.containerRegistry as ContainerRegistryType,
      version: flags.version,
      requestsDisabled: stringToBool(flags.requestsDisabled),
      requestsFee: flags.requestsDevFee,
      requestsRequireAuthorization: stringToBool(
        flags.requestsRequireAuthorization
      ),
      routinesDisabled: stringToBool(flags.routinesDisabled),
      routinesFee: flags.routinesDevFee,
      routinesRequireAuthorization: stringToBool(
        flags.routinesRequireAuthorization
      ),

      servicesDisabled: servicesDisabled,
      servicesSignerRotationInterval: flags.servicesRotationInterval,

      authority: authority,
    });
    const signature = await this.signAndSend(txn);

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
