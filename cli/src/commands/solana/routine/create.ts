import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { isBase58 } from "@switchboard-xyz/common";
import {
  AttestationQueueAccount,
  FunctionAccount,
  FunctionRoutineAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionRoutineCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new routine account for a given function";

  static examples = [
    '$ sb solana routine create CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --name function-1 --fundAmount 1.25 --container switchboardlabs/basic-oracle-function --version solana --schedule "*/10 * * * * *" --params=xyz',
  ];

  static flags = {
    ...BaseCommand.flags,
    // Metadata
    name: Flags.string({
      char: "n",
      description: "name of the function for easier identification",
      default: "",
    }),
    metadata: Flags.string({
      description: "metadata of the function for easier identification",
      default: "",
    }),
    authority: Flags.string({
      char: "a",
      description:
        "keypair or public key to delegate authority to for managing the routine account",
    }),
    schedule: Flags.string({
      description: "cron schedule to execute the function routine on",
      required: true,
    }),
    parameters: Flags.string({
      description: "parameters to pass to the function",
      default: "",
      required: false,
      aliases: ["params"],
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionRoutineCreate);

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    const authority = await this.loadAuthority(flags.authority);

    // If the provided authority matches the function authority, then use the same SwitchboardWallet to simplify managing funds
    // We need the SbWallet authority to sign to approve new resources
    const sbWallet =
      this.payer.equals(authority.publicKey) &&
      functionState.authority.equals(authority.publicKey)
        ? await functionAccount.wallet
        : undefined;

    const [routineAccount, txn] =
      await FunctionRoutineAccount.createInstruction(
        this.program,
        this.payer,
        {
          name: flags.name ?? "",
          metadata: flags.metadata ?? "",
          schedule: flags.schedule,
          functionAccount,
          containerParams: Buffer.from(flags.parameters),
          authority: authority.publicKey,
        },
        sbWallet
      );

    const signature = await this.signAndSend(txn);

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
