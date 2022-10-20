import { Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";
import Big from "big.js";
import { OracleJob } from "@switchboard-xyz/common";
import { AggregatorAccount, JobAccount } from "@switchboard-xyz/aptos.js";
import { AptosAccount } from "aptos";

export default class CreateAggregator extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an aptos aggregator for a given queue";

  static aliases = ["aptos:create:aggregator"];

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
      description: "name of the aggregator for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the aggregator for easier identification",
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
    job: Flags.string({
      char: "j",
      description: "filesystem path to job definition file",
      multiple: true,
    }),
    new: Flags.boolean({
      description:
        "create account at new AptosAccount with authority set to --account",
    }),
  };

  static args = [
    {
      name: "queueHexString",
      description: "HexString address of the queue",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CreateAggregator);

    const [queue, queueData] = await this.loadQueue(args.queueHexString);

    const jobs: [JobAccount, string][] = flags.job
      ? await Promise.all(
          flags.job.map(async (jobDefinition) => {
            const jobPayer = new AptosAccount();
            // await this.faucet.fundAccount(jobPayer.address(), 10000);
            const oracleJob = this.loadJobJson(jobDefinition);
            const oracleJobData = Buffer.from(
              OracleJob.encodeDelimited(oracleJob).finish()
            );
            // console.log(`Serialized [${new Uint8Array(oracleJobData)}]`);
            const jobAccount = await JobAccount.init(
              this.aptos,
              jobPayer,
              {
                name: flags.name || "",
                metadata: flags.metadata || "",
                authority: flags.authority
                  ? this.parseAddress(flags.authority)
                  : this.signer.address(),
                data: oracleJobData.toString("hex"),
              },
              this.programId
            );

            return jobAccount;
          })
        )
      : [];

    let account: AptosAccount;
    if (flags.new) {
      account = new AptosAccount();
      // await this.faucet.fundAccount(account.address(), 10000);
    } else {
      account = this.signer;
    }

    const [aggregatorAccount, aggSig] = await AggregatorAccount.init(
      this.aptos,
      account,
      {
        authority: flags.authority || this.signer.address(),
        name: flags.name || "",
        metadata: flags.metadata || "",
        queueAddress: queue.address,
        batchSize: flags.batchSize,
        minOracleResults: flags.minOracles,
        minJobResults: flags.minJobs,
        minUpdateDelaySeconds: flags.updateInterval,
        startAfter: 0,
        varianceThreshold: new Big(flags.varianceThreshold),
        forceReportPeriod: flags.forceReportPeriod,
        coinType: "0x1::aptos_coin::AptosCoin",
        crankAddress: flags.crankAddress ?? "0x0",
      },
      this.programId
    );
    const accountData = await aggregatorAccount.loadData();

    // const [permissionAccount, sig2] = await Permission.init(
    //   this.aptos,
    //   account,
    //   {
    //     authority: queueData.authority,
    //     granter: queue.address,
    //     grantee: account.address(),
    //   },
    //   this.programId
    // );
    // this.logger.info(this.toUrl(sig2));

    for await (const [jobAccount] of jobs) {
      await aggregatorAccount.addJob(this.signer, {
        job: jobAccount.address,
      });
    }

    // if (flags.crankAddress) {
    //   const [crank, crankData] = await this.loadCrank(flags.crankAddress);
    //   await crank.push(this.signer, {
    //     aggregatorAddress: aggregatorAccount.address.toString(),
    //   });
    // }

    const fullJobsData = await Promise.all(
      jobs.map(async ([job, _]) => {
        const jobData = await job.loadData();
        return {
          ...jobData,
          // data: this.deserializeJobData(jobData.data),
        };
      })
    );

    if (flags.json) {
      return this.normalizeAccountData(aggregatorAccount.address, {
        ...accountData,
        jobs: fullJobsData,
      });
    }

    this.logger.info(`Aggregator HexString: ${aggregatorAccount.address}`);
    this.logger.info(
      this.normalizeAccountData(aggregatorAccount.address, {
        ...accountData,
        jobs: fullJobsData,
      })
    );
    this.logger.info(this.toUrl(aggSig));
  }

  async catch(error) {
    super.catch(error, "Failed to create aptos aggregator");
  }
}
