import { CliBaseCommand as BaseCommand } from "../BaseCommand";
import { AwsProvider, FsProvider, GcpProvider } from "../providers";
import { AuthorityMismatch } from "../types";
import type { IBaseChain } from "../types/chain";
import { loadKeypair } from "../utils";

import {
  prettyPrintAggregator,
  prettyPrintAggregatorAccounts,
  prettyPrintCrank,
  prettyPrintFunction,
  prettyPrintJob,
  prettyPrintJobs,
  prettyPrintLease,
  prettyPrintOracle,
  prettyPrintPermissions,
  prettyPrintQueue,
  prettyPrintSbstate,
  prettyPrintVrf,
  prettyPrintVrfAccounts,
} from "./utils";

import type * as anchor from "@coral-xyz/anchor";
import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import type { AccountInfo, Cluster } from "@solana/web3.js";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { OracleJob } from "@switchboard-xyz/common";
import type {
  AggregatorAccounts,
  attestationTypes,
  SwitchboardAccountType,
  VrfAccounts,
} from "@switchboard-xyz/solana.js";
import {
  AggregatorAccount,
  CrankAccount,
  JobAccount,
  LeaseAccount,
  OracleAccount,
  PermissionAccount,
  QueueAccount,
  SwitchboardProgram,
  types,
  VrfAccount,
} from "@switchboard-xyz/solana.js";

export type SolanaNetwork = Cluster | "localnet";

export abstract class SolanaBaseCommand
  extends BaseCommand
  implements IBaseChain
{
  static flags = {
    ...BaseCommand.flags,
    mainnetBeta: Flags.boolean({
      description: "WARNING: use mainnet-beta solana cluster",
      required: false,
      exclusive: ["cluster"],
      default: false,
    }),
    cluster: Flags.string({
      description: "the solana cluster to connect to",
      options: ["devnet", "mainnet-beta", "mainnet", "localnet"],
      required: false,
      exclusive: ["mainnetBeta"],
      aliases: ["network"],
    }),
    rpcUrl: Flags.string({
      char: "u",
      description: "alternate RPC url",
    }),
    programId: Flags.string({
      description: "alternative Switchboard program ID to interact with",
    }),
    commitment: Flags.string({
      description: "transaction commitment level to use",
      default: "confirmed",
      options: ["confirmed", "finalized", "processed"],
    }),
  };

  public hasSigner = false;

  public network: SolanaNetwork;

  public rpcUrl: string;

  public programId: PublicKey;

  public connection: Connection;

  public program: SwitchboardProgram;

  public commitment: "confirmed" | "finalized" | "processed";

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this.network = this.getNetwork(
      (flags as any).cluster,
      (flags as any).mainnetBeta
    );
    this.programId = this.getProgramId(this.network, (flags as any).programId);

    this.rpcUrl = this.getRpcUrl(this.network, (flags as any).rpcUrl);
    this.commitment = (flags as any).commitment ?? "confirmed";
    this.connection = new Connection(this.rpcUrl, {
      commitment: (flags as any).commitment ?? "confirmed",
    });

    // TODO: Load connection params from config
    this.logConfig({
      cluster: this.network,
      rpc: this.rpcUrl,
    });
  }

  toUrl(signature: string) {
    return `https://explorer.solana.com/tx/${signature}?cluster=${this.network}`;
  }

  toAccountUrl(account: string) {
    return `https://explorer.solana.com/address/${account}?cluster=${this.network}`;
  }

  getNetwork(clusterOption?: string, mainnetFlag?: string): SolanaNetwork {
    if (mainnetFlag) {
      return "mainnet-beta";
    }

    if (clusterOption) {
      switch (clusterOption) {
        case "mainnet":
        case "mainnet-beta": {
          return "mainnet-beta";
        }

        case "devnet": {
          return "devnet";
        }

        case "localnet": {
          return "localnet";
        }
      }
    }

    return "devnet";
  }

  getRpcUrl(cluster: SolanaNetwork, rpcUrlFlag?: string): string {
    if (rpcUrlFlag) {
      return rpcUrlFlag;
    }

    if (cluster === "localnet") {
      return "http://127.0.0.1:8899";
    }

    const rpcUrl = this.ctx.getRpcUrl(
      "solana",
      cluster === "mainnet-beta" ? "mainnet" : cluster
    );
    if (!rpcUrl) {
      throw new Error(
        `Failed to get Solana RPC URL for cluster ${cluster}. Try providing the --rpcUrl flag`
      );
    }

    return rpcUrl;
  }

  getProgramId(cluster: SolanaNetwork, programIdFlag: string): PublicKey {
    if (programIdFlag) {
      return new PublicKey(programIdFlag);
    }

    return new PublicKey(
      this.ctx.getProgramId(
        "solana",
        cluster === "mainnet-beta" ? "mainnet" : cluster
      )
    );
  }

  async loadProgram(
    signer: Keypair = Keypair.fromSeed(new Uint8Array(32).fill(1))
  ): Promise<SwitchboardProgram> {
    if (!this.connection) {
      throw new Error(
        `Need to load the connection before loading the Anchor program`
      );
    }

    if (!this.programId) {
      throw new Error(
        `Need to load the programId before loading the Anchor program`
      );
    }

    const program = await SwitchboardProgram.load(
      this.network,
      this.connection,
      signer,
      this.programId
    );

    return program;
  }

  /** Load a keypair from a CLI flag and optionally check if it matches the expected account authority */
  async loadKeypair(
    keypairPath: string,
    expectedPubkey?: PublicKey
  ): Promise<Keypair> {
    const keypair = await loadKeypair(keypairPath);

    if (expectedPubkey && !expectedPubkey.equals(keypair.publicKey)) {
      throw new AuthorityMismatch();
    }

    return keypair;
  }

  /** Load an authority from a CLI flag and optionally check if it matches the expected account authority */
  async loadAuthority(
    authorityPath: string | unknown,
    expectedAuthority?: PublicKey
  ): Promise<Keypair> {
    const authority: Keypair =
      typeof authorityPath === "string"
        ? await loadKeypair(authorityPath)
        : this.program.wallet.payer;

    if (expectedAuthority && !expectedAuthority.equals(authority.publicKey)) {
      throw new AuthorityMismatch();
    }

    return authority;
  }

  mainnetCheck(): void {
    if (this.network === "mainnet-beta") {
      throw new Error(
        "cli@^2 is still in beta, mainnet is disabled for this command."
      );
    }
  }

  // Converts a string to a tokenAmount
  // If a decimal is found, it will be normalized using 9 decimal places
  getTokenAmount(value: string, decimals = 9): anchor.BN {
    if (Number.isNaN(Number(value))) {
      throw new TypeError("tokenAmount must be an integer or decimal");
    }

    return this.program.mint.toTokenAmountBN(Number(value));
  }

  async getSigner(keypairPath: string): Promise<Keypair> {
    const parseKeypairString = (fileString: string): Keypair => {
      // check if bytes
      const parsedFileString = fileString
        .trim()
        .replace(/\n/g, "")
        .replace(/\s/g, "");
      const bytesRegex = /^\[(\s)?\d+((\s)?,(\s)?\d+){31,}]/;
      if (bytesRegex.test(parsedFileString)) {
        return Keypair.fromSecretKey(
          new Uint8Array(JSON.parse(parsedFileString))
        );
      }

      try {
        return Keypair.fromSecretKey(
          new Uint8Array(JSON.parse(parsedFileString))
        );
      } catch {}

      throw new Error(`Failed to derive secret key from input file`);
    };

    const errors: any[] = [];

    // try loading keypair from filesystem
    try {
      const normalizedKeypairPath = this.normalizePath(keypairPath);
      const keypair = FsProvider.getSecret(
        normalizedKeypairPath,
        parseKeypairString
      );
      return keypair;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from gcp secret manager
    try {
      const keypair = await GcpProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return keypair;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from aws secrets
    try {
      const keypair = await AwsProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return keypair;
    } catch (error) {
      errors.push(error);
    }

    throw new Error(
      `Failed to load Solana keypair ${keypairPath}\n${errors
        .map((error) => (error as any).toString())
        .join("\n")}`
    );
  }

  deserializeJobData(jobData: Uint8Array): OracleJob {
    return OracleJob.decodeDelimited(jobData);
  }

  async loadQueue(
    address: PublicKey | string
  ): Promise<[QueueAccount, types.OracleQueueAccountData]> {
    return QueueAccount.load(this.program, address);
  }

  async loadAggregator(
    address: PublicKey | string
  ): Promise<[AggregatorAccount, types.AggregatorAccountData]> {
    return AggregatorAccount.load(this.program, address);
  }

  async loadCrank(
    address: PublicKey | string
  ): Promise<[CrankAccount, types.CrankAccountData]> {
    return CrankAccount.load(this.program, address);
  }

  async loadOracle(
    address: PublicKey | string
  ): Promise<[OracleAccount, types.OracleAccountData]> {
    return OracleAccount.load(this.program, address);
  }

  async loadPermission(
    granter: PublicKey | string,
    grantee: PublicKey | string,
    authority: PublicKey | string
  ): Promise<[PermissionAccount, types.PermissionAccountData, number]> {
    return PermissionAccount.load(this.program, authority, granter, grantee);
  }

  async loadLease(
    queue: PublicKey | string,
    aggregator: PublicKey | string
  ): Promise<[LeaseAccount, types.LeaseAccountData, number]> {
    return LeaseAccount.load(this.program, queue, aggregator);
  }

  async loadJob(
    address: PublicKey | string
  ): Promise<[JobAccount, types.JobAccountData, OracleJob]> {
    const account = new JobAccount(this.program, new PublicKey(address));
    const data = await account.loadData();

    const oracleJob = this.deserializeJobData(data.data);

    return [account, data, oracleJob];
  }

  normalizeAccountData(
    publicKey: PublicKey,
    data: Record<string, any>
  ): Record<string, any> {
    const object = {
      publicKey: publicKey.toString(),
      ...data,
    };
    return JSON.parse(JSON.stringify(object, this.jsonReplacers, 2));
  }

  prettyPrintAggregator(
    aggregator: types.AggregatorAccountData,
    publicKey: PublicKey,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintAggregator(aggregator, publicKey, SPACING));
  }

  prettyPrintPermissions(
    permission: types.PermissionAccountData,
    publicKey: PublicKey,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintPermissions(permission, publicKey, SPACING));
  }

  prettyPrintLease(
    lease: types.LeaseAccountData,
    publicKey: PublicKey,
    balance?: number,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintLease(lease, publicKey, balance, SPACING));
  }

  prettyPrintJob(
    job: types.JobAccountData,
    publicKey: PublicKey,
    tasks: Array<OracleJob.ITask>,
    label?: string,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintJob(job, publicKey, tasks, label, SPACING));
  }

  prettyPrintJobs(
    jobs: Array<{
      publicKey: PublicKey;
      data: types.JobAccountData;
      tasks: Array<OracleJob.ITask>;
    }>,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintJobs(jobs, SPACING));
  }

  prettyPrintAggregatorAccounts(accounts: AggregatorAccounts, SPACING = 24) {
    this.logger.info(prettyPrintAggregatorAccounts(accounts, SPACING));
  }

  prettyPrintOracle(
    oracle: types.OracleAccountData,
    publicKey: PublicKey,
    balance?: number,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintOracle(oracle, publicKey, balance, SPACING));
  }

  prettyPrintQueue(
    queue: types.OracleQueueAccountData,
    publicKey: PublicKey,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintQueue(queue, publicKey, SPACING));
  }

  prettyPrintVrf(
    vrf: types.VrfAccountData,
    publicKey: PublicKey,
    balance?: number,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintVrf(vrf, publicKey, balance, SPACING));
  }

  prettyPrintVrfAccounts(accounts: VrfAccounts, SPACING = 24) {
    this.logger.info(prettyPrintVrfAccounts(accounts, SPACING));
  }

  prettyPrintCrank(
    crank: types.CrankAccountData,
    publicKey: PublicKey,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintCrank(crank, publicKey, SPACING));
  }

  prettyPrintSbstate(
    programState: types.SbState,
    publicKey: PublicKey,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintSbstate(programState, publicKey, SPACING));
  }

  prettyPrintFunction(
    functionState: attestationTypes.FunctionAccountData,
    publicKey: PublicKey,
    SPACING = 24
  ) {
    this.logger.info(prettyPrintFunction(functionState, publicKey, SPACING));
  }

  async printAccount(
    publicKey: PublicKey,
    accountInfo: AccountInfo<Buffer>,
    jsonFlag?: boolean,
    _accountType?: SwitchboardAccountType
  ) {
    const accountType =
      _accountType ?? SwitchboardProgram.getAccountType(accountInfo);
    if (!accountType) {
      throw new Error(`Not a valid Switchboard account`);
    }

    switch (accountType) {
      case "Aggregator": {
        const account = new AggregatorAccount(this.program, publicKey);
        const accounts = await account.fetchAccounts();

        if (jsonFlag) {
          return accounts;
        }

        this.logger.info(prettyPrintAggregatorAccounts(accounts));
        return;
      }

      case "Job": {
        const job = types.JobAccountData.decode(accountInfo.data);
        const oracleJob = OracleJob.decodeDelimited(job.data);

        if (jsonFlag) {
          return {
            publicKey: publicKey.toBase58(),
            data: job.toJSON(),
            tasks: oracleJob.tasks,
          };
        }

        this.logger.info(prettyPrintJob(job, publicKey, oracleJob.tasks));
        return;
      }

      case "Permission": {
        const permission = types.PermissionAccountData.decode(accountInfo.data);

        if (jsonFlag) {
          return {
            publicKey: publicKey.toBase58(),
            data: permission.toJSON(),
          };
        }

        this.logger.info(prettyPrintPermissions(permission, publicKey));
        return;
      }

      case "Lease": {
        const lease = types.LeaseAccountData.decode(accountInfo.data);
        const leaseAccount = new LeaseAccount(this.program, publicKey);
        const balance = await leaseAccount.fetchBalance(lease.escrow);

        if (jsonFlag) {
          return {
            publicKey: publicKey.toBase58(),
            data: lease.toJSON(),
            balance: balance,
          };
        }

        this.logger.info(prettyPrintLease(lease, publicKey));
        return;
      }

      case "Queue": {
        const queue = types.OracleQueueAccountData.decode(accountInfo.data);

        if (jsonFlag) {
          return {
            publicKey: publicKey.toBase58(),
            data: queue.toJSON(),
          };
        }

        this.logger.info(prettyPrintQueue(queue, publicKey));
        return;
      }

      case "Crank": {
        const crank = types.CrankAccountData.decode(accountInfo.data);

        if (jsonFlag) {
          return {
            publicKey: publicKey.toBase58(),
            data: crank.toJSON(),
          };
        }

        this.logger.info(prettyPrintCrank(crank, publicKey));
        return;
      }

      case "Vrf": {
        const vrf = types.VrfAccountData.decode(accountInfo.data);
        const vrfAccount = new VrfAccount(this.program, publicKey);
        const accounts = await vrfAccount.fetchAccounts(vrf);

        if (jsonFlag) {
          return accounts;
        }

        this.logger.info(prettyPrintVrfAccounts(accounts));
      }
    }
  }
}
