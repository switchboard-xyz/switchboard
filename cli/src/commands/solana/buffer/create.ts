import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils/icons";

import { Args, Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { OracleJob } from "@switchboard-xyz/common";
import {
  JobAccount,
  JobInitParams,
  QueueAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class BufferCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a buffer relayer account";

  static flags = {
    ...BaseCommand.flags,
    bufferKeypair: Flags.string({
      description:
        "keypair to use for the buffer relayer account. This will be the account's publicKey",
    }),
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that will be the buffer relayer authority",
    }),
    name: Flags.string({
      char: "n",
      description: "name of the buffer account",
    }),
    minUpdateDelaySeconds: Flags.integer({
      description: "minimum number of seconds between update calls",
      default: 30,
    }),
    jobDefinition: Flags.string({
      description: "filesystem path to job definition",
      exclusive: ["jobKey"],
    }),
    jobKey: Flags.string({
      description: "public key of existing job account",
      exclusive: ["jobDefinition"],
    }),
  };

  static args = {
    queueKey: Args.string({
      description: "public key of the oracle queue account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(BufferCreate);

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      args.queueKey
    );

    const authority = await this.loadAuthority(flags.authority);

    const bufferKeypair = flags.bufferKeypair
      ? await this.loadKeypair(flags.bufferKeypair)
      : Keypair.generate();

    let job: JobAccount | Omit<JobInitParams, "weight"> | undefined;
    if (flags.jobDefinition) {
      const oracleJob = this.loadJobDefinition(flags.jobDefinition);
      job = {
        name: flags.name ?? "",
        data: OracleJob.encodeDelimited(oracleJob).finish(),
      };
    } else if (flags.jobKey) {
      const [jobAccount] = await JobAccount.load(this.program, flags.jobKey);
      job = jobAccount;
    }

    if (!job) {
      throw new Error(`Must provide --jobDefinition or --jobKey`);
    }

    const [bufferRelayerAccount, txn] =
      await queueAccount.createBufferRelayerInstructions(this.payer, {
        name: flags.name ?? "",
        minUpdateDelaySeconds: flags.minUpdateDelaySeconds,
        authority: authority.publicKey,
        keypair: bufferKeypair,
        job,
      });

    const signature = await this.signAndSend(txn);

    if (flags.json) {
      const accounts = await bufferRelayerAccount.toAccountsJSON();
      return this.normalizeAccountData(
        bufferRelayerAccount.publicKey,
        accounts
      );
    }

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    // handle nicer logging here
    this.logger.info(
      `${chalk.green(CHECK_ICON, "successfully created a buffer relayer")} - ${
        queueAccount.publicKey
      }`
    );

    this.logger.info(`Transaction Signature: ${this.toUrl(signature)}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to create buffer relayer account");
  }
}
