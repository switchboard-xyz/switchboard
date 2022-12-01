import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { JobAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorRemoveJob extends BaseCommand {
  static description = "remove a switchboard job account from an aggregator";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
    },
    {
      name: "jobKey",
      description:
        "public key of an existing job account to remove from an aggregator",
    },
  ];

  static examples = ["$ sbv2 aggregator:remove:job"];

  async run() {
    const { args, flags } = await this.parse(AggregatorRemoveJob);

    if (!args.aggregatorKey) {
      throw new Error("aggregatorKey argument not provided.");
    }
    const [aggregatorAccount, aggregator] = await this.loadAggregator(
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
    const txn = await aggregatorAccount.removeJob({
      job: jobAccount,
      jobIdx: jobIndex,
      authority,
    });

    if (this.silent) {
      console.log(txn);
    } else {
      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}Job succesfully removed from aggregator account\r\n`
        )}`
      );
      this.logger.log(this.toUrl(txn));
    }
  }

  async catch(error) {
    super.catch(error, "failed to remove job to aggregator account");
  }
}
