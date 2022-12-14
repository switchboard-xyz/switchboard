/* eslint-disable complexity */
import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { OracleJob } from "@switchboard-xyz/common";
import { JobInitParams, QueueAccount } from "@switchboard-xyz/solana.js";
import * as fs from "fs";
import * as path from "path";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { pubKeyReviver } from "../../../../utils";
import _ from "lodash";

export default class JsonCreateAggregator extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an aggregator from a json file";

  static aliases = ["solana:json:create:aggregator"];

  static examples = [
    "$ sbv2 solana aggregator create json examples/aggregator.json --keypair ../payer-keypair.json --queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile aggregator.schema.json",
  ];

  static flags = {
    ...BaseCommand.flags,
    queueKey: Flags.string({
      description: "public key of the oracle queue to create aggregator for",
      char: "q",
    }),
    authority: Flags.string({
      description:
        "alternate keypair that will be the authority for the aggregator",
      char: "a",
    }),
    // lease params
    leaseAmount: Flags.string({
      description:
        "amount of funds to deposit into the lease, ex: 1.5 would deposit 1.5 wSOL",
      default: "0",
    }),
  };

  static args = [
    {
      name: "definitionFile",
      description: "filesystem path of queue definition json file",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(JsonCreateAggregator);

    if (!args.definitionFile) {
      throw new Error("No feed definition file not specified");
    }

    const definitionFile = args.definitionFile?.startsWith("/")
      ? args.definitionFile
      : path.join(process.cwd(), args.definitionFile);
    if (!fs.existsSync(definitionFile)) {
      throw new Error("Feed definition file does not exist");
    }

    const aggregatorDefinition: any = JSON.parse(
      fs.readFileSync(definitionFile, "utf-8"),
      pubKeyReviver
    );

    const queueKey = aggregatorDefinition.queuePublicKey || flags.queueKey;
    if (!queueKey) {
      throw new Error("you must provide a --queueKey to create aggregator for");
    }

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      queueKey
    );
    const queueAuthority = flags.queueAuthority
      ? await this.loadAuthority(flags.queueAuthority, queue.authority)
      : undefined;

    const authority = flags.authority
      ? await this.loadAuthority(flags.authority)
      : this.program.wallet.payer;

    const tokenWallet = this.program.mint.getAssociatedAddress(
      this.program.walletPubkey
    );

    const name = aggregatorDefinition.name ?? "";
    const metadata = aggregatorDefinition.metadata ?? "";
    const batchSize = aggregatorDefinition.oracleRequestBatchSize ?? 1;
    const minRequiredOracleResults =
      aggregatorDefinition.minRequiredOracleResults ?? 1;
    const minRequiredJobResults =
      aggregatorDefinition.minRequiredJobResults ?? 1;
    const minUpdateDelaySeconds =
      aggregatorDefinition.minUpdateDelaySeconds ?? 30;
    const varianceThreshold = Number(
      aggregatorDefinition.varianceThreshold ?? 0
    );
    const forceReportPeriod = Number(
      aggregatorDefinition.forceReportPeriod ?? 0
    );
    const historyLimit = Number(aggregatorDefinition.historyLimit ?? 0);
    const expiration = Number(aggregatorDefinition.expiration ?? 0);
    const startAfter = Number(aggregatorDefinition.startAfter ?? 0);
    const crankKey = aggregatorDefinition.crankKey
      ? new PublicKey(aggregatorDefinition.crankKey)
      : undefined;

    const aggregatorJobs = aggregatorDefinition.jobs;
    const jobs = (
      _.isArray(aggregatorJobs) ? aggregatorJobs : []
    ).map<JobInitParams>((job: any) => ({
      name: job.name ?? "",
      authority: authority,
      data: Buffer.from(
        OracleJob.encodeDelimited(OracleJob.fromObject(job)).finish()
      ),
    }));

    const [aggregatorAccount, signatures] = await queueAccount.createFeed({
      // aggregator params
      authority: authority,
      keypair: undefined, // An aggregatorKeypair will be generated for the new feed.
      name,
      metadata,
      batchSize,
      minRequiredOracleResults,
      minRequiredJobResults,
      minUpdateDelaySeconds,
      varianceThreshold,
      forceReportPeriod,
      historyLimit,
      expiration,
      startAfter,
      // crank params
      crankPubkey: crankKey,
      // lease params
      fundAmount: Number(flags.leaseAmount),
      funderTokenWallet: tokenWallet,
      // permission params
      enable: flags.enable ?? false,
      queueAuthority: queueAuthority,
      // job params
      jobs: jobs,
    });

    if (flags.silent) {
      this.log(signatures.join("\n"));
      return;
    }

    if (flags.json) {
      const accounts = await aggregatorAccount.toAccountsJSON();
      return this.normalizeAccountData(aggregatorAccount.publicKey, accounts);
    }

    if (signatures.length === 1) {
      this.log(this.toUrl(signatures[0]));
    } else {
      for (const [index, oracleInitSignature] of signatures.entries())
        this.log(`Txn #${index}`, this.toUrl(oracleInitSignature));
    }

    // handle nicer logging here
  }

  async catch(error) {
    super.catch(error, "failed to create aggregator from json file");
  }
}
