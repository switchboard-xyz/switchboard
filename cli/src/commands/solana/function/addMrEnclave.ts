import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import {
  attestationTypes,
  FunctionAccount,
  SB_ATTESTATION_PID,
  TransactionObject,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

function parseMrEnclave(x: string): number[] {
  return [...Buffer.from(x.replace(/^0x/, ""), "hex")];
}

export default class FunctionAddMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Configure a solana funciton's mrEnclave settings";

  static flags = {
    ...BaseCommand.flags,
    mrEnclave: Flags.string({
      description: "set the mr enclave to add",
      required: true,
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionAddMrEnclave);

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );
    const mrEnclaves = functionState.mrEnclaves.filter((msr) =>
      msr.some((x) => x !== 0)
    );
    mrEnclaves.push(parseMrEnclave(flags.mrEnclave));
    const signature = await functionAccount.setConfig({
      mrEnclaves,
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
