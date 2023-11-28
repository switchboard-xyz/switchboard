import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { isBase58 } from "@switchboard-xyz/common";
import {
  FunctionAccount,
  FunctionRoutineAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionRoutineConfigure extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new routine account for a given function";

  static examples = [
    '$ sb solana routine create CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --name function-1 --fundAmount 1.25 --container switchboardlabs/basic-oracle-function --version solana --schedule "*/10 * * * * *" --params=xyz',
  ];

  static flags = {
    ...BaseCommand.flags,
    name: Flags.string({
      char: "n",
      description: "name of the function for easier identification",
      required: false,
    }),
    metadata: Flags.string({
      description: "metadata of the function for easier identification",
      required: false,
    }),
    authority: Flags.string({
      char: "a",
      description:
        "keypair or public key to delegate authority to for managing the function account",
    }),
    schedule: Flags.string({
      description: "cron schedule",
      required: false,
    }),
    parameters: Flags.string({
      description: "parameters to pass to the function",
      required: false,
      aliases: ["params"],
    }),
    appendParams: Flags.boolean({
      description: "append to current container parameters",
      required: false,
    }),
  };

  static args = {
    routineKey: Args.string({
      description: "public key of the routine account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionRoutineConfigure);

    let authority: PublicKey | undefined;
    if (flags.authority) {
      if (isBase58(flags.authority)) {
        authority = new PublicKey(flags.authority);
      } else {
        const authorityKeypair = await this.loadAuthority(flags.authority);
        authority = authorityKeypair.publicKey;
      }
    }

    const [routineAccount, routineState] = await FunctionRoutineAccount.load(
      this.program,
      args.routineKey
    );

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      routineState.function
    );

    const signature = await routineAccount.setConfig({
      name: flags.name,
      metadata: flags.metadata,
      schedule: flags.schedule,
      containerParams: flags.parameters,
      appendContainerParams: flags.appendParams,
    });
    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Routine Account created successfully:`,
        routineAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to create a routine account");
  }
}
