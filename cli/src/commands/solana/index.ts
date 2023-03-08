/* eslint array-callback-return: 0 */

import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../solana";
import { chalkString, normalizeFilePath } from "../../utils";

import { Flags } from "@oclif/core";
import { AggregatorAccount, types } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import fs from "fs";
import path from "path";

function toArray<
  T extends
    | types.AggregatorAccountData
    | types.BufferRelayerAccountData
    | types.CrankAccountData
    | types.JobAccountData
    | types.LeaseAccountData
    | types.OracleAccountData
    | types.PermissionAccountData
    | types.SbState
    | types.OracleQueueAccountData
    | types.SlidingResultAccountData
    | types.VrfAccountData
>(map: Map<string, T>): Array<any> {
  return [...map.entries()].map(([pubkey, account]) => {
    return {
      publicKey: pubkey,
      ...account.toJSON(),
    };
  });
}

export default class Solana extends BaseCommand {
  // static enableJsonFlag = true; // string is too long
  static hidden = true;

  static description = "fetch the Switchboard program accounts on Solana";

  static flags = {
    ...BaseCommand.flags,
    outputFile: Flags.string({
      description: "file to save solana account definitions to",
      parse: async (rawPath) => normalizeFilePath(rawPath),
    }),
    feedDir: Flags.string({
      description: "directory to save feed definitions",
      parse: async (rawPath) => normalizeFilePath(rawPath),
    }),
  };

  async run() {
    const { args, flags } = await this.parse(Solana);

    if (flags.outputFile && this.verifyFileExists(flags.outputFile)) {
      throw new Error(`Existing file found at ${flags.outputFile}`);
    }

    const accounts = await this.program.getProgramAccounts();
    const accountsJson = {
      aggregators: toArray(accounts.aggregators),
      bufferRelayers: toArray(accounts.bufferRelayers),
      cranks: toArray(accounts.cranks),
      jobs: toArray(accounts.jobs),
      leases: toArray(accounts.leases),
      oracles: toArray(accounts.oracles),
      permissions: toArray(accounts.permissions),
      programState: toArray(accounts.programState),
      slidingResult: toArray(accounts.slidingResult),
      queues: toArray(accounts.queues),
      vrfs: toArray(accounts.vrfs),
    };

    // const escrowPubkeys = Array.from(accounts.leases.entries()).map(
    //   (l) => l[1].escrow
    // );
    // const escrowAccountInfos = await anchor.utils.rpc
    //   .getMultipleAccounts(this.program.connection, escrowPubkeys)
    //   .then((values) => {
    //     return values.reduce((map, leaseAccountInfo) => {
    //       if (leaseAccountInfo.account.data) {
    //         try {
    //           const account = spl.AccountLayout.decode(
    //             leaseAccountInfo.account.data
    //           );

    //         } catch (error) {}
    //       }
    //     }, new Map());
    //   });

    if (flags.feedDir) {
      if (fs.existsSync(flags.feedDir)) {
        throw new Error(`--feedDir already exists`);
      }

      const parsedAggregators = [...accounts.aggregators.entries()].map(
        ([aggregatorKey, aggregator]) => {
          const jobPubkeys = aggregator.jobPubkeysData.slice(
            0,
            aggregator.jobPubkeysSize
          );
          const jobs = jobPubkeys
            .map((jobKey) => {
              if (accounts.jobs.has(jobKey.toBase58())) {
                const job = accounts.jobs.get(jobKey.toBase58())!;
                const oracleJob = this.deserializeJobData(job.data!);
                return {
                  ...job.toJSON(),
                  ...oracleJob.toJSON(),
                };
              }
            })
            .filter(Boolean) as Array<any>;

          return {
            publicKey: aggregatorKey,
            ...aggregator,
            jobs,
          };
        }
      );

      fs.mkdirSync(flags.feedDir, { recursive: true });

      const goodAgg: Array<AggregatorAccount> = [];
      for (const aggregator of parsedAggregators) {
        const aggregatorJson = JSON.stringify(
          aggregator,
          this.jsonReplacers,
          2
        );
        if (aggregatorJson.toLowerCase().includes("raydium")) {
          goodAgg.push(
            new AggregatorAccount(this.program, aggregator.publicKey)
          );
        }
      }

      for await (const aggregatorAccount of goodAgg) {
        const aggPath = path.join(
          flags.feedDir,
          aggregatorAccount.publicKey.toBase58() + ".json"
        );
        // const aggregator = await aggregatorAccount.loadData();
        // const queueAccount = new QueueAccount(
        //   this.program,
        //   aggregator.queuePubkey
        // );
        // const queue = accounts.queues.get(queueAccount.publicKey.toBase58())!;

        try {
          const aggregatorJson = await aggregatorAccount.toAccountsJSON();

          if (aggregatorJson.lease.balance >= 0.1) {
            fs.writeFileSync(
              aggPath,
              JSON.stringify(aggregatorJson, this.jsonReplacers, 2)
            );
          }
        } catch {}
      }
    }

    if (flags.outputFile) {
      fs.writeFileSync(flags.outputFile, "");
      for (const key of Object.keys(accountsJson)) {
        if (key === "buffers") {
          continue;
        }

        fs.appendFileSync(
          flags.outputFile,
          JSON.stringify((accountsJson as any)[key])
        );
      }
    }

    if (flags.json) {
      return accountsJson;
    }

    const SPACING = 24;

    this.logger.info(
      chalk.underline(
        chalkString("## Switchboard", this.program.programId, SPACING)
      )
    );

    this.logger.info(
      chalkString("aggregators", accounts.aggregators.size, SPACING)
    );
    this.logger.info(chalkString("buffers", accounts.buffers.size, SPACING));
    this.logger.info(
      chalkString("bufferRelayers", accounts.bufferRelayers.size, SPACING)
    );
    this.logger.info(chalkString("cranks", accounts.cranks.size, SPACING));
    this.logger.info(chalkString("jobs", accounts.jobs.size, SPACING));
    this.logger.info(chalkString("leases", accounts.leases.size, SPACING));
    this.logger.info(chalkString("oracles", accounts.oracles.size, SPACING));
    this.logger.info(
      chalkString("permissions", accounts.permissions.size, SPACING)
    );
    this.logger.info(
      chalkString("programState", accounts.programState.size, SPACING)
    );
    this.logger.info(
      chalkString("slidingResult", accounts.slidingResult.size, SPACING)
    );
    this.logger.info(chalkString("queues", accounts.queues.size, SPACING));
    this.logger.info(chalkString("vrfs", accounts.vrfs.size, SPACING));
  }

  async catch(error: any) {
    super.catch(error, "failed to get switchboard accounts");
  }
}
