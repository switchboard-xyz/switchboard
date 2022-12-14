import { Flags } from "@oclif/core";
import { Keypair, PublicKey } from "@solana/web3.js";
import { OracleJob } from "@switchboard-xyz/common";
import { JobInitParams, QueueAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import chalk from "chalk";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an aggregator account";

  static flags = {
    ...BaseCommand.flags,
    // aggregator flags
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
    aggregatorKeypair: Flags.string({
      description:
        "keypair to use for aggregator account. This will be the account's publicKey",
    }),
    name: Flags.string({
      description: "name of the aggregator",
      default: "",
    }),
    metadata: Flags.string({
      description: "metadata of the aggregator",
      default: "",
    }),
    batchSize: Flags.integer({
      description: "number of oracles requested for each open round call",
      default: 1,
    }),
    minJobs: Flags.integer({
      description: "number of jobs that must respond before an oracle responds",
      default: 1,
    }),
    minOracles: Flags.integer({
      description:
        "number of oracles that must respond before a value is accepted on-chain",
      default: 1,
    }),
    updateInterval: Flags.integer({
      description: "set an aggregator's minimum update delay",
      required: true,
    }),
    forceReportPeriod: Flags.integer({
      description:
        "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
      default: 0,
    }),
    varianceThreshold: Flags.string({
      description:
        "percentage change between a previous accepted result and the next round before an oracle reports a value on-chain. Used to conserve lease cost during low volatility",
      default: "0",
    }),
    historyLimit: Flags.integer({
      description: "number of historical samples to store",
    }),
    // crank flags
    crankKey: Flags.string({
      description: "public key of the crank to join",
      exclusive: ["disableCrank"],
    }),
    disableCrank: Flags.boolean({
      description:
        "whether the newly created feed can be pushed onto a crank. irreversible",
      exclusive: ["crankKey"],
    }),
    // permission flags
    queueAuthority: Flags.string({
      description: "alternative keypair to use for queue authority",
    }),
    enable: Flags.boolean({
      description: "set permissions to PERMIT_ORACLE_QUEUE_USAGE",
      default: false,
    }),
    // lease params
    leaseAmount: Flags.string({
      description:
        "amount of funds to deposit into the lease, ex: 1.5 would deposit 1.5 wSOL",
      default: "0",
    }),
    // job flags
    job: Flags.string({
      char: "j",
      description: "filesystem path to job definition file",
      multiple: true,
    }),
    jobKey: Flags.string({
      description: "public key of existing job account",
      multiple: true,
    }),
  };

  static args = [
    {
      name: "queueKey",
      description: "public key of the oracle queue to create an aggregator on",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorCreate);

    if (!args.queueKey) {
      throw new Error("you must provide a --queueKey to create aggregator for");
    }

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      args.queueKey
    );
    const queueAuthority = flags.queueAuthority
      ? await this.loadAuthority(flags.queueAuthority, queue.authority)
      : undefined;

    const authority = flags.authority
      ? await this.loadAuthority(flags.authority)
      : this.program.wallet.payer;

    let keypair: Keypair;
    if (flags.aggregatorKeypair) {
      keypair = await this.loadKeypair(flags.aggregatorKeypair);
    }

    const tokenWallet = this.program.mint.getAssociatedAddress(
      this.program.walletPubkey
    );

    const jobs: Array<{ pubkey: PublicKey; weight?: number } | JobInitParams> =
      [];
    for await (const jobKey of flags?.jobKey ?? []) {
      const [jobAccount, job] = await this.loadJob(jobKey);
      jobs.push({ pubkey: jobAccount.publicKey });
    }

    for await (const jobDefinition of flags?.job ?? []) {
      const oracleJob = this.loadJobDefinition(jobDefinition);
      jobs.push({
        data: OracleJob.encodeDelimited(oracleJob).finish(),
      });
    }

    const [aggregatorAccount, aggregatorInitTxns] =
      await queueAccount.createFeedInstructions(this.payer, {
        // aggregator params
        authority: authority,
        keypair: keypair,
        name: flags.name,
        metadata: flags.metadata,
        batchSize: flags.batchSize,
        minRequiredOracleResults: flags.minOracles,
        minRequiredJobResults: flags.minJobs,
        minUpdateDelaySeconds: flags.updateInterval,
        varianceThreshold: Number(flags.varianceThreshold ?? "0"),
        forceReportPeriod: flags.forceReportPeriod ?? 0,
        historyLimit: flags.historyLimit,
        // crank params
        crankPubkey: flags.crankKey ? new PublicKey(flags.crankKey) : undefined,
        // lease params
        fundAmount: Number(flags.leaseAmount),
        funderTokenWallet: tokenWallet,
        // permission params
        enable: flags.enable ?? false,
        queueAuthority: queueAuthority,
        // job params
        jobs: jobs,
      });

    const signatures = await this.signAndSendAll(aggregatorInitTxns);

    if (flags.json) {
      const accounts = await aggregatorAccount.toAccountsJSON();
      return this.normalizeAccountData(aggregatorAccount.publicKey, accounts);
    }

    if (this.silent) {
      this.log(signatures.join("\n"));
      return;
    }

    this.log(
      `${chalk.green(
        `${CHECK_ICON}Aggregator Account created successfully:`,
        aggregatorAccount.publicKey.toBase58()
      )}`
    );

    if (signatures.length === 1) {
      this.log(this.toUrl(signatures[0]));
    } else {
      for (const [index, signature] of signatures.entries())
        this.log(`Txn #${index}`, this.toUrl(signature));
    }

    const accounts = await aggregatorAccount.toAccountsJSON();
    const parsedAccounts = this.normalizeAccountData(
      aggregatorAccount.publicKey,
      accounts
    );

    this.logProperty("Name", parsedAccounts.name);
    this.logProperty("Metadata", parsedAccounts.metadata);
    this.logProperty("Update Interval", accounts.minUpdateDelaySeconds);
    this.logProperty("Batch Size", accounts.oracleRequestBatchSize);
    this.logProperty("Min Responses", accounts.minOracleResults);
    this.logProperty("Min Job Responses", accounts.minJobResults);

    // TODO: Pretty print the rest of the permission & lease account properties
  }

  async catch(error) {
    super.catch(error, "Failed to create aggregator account");
  }
}
