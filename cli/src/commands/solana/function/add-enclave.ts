import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { combineMrEnclaveSets, parseMrEnclave } from "@switchboard-xyz/common";
import { FunctionAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionAddMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static aliases = ["solana:function:addMrEnclave"];

  static description = "Configure a solana funciton's mrEnclave settings";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "keypair or public key to delegate authority to for managing the function account",
    }),
    force: Flags.boolean({
      description:
        "remove an enclave if the function's config has the maximum number of enclaves (32) already present",
    }),
    mrEnclave: Flags.string({
      description: "set the mr enclave to add",
      required: true,
      char: "e",
      multiple: true,
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

    const mrEnclavesToAdd = (flags.mrEnclave ?? []).map((e) => [
      ...parseMrEnclave(e),
    ]);

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      functionState.authority
    );

    let updatedMrEnclaves = combineMrEnclaveSets(
      functionState.mrEnclaves,
      mrEnclavesToAdd
    );

    if (updatedMrEnclaves.length > 32) {
      if (!flags.force) {
        this.logger.error(
          `Function already has 32 enclaves in its config - use --force to remove one`
        );
        return;
      }
      updatedMrEnclaves = updatedMrEnclaves.slice(
        0,
        Math.abs(updatedMrEnclaves.length - 32)
      );
    }

    const txn = await functionAccount.setConfigInstruction(this.payer, {
      authority,
      mrEnclaves: updatedMrEnclaves,
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
    super.catch(error, "failed to add mr enclave to function account");
  }
}
