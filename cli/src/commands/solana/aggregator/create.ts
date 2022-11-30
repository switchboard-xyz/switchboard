import { Flags } from "@oclif/core";
import { Keypair, PublicKey } from "@solana/web3.js";
import { OracleJob } from "@switchboard-xyz/common";
import { JobInitParams } from "@switchboard-xyz/solana.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";

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

    const [queueAccount, queue] = await this.loadQueue(args.queueKey);

    let queueAuthority: Keypair;
    if (flags.queueAuthority) {
      queueAuthority = await this.loadAuthority(
        flags.queueAuthority,
        queue.authority
      );
    }

    let authority: Keypair;
    if (flags.authority) {
      authority = await this.loadAuthority(flags.authority);
    }

    let keypair: Keypair;
    if (flags.aggregatorKeypair) {
      keypair = await this.loadKeypair(flags.aggregatorKeypair);
      const keypairAccountInfo = await this.program.connection.getAccountInfo(
        keypair.publicKey
      );
      if (keypairAccountInfo !== null) {
        throw new Error(
          `--aggregatorKeypair must point to a non-existant account, ${this.toAccountUrl(
            keypair.publicKey.toBase58()
          )}`
        );
      }
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

    const [txnSignature, aggregatorAccount] = await queueAccount.createFeed({
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
      funderTokenAccount: tokenWallet,
      // permission params
      enable: flags.enable ?? false,
      queueAuthority: queueAuthority,
      // job params
      jobs: jobs,
    });

    const accounts = await aggregatorAccount.loadAllAccounts();

    if (flags.json) {
      return this.normalizeAccountData(aggregatorAccount.publicKey, accounts);
    }

    // handle nicer logging here
  }

  async catch(error) {
    super.catch(error, "Failed to create aggregator account");
  }
}
