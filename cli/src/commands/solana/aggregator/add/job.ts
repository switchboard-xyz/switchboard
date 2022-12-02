import { Flags } from "@oclif/core";
import { OracleJob } from "@switchboard-xyz/common";
import { AggregatorAccount, JobAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorAddJob extends BaseCommand {
  static description = "add a job to an aggregator";

  static examples = ["$ sbv2 solana aggregator add job"];

  static flags = {
    ...BaseCommand.flags,
    jobDefinition: Flags.string({
      description: "filesystem path of job json definition file",
      exactlyOne: ["jobKey", "jobDefinition"],
    }),
    jobKey: Flags.string({
      description:
        "public key of an existing job account to add to an aggregator",
      exactlyOne: ["jobKey", "jobDefinition"],
    }),
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorAddJob);

    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregatorData.authority
    );

    const jobAccount: JobAccount = flags.jobDefinition
      ? // Create a new job from a json file to add to this aggregator
        await (async () => {
          const data = Buffer.from(
            OracleJob.encodeDelimited(
              this.loadJobDefinition(flags.jobDefinition)
            ).finish()
          );

          return (
            await JobAccount.create(this.program, {
              data,
              authority: authority.publicKey,
            })
          )[0];
        })()
      : // Add job by pubkey from an existing job account.
        (await this.loadJob(flags.jobKey))[0];

    const txn = await aggregatorAccount.addJob({
      job: jobAccount,
      weight: 1,
      authority,
    });

    if (this.silent) {
      this.log(txn);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Job successfully added to aggregator account`
      )}`
    );
    this.logger.log(this.toUrl(txn));
  }

  async catch(error) {
    super.catch(error, "failed to add job to aggregator account");
  }
}
