import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { parseMrEnclave } from "@switchboard-xyz/common";
import { FunctionAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionRmMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Configure a solana funciton's mrEnclave settings";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "keypair or public key to delegate authority to for managing the function account",
    }),
    mrEnclave: Flags.string({
      char: "e",
      description: "set the mr enclave to remove",
      required: true,
      multiple: true,
    }),
    all: Flags.boolean({
      exclusive: ["mrEnclave"],
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionRmMrEnclave);

    const mrEnclavesToRemove = (flags.mrEnclave ?? []).map((e) => [
      ...parseMrEnclave(e),
    ]);
    if (mrEnclavesToRemove.length === 0 && !flags.all) {
      throw new Error(`Failed to find any MrEnclaves to remove`);
    }

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      functionState.authority
    );

    if (flags.all) {
      const txn = await functionAccount.setConfigInstruction(this.payer, {
        authority,
        mrEnclaves: [],
      });
      const signature = await this.signAndSend(txn);
      if (flags.silent) {
        this.logger.info(signature);
        return;
      }

      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}All MrEnclaves removed from Function Account successfully: ${chalk.reset(
            signature
          )}`
        )}`
      );

      this.logger.info(this.toUrl(signature));
      return;
    }

    const fnMrEnclaves: Array<number[]> = functionState.mrEnclaves.filter(
      (arr) => !arr.every((num) => num === 0)
    );

    if (fnMrEnclaves.length === 0) {
      throw new Error(`Function has not been initialized with any mrEnclaves`);
    }

    const parsedFnMrEnclaves: Array<number[]> = [];
    for (const fnEnclave of fnMrEnclaves) {
      if (FunctionAccount.hasMrEnclave(mrEnclavesToRemove, fnEnclave)) {
        continue;
      }
      parsedFnMrEnclaves.push(fnEnclave);
    }

    if (fnMrEnclaves.length === parsedFnMrEnclaves.length) {
      throw new Error(`Function has no mrEnclaves to remove`);
    }

    const txn = await functionAccount.setConfigInstruction(this.payer, {
      authority,
      mrEnclaves: parsedFnMrEnclaves,
    });
    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function Account configured successfully: ${chalk.reset(
          signature
        )}`
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to remove mr enclave from function account");
  }
}
