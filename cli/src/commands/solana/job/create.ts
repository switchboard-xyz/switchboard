import { Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { OracleJob } from "@switchboard-xyz/common";
import { JobAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils/icons";
import chalk from "chalk";

export default class BufferCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a job account";

  static flags = {
    ...BaseCommand.flags,
    jobKeypair: Flags.string({
      description:
        "keypair to use for the job account. This will be the account's publicKey",
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
    jobDefinition: Flags.string({
      description: "filesystem path to job definition",
      required: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(BufferCreate);

    const authority = await this.loadAuthority(flags.authority);

    const jobKeypair = flags.jobKeypair
      ? await this.loadKeypair(flags.jobKeypair)
      : Keypair.generate();

    const jobDefinition = this.loadJobDefinition(flags.jobDefinition);

    const [jobAccount, txn] = JobAccount.createInstructions(
      this.program,
      this.payer,
      {
        name: flags.name ?? "",
        authority: authority,
        data: OracleJob.encodeDelimited(jobDefinition).finish(),
        keypair: jobKeypair,
      }
    );

    const signatures = await this.signAndSendAll(txn);

    if (flags.json) {
      const accounts = await jobAccount.toAccountsJSON();
      return this.normalizeAccountData(jobAccount.publicKey, accounts);
    }

    if (this.silent) {
      this.logger.info(signatures.join("\n"));
      return;
    }

    // handle nicer logging here
    this.logger.info(
      `${chalk.green(CHECK_ICON, "successfully created a job")} - ${
        jobAccount.publicKey
      }`
    );

    if (signatures.length === 1) {
      this.logger.info(this.toUrl(signatures[0]));
    } else {
      for (const [index, signature] of signatures.entries())
        this.logger.info(`Txn #${index}: ${this.toUrl(signature)}`);
    }
  }

  async catch(error) {
    super.catch(error, "failed to create job account");
  }
}
