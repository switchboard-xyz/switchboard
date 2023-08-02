import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

import { Args, Flags } from "@oclif/core";
import { OracleJob } from "@switchboard-xyz/common";
import type { TransactionObject } from "@switchboard-xyz/solana.js";
import { AggregatorAccount, JobAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class AggregatorAddJob extends BaseCommand {
  static description = "add jobs to an aggregator";

  static examples = ["$ sb solana aggregator add job"];

  static flags = {
    ...BaseCommand.flags,
    jobDefinition: Flags.string({
      description: "filesystem path of job json definition file",
      multiple: true,
    }),
    jobKey: Flags.string({
      description:
        "public key of an existing job account to add to an aggregator",
      multiple: true,
    }),
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
  };

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

    const txns: TransactionObject[] = [];

    const jobs: Array<{ jobAccount: JobAccount; weight?: number }> = [];

    // load existing jobs
    for await (const jobKey of flags?.jobKey ?? []) {
      const [jobAccount, job] = await this.loadJob(jobKey);
      jobs.push({ jobAccount });
    }

    // create new jobs
    for await (const jobDefinition of flags?.jobDefinition ?? []) {
      const oracleJob = this.loadJobDefinition(jobDefinition);
      const data = OracleJob.encodeDelimited(oracleJob).finish();
      const [jobAccount, jobInit] = JobAccount.createInstructions(
        this.program,
        this.payer,
        {
          data,
          weight: 1,
        }
      );
      txns.push(...jobInit);
      jobs.push({
        jobAccount,
      });
    }

    // add jobs to aggregator
    txns.push(
      ...jobs.map(({ jobAccount, weight }) =>
        aggregatorAccount.addJobInstruction(this.payer, {
          job: jobAccount,
          weight: weight ?? 1,
          authority,
        })
      )
    );

    const signatures = await this.signAndSendAll(txns);

    if (flags.json) {
      const accounts = await aggregatorAccount.toAccountsJSON();
      return this.normalizeAccountData(aggregatorAccount.publicKey, accounts);
    }

    if (this.silent) {
      this.logger.info(signatures.join("\n"));
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Job(s) successfully added to aggregator account`
      )}`
    );

    if (signatures.length === 1) {
      this.logger.info(this.toUrl(signatures[0]));
    } else {
      for (const [index, signature] of signatures.entries())
        this.logger.info(`Txn #${index}: ${this.toUrl(signature)}`);
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to add jobs to aggregator account");
  }
}
