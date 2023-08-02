import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { AggregatorAccount, JobAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class AggregatorRemoveJob extends BaseCommand {
  static description = "remove a switchboard job account from an aggregator";

  // static examples = ["$ sb solana aggregator remove job"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
    jobKey: Args.string({
      description:
        "public key of an existing job account to remove from an aggregator",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorRemoveJob);

    if (!args.aggregatorKey) {
      throw new Error("aggregatorKey argument not provided.");
    }

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const jobAccount = new JobAccount(this.program, new PublicKey(args.jobKey));
    const jobIndex = aggregator.jobPubkeysData.findIndex((pubkey) =>
      pubkey.equals(jobAccount.publicKey)
    );
    if (jobIndex < 0) {
      throw new Error(
        `The specified job (${jobAccount.publicKey.toBase58()}) couldn't be located in this aggregator.`
      );
    }

    const txn = await aggregatorAccount.removeJobInstruction(this.payer, {
      job: jobAccount,
      jobIdx: jobIndex,
      authority,
    });
    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Job succesfully removed from aggregator account\r\n`
      )}`
    );

    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to remove job to aggregator account");
  }
}
