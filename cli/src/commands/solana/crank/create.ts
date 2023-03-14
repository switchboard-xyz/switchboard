import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { QueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class CrankCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new crank account";

  static flags = {
    ...BaseCommand.flags,
    name: Flags.string({
      char: "n",
      description: "name of the crank for easier identification",
      default: "",
    }),
    metadata: Flags.string({
      description: "metadata of the crank for easier identification",
      default: "",
    }),
    size: Flags.integer({
      char: "s",
      required: true,
      description: "maximum number of rows a crank can support",
    }),
    crankKeypair: Flags.string({
      description:
        "keypair to use for the crank account. This will be the account's publicKey",
    }),
    dataBufferKeypair: Flags.string({
      description: "keypair to use for the crank data buffer account.",
    }),
  };

  static args = {
    queueKey: Args.string({
      description: "public key of the oracle queue to create a crank on",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(CrankCreate);

    if (flags.size <= 0) {
      throw new Error(`--size must be greater than 0`);
    }

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      args.queueKey
    );

    let crankKeypair: Keypair | undefined;
    if (flags.crankKeypair) {
      crankKeypair = await this.loadKeypair(flags.crankKeypair);
      await this.program.verifyNewKeypair(crankKeypair);
    }

    let dataBufferKeypair: Keypair | undefined;
    if (flags.dataBufferKeypair) {
      dataBufferKeypair = await this.loadKeypair(flags.dataBufferKeypair);
      await this.program.verifyNewKeypair(dataBufferKeypair);
    }

    const [crankAccount, txn] = await queueAccount.createCrankInstructions(
      this.payer,
      {
        name: flags.name,
        metadata: flags.metadata,
        maxRows: flags.size,
        keypair: crankKeypair,
        dataBufferKeypair: dataBufferKeypair,
      }
    );
    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    if (flags.json) {
      const accounts = await crankAccount.toAccountsJSON();
      return this.normalizeAccountData(crankAccount.publicKey, accounts);
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Crank created successfully`,
        crankAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to create a crank account");
  }
}
