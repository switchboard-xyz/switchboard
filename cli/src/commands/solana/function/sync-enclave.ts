import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { buf2String } from "@switchboard-xyz/common";
import { getMrEnclave } from "@switchboard-xyz/function-simulator";
import { FunctionAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionSyncMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description =
    "Fetch the MrEnclave value for your function and add if neccessary, add it to the function config";

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
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionSyncMrEnclave);

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );
    const authority = await this.loadAuthority(
      flags.authority,
      functionState.authority
    );

    // TODO: display a warning if the function account is out of funds or has a bad status

    const container: string = buf2String(functionState.container).trim();
    const containerRegistry: string = buf2String(
      functionState.containerRegistry
    ).trim();
    const version: string =
      buf2String(functionState.version).trim() ?? "latest";

    this.log(
      `Fetching MrEnclave for ${container}:${
        version ?? "latest"
      } in registry dockerhub`
    );

    const mrEnclave = await getMrEnclave(container, version, containerRegistry);

    this.logger.info(`MRENCLAVE: ${mrEnclave}`);

    const mrEnclaveBuffer = Buffer.from(
      mrEnclave.startsWith("0x") ? mrEnclave.slice(2) : mrEnclave,
      "hex"
    );

    const fnMrEnclaves: Array<number[]> = functionState.mrEnclaves.filter(
      (arr) => !arr.every((num) => num === 0)
    );

    if (FunctionAccount.hasMrEnclave(fnMrEnclaves, mrEnclaveBuffer)) {
      this.logger.info(
        `${CHECK_ICON}Function already has MrEnclave in its config - No action needed`
      );
      return;
    }

    if (fnMrEnclaves.length === 32 && !flags.force) {
      this.logger.error(
        `Function already has 32 enclaves in its config - use --force to remove one`
      );
      return;
    }

    const txn = await functionAccount.addMrEnclaveInstruction(
      this.payer,
      mrEnclaveBuffer,
      { authority, force: flags.force, functionState: functionState }
    );

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Added MrEnclave value to function config successfully`,
        signature
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to configure function account");
  }
}
