import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import {
  AggregatorAccount,
  isTxnSuccessful,
  PermissionAccount,
  QueueAccount,
  SwitchboardDecimal,
} from "@switchboard-xyz/near.js";
import Big from "big.js";
import { OracleJob } from "@switchboard-xyz/common";
import { Action } from "near-api-js/lib/transaction";
import fs from "fs";
import { FinalExecutionOutcome } from "near-api-js/lib/providers";

export default class CreateAggregator extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a near aggregator for a given queue";

  static aliases = ["near:create:aggregator"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that will be the authority for the oracle",
    }),
    crankAddress: Flags.string({
      description: "optional, address of the crank to add the aggregator to",
    }),
    name: Flags.string({
      description: "name of the crank for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the crank for easier identification",
    }),
    forceReportPeriod: Flags.integer({
      description:
        "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
      default: 0,
    }),
    batchSize: Flags.integer({
      description: "number of oracles requested for each open round call",
    }),
    minJobs: Flags.integer({
      description: "number of jobs that must respond before an oracle responds",
    }),
    minOracles: Flags.integer({
      description:
        "number of oracles that must respond before a value is accepted on-chain",
    }),
    updateInterval: Flags.integer({
      description: "set an aggregator's minimum update delay",
      required: true,
    }),
    varianceThreshold: Flags.string({
      description:
        "percentage change between a previous accepted result and the next round before an oracle reports a value on-chain. Used to conserve lease cost during low volatility",
      default: "0",
    }),
    // job: Flags.string({
    //   char: "j",
    //   description: "filesystem path to job definition file",
    //   multiple: true,
    // }),
    rewardEscrow: Flags.string({
      description: "where to send rewards. defaults to user's escrow account",
      required: false,
    }),
    historyLimit: Flags.integer({
      description: "number of samples to store in aggregator's history",
      default: 1000,
    }),
    enable: Flags.boolean({
      description:
        "if required and queue authority is provided, enable permissions",
    }),
  };

  static args = [
    {
      name: "queueAddress",
      description: "address of the queue in Uint8 or Base58 encoding",
      required: true,
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CreateAggregator);

    const [queueAccount, queue] = await this.loadQueue(args.queueAddress);

    this.logger.info(`loading escrow`);
    const escrow = await this.loadEscrow();

    this.logger.info(`creating agg...`);

    const aggregator = await AggregatorAccount.create(this.program, {
      authority: flags.authority ?? this.program.account.accountId,
      queue: queueAccount.address,
      crank: flags.crankAddress
        ? this.parseAddress(flags.crankAddress)
        : undefined,
      name: Buffer.from(flags.name ?? ""),
      metadata: Buffer.from(flags.name ?? ""),
      batchSize: flags.batchSize ?? 1,
      minJobResults: flags.minJobs ?? 1,
      minOracleResults: flags.minOracles ?? 1,
      minUpdateDelaySeconds: flags.updateInterval ?? 30,
      historyLimit: flags.historyLimit ?? 1000,
      startAfter: 0,
      forceReportPeriod: flags.forceReportPeriod ?? 0,
      varianceThreshold: flags.varianceThreshold
        ? SwitchboardDecimal.fromBig(new Big(flags.varianceThreshold))
        : SwitchboardDecimal.fromBig(new Big(0)),
      rewardEscrow: escrow.address,
    });

    this.logger.info(`created agg`);

    const permission = await PermissionAccount.create(this.program, {
      authority: this.program.account.accountId,
      granter: queueAccount.address,
      grantee: aggregator.address,
    });

    // const jobDefinitions = flags.job
    //   ? flags.job.map((jobDefinition) => {
    //       try {
    //         const jobAddress = this.parseAddress(jobDefinition);
    //         return jobDefinition;
    //       } catch {
    //         const json = JSON.parse(
    //           fs
    //             .readFileSync(this.normalizePath(jobDefinition), "utf8")
    //             .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, "")
    //         );
    //         if (!("tasks" in json)) {
    //           throw new Error(
    //             `Job definition contains no tasks! ${jobDefinition}`
    //           );
    //         }
    //         const oracleJob = this.loadJobJson(jobDefinition);
    //         const oracleJobJson = oracleJob.toJSON();
    //         return {
    //           authority:
    //             "authority" in json
    //               ? json.authority
    //               : flags.authority ?? this.program.account.accountId,
    //           name: "name" in json ? json.name : undefined,
    //           metadata: "metadata" in json ? json.metadata : undefined,
    //           expiration: "expiration" in json ? json.expiration : undefined,
    //           tasks: oracleJobJson.tasks,
    //         };
    //       }
    //     })
    //   : [];

    // const { aggregator, permission, jobs, actions } =
    //   await queueAccount.createAggregatorFromJSON({
    //     crankAddress: flags.crankAddress,
    //     rewardEscrow: escrow.address,
    //     authority: flags.authority ?? this.program.account.accountId,
    //     name: flags.name,
    //     metadata: flags.metadata,
    //     batchSize: flags.batchSize,
    //     minOracleResults: flags.minOracles,
    //     minJobResults: flags.minJobs,
    //     minUpdateDelaySeconds: flags.updateInterval,
    //     varianceThreshold: flags.varianceThreshold
    //       ? new Big(flags.varianceThreshold)
    //       : undefined,
    //     forceReportPeriod: flags.forceReportPeriod,
    //     historySize: flags.historyLimit,
    //     enable: flags.enable,
    //     jobs: jobDefinitions,
    //   });

    // this.logger.info(
    //   `Aggregator Key (Uint8Array): [${aggregator.address
    //     .map((e) => (e as any).toString())
    //     .join(",")}]`
    // );
    // this.logger.info(
    //   `Aggregator Key (Base58): ${this.encodeAddress(aggregator.address)}`
    // );

    // // this.logger.info(`About to send`);
    // // const txnQueue = new TxnQueue(this.program, batches);
    // // const txnReceipts = await txnQueue.send();

    // const txnReceipts: FinalExecutionOutcome[] = [];
    // for await (const action of actions) {
    //   const txnReceipt = await this.program.sendAction(action[1]);
    //   if (!isTxnSuccessful(txnReceipt)) {
    //     this.logger.error(JSON.stringify(txnReceipt, undefined, 2));
    //     throw new Error(`Near transaction failed`);
    //   }
    //   txnReceipts.push(txnReceipt);
    //   this.logger.debug(`Sent txn ${txnReceipts.length} / ${actions.length}`);
    // }

    // const jobData = await Promise.all(
    //   jobs.map(async (job) => {
    //     const jobData = await job.loadData();
    //     const oracleJob = OracleJob.decodeDelimited(jobData.data);
    //     return {
    //       address: job.address,
    //       addressBase58: this.encodeAddress(job.address),
    //       ...jobData,
    //       tasks: oracleJob.tasks,
    //     };
    //   })
    // );

    const data = {
      address: aggregator.address,
      addressBase58: this.encodeAddress(aggregator.address),
      ...(await aggregator.loadData()),
      permission: {
        address: permission.address,
        addressBase58: this.encodeAddress(permission.address),
        ...(await permission.loadData()),
      },
      // jobs: jobData,
    };

    if (flags.json) {
      return this.normalizeAccountData(aggregator.address, data);
    }

    this.logger.info(
      JSON.stringify(
        this.normalizeAccountData(aggregator.address, data),
        this.jsonReplacers,
        2
      )
    );
  }

  async catch(error) {
    super.catch(error, "Failed to create near aggregator");
  }
}
