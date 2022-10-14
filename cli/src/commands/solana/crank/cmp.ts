import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  CrankAccount,
  CrankRow,
  JobAccount,
} from "@switchboard-xyz/switchboard-v2";
import * as fs from "fs";
import * as anchor from "@project-serum/anchor";
import * as path from "path";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import chalk from "chalk";
import { pqSort } from "../../../utils/crank";
import { OracleJob } from "@switchboard-xyz/common";
import Big from "big.js";
import { toUtf8 } from "../../../utils";

export type ITaskMetrics = {
  [Property in keyof OracleJob.ITask]: number;
};

interface JobDefinition {
  publicKey: PublicKey;
  name: string;
  job: OracleJob;
  data: Buffer;
}
interface FeedDefinition {
  publicKey: PublicKey;
  name: string;
  aggregatorAccount: AggregatorAccount;
  jobs: JobDefinition[];
  latestResult: Big;
}

export default class CrankCmp extends BaseCommand {
  static description = "write the crank account definitions to a JSON file";

  static flags = {
    ...BaseCommand.flags,
    force: Flags.boolean({ description: "overwrite output file if exists" }),
    outputFile: Flags.string({
      char: "f",
      description: "output file to save aggregator pubkeys to",
      required: true,
    }),
  };

  static args = [
    {
      name: "crankKey1",
      description: "public key of the crank",
    },
    {
      name: "crankKey2",
      description: "public key of the crank",
    },
  ];

  async fetchCrankAccounts(crankKey: string): Promise<{
    account: CrankAccount;
    feeds: Map<string, FeedDefinition>;
    jobs: Map<string, JobDefinition>;
  }> {
    const coder = new anchor.BorshAccountsCoder(this.program.idl);

    const crankAccount = new CrankAccount({
      program: this.program,
      publicKey: new PublicKey(crankKey),
    });
    const crank = await crankAccount.loadData();
    const crankRows: CrankRow[] = crank.pqData;

    // get all feed account infos
    const feeds = await anchor.utils.rpc
      .getMultipleAccounts(
        this.program.provider.connection,
        crankRows.map((r) => r.pubkey)
      )
      .then(async (accounts) => {
        const result: FeedDefinition[] = await Promise.all(
          accounts.map(async (account, i) => {
            const aggregatorAccount = new AggregatorAccount({
              program: this.program,
              publicKey: account.publicKey,
            });
            const aggregator = coder.decode(
              "AggregatorAccountData",
              account.account.data
            );
            const latestResult = await aggregatorAccount.getLatestValue(
              aggregator
            );
            // const jobs = await aggregatorAccount.loadJobs(aggregator);

            const jobAccountDatas = await anchor.utils.rpc.getMultipleAccounts(
              this.program.provider.connection,
              aggregator.jobPubkeysData.slice(0, aggregator.jobPubkeysSize)
            );
            const jobs: {
              publicKey: PublicKey;
              name: string;
              job: OracleJob;
            }[] = jobAccountDatas.map((item) => {
              const decoded = coder.decode(
                JobAccount.accountName,
                item.account.data
              );
              return {
                publicKey: item.publicKey,
                name: toUtf8(decoded.name) ?? "",
                job: OracleJob.decodeDelimited(decoded.data),
                data: new Uint8Array(decoded.data),
              };
            });

            return {
              aggregatorAccount,
              ...aggregator,
              name: toUtf8(aggregator.name) ?? "",
              latestResult,
              jobs,
            };
          })
        );
        return result;
      });

    // build feed and job map
    const feedMap = new Map<string, FeedDefinition>(
      feeds.map((f) => [f.aggregatorAccount.publicKey.toBase58(), f])
    );
    const jobMap = new Map<string, JobDefinition>(
      feeds.flatMap((feed) => {
        const feedJobs = feed.jobs.map((job): [string, JobDefinition] => [
          job.publicKey.toBase58(),
          job,
        ]);
        return feedJobs;
      })
    );

    return { account: crankAccount, feeds: feedMap, jobs: jobMap };
  }

  async run() {
    const { args, flags } = await this.parse(CrankCmp);

    const outputFile = flags.outputFile
      ? flags.outputFile.startsWith("/") || flags.outputFile.startsWith("C:")
        ? flags.outputFile
        : path.join(process.cwd(), flags.outputFile)
      : undefined;
    if (outputFile && fs.existsSync(outputFile) && !flags.force) {
      throw new Error(
        `${outputFile} already exists, use the --force flag to overwrite`
      );
    }

    const crank1 = await this.fetchCrankAccounts(args.crankKey1);
    const feeds1 = Array.from([...crank1.feeds.values()]);
    const jobs1 = Array.from([...crank1.jobs.values()]);

    const crank2 = await this.fetchCrankAccounts(args.crankKey2);
    const feeds2 = Array.from([...crank2.feeds.values()]);
    const jobs2 = Array.from([...crank2.jobs.values()]);

    const metrics1: ITaskMetrics = {};
    for (const jobDef of jobs1) {
      for (const task of jobDef.job.tasks) {
        const taskType = OracleJob.Task.create(task).Task!;
        if (taskType in metrics1) {
          metrics1[taskType] = metrics1[taskType] + 1;
        } else {
          metrics1[taskType] = 0;
        }
      }
    }

    const metrics2: ITaskMetrics = {};
    for (const jobDef of jobs2) {
      for (const task of jobDef.job.tasks) {
        const taskType = OracleJob.Task.create(task).Task!;
        if (taskType in metrics2) {
          metrics2[taskType] = metrics2[taskType] + 1;
        } else {
          metrics2[taskType] = 0;
        }
      }
    }

    fs.writeFileSync(
      outputFile,
      JSON.stringify(
        {
          crank1: {
            tasks: metrics1,
            jobs: jobs1,
          },
          crank2: {
            tasks: metrics2,
            jobs: jobs2,
          },
        },
        this.jsonReplacers,
        2
      )
    );

    // const jobDiff: JobDefinition[] = [];
    // for (const job1 of jobs1) {
    //   let isFound = false;
    //   for (const job2 of jobs2) {
    //     if (
    //       Buffer.compare(
    //         new Uint8Array(job1.data),
    //         new Uint8Array(job2.data)
    //       ) === 0
    //     ) {
    //       console.log(`Found a match, [${job1.data}] & [${job2.data}]`);
    //       isFound = true;
    //       break;
    //     }
    //   }
    //   if (isFound === false) {
    //     jobDiff.push(job1);
    //   }
    // }

    // fs.writeFileSync(
    //   outputFile,
    //   JSON.stringify(
    //     {
    //       diff: jobDiff,
    //       job1: jobs1,
    //       job2: jobs2,
    //     },
    //     this.jsonReplacers,
    //     2
    //   )
    // );
  }

  async catch(error) {
    super.catch(error, "failed to compare cranks");
  }
}
