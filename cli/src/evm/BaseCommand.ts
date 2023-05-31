import { CliBaseCommand as BaseCommand } from "../BaseCommand";
import { AwsProvider, FsProvider, GcpProvider } from "../providers";
import { IBaseChain } from "../types/chain";

import { Flags } from "@oclif/core";
import { Input } from "@oclif/parser";
import { OracleJob, parseSecretString } from "@switchboard-xyz/common";
import { providers, Wallet } from "ethers";

type EvmChain = "coredao" | "arbitrum";

type EvmNetwork = "mainnet" | "testnet";

export abstract class EvmBaseCommand extends BaseCommand implements IBaseChain {
  static flags = {
    ...BaseCommand.flags,
    chain: Flags.string({
      description: "the evm chain to interact with",
      options: ["coredao", "arbitrum"],
      required: true,
      // exclusive: ["chainId"],
    }),
    // chainId: Flags.string({
    //   description: "the evm chain to interact with",
    //   options: ["coredao", "arbitrum"],
    //   required: true,
    //   exclusive: ["chain", "network"],
    // }),
    coredao: Flags.boolean({
      description: "use the coredao chain",
      exclusive: ["chain", "coredao"],
    }),
    arbitrum: Flags.boolean({
      description: "use the arbitrum chain",
      exclusive: ["chain", "arbitrum"],
    }),
    network: Flags.string({
      description: "the EVM network to connect to",
      options: ["mainnet", "testnet"],
      required: true,
      exclusive: ["mainnet", "testnet"],
    }),
    mainnet: Flags.boolean({
      description: "use the mainnet network",
      default: false,
      exclusive: ["network"],
    }),
    testnet: Flags.boolean({
      description: "use the testnet network",
      default: false,
      exclusive: ["network"],
    }),
    rpcUrl: Flags.string({
      char: "u",
      description: "alternate RPC url",
    }),
    programId: Flags.string({
      description: "alternative Switchboard program ID to interact with",
    }),
  };

  public hasSigner = false;

  public chain: EvmChain;

  public network: EvmNetwork;

  public rpcUrl: string;

  public programId: string;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this.chain = this.getChain(
      (flags as any).chain,
      (flags as any).coredao,
      (flags as any).arbitrum
    );

    this.network = this.getNetwork((flags as any).cluster);

    this.rpcUrl = this.getRpcUrl(
      this.chain,
      this.network,
      (flags as any).rpcUrl
    );

    this.programId = this.getProgramId(
      this.chain,
      this.network,
      (flags as any).programId
    );

    this.logConfig({
      chain: this.chain,
      network: this.network,
      rpc: this.rpcUrl,
      programId: this.programId,
    });
  }

  getChain(chain?: string, coredao?: boolean, arbitrum?: boolean): EvmChain {
    if (coredao) {
      return "coredao";
    }

    if (arbitrum) {
      return "arbitrum";
    }

    if (!chain) {
      throw new Error(`Need to provide --chain`);
    }

    if (chain !== "coredao" && chain !== "arbitrum") {
      throw new Error(`--chain must be 'coredao' or 'arbitrum'`);
    }

    return chain;
  }

  getRpcUrl(chain: EvmChain, network: EvmNetwork, rpcUrlFlag?: string): string {
    if (rpcUrlFlag) {
      return rpcUrlFlag;
    }

    const rpcUrl = this.ctx.getRpcUrl(chain, network);
    if (!rpcUrl) {
      throw new Error(
        `Failed to get EVM RPC_URL for ${chain} ${network}. Try providing the --rpcUrl flag`
      );
    }

    return rpcUrl;
  }

  getNetwork(
    networkOption?: string,
    mainnet?: boolean,
    testnet?: boolean
  ): EvmNetwork {
    if (mainnet) {
      return "mainnet";
    }

    if (testnet) {
      return "testnet";
    }

    if (!networkOption) {
      throw new Error(`Need to provide --network`);
    }

    if (networkOption !== "mainnet" && networkOption !== "testnet") {
      throw new Error(`--network must be 'mainnet' or 'testnet'`);
    }

    return networkOption;
  }

  getProgramId(
    chain: EvmChain,
    network: EvmNetwork,
    programIdFlag?: string
  ): string {
    if (programIdFlag) {
      return programIdFlag;
    }

    return this.ctx.getProgramId(chain, network);
  }

  toUrl(signature: string) {
    return "NOT_SUPPORTED";
    // return `https://explorer.solana.com/tx/${signature}?cluster=${this.network}`;
  }

  toAccountUrl(account: string) {
    return "NOT_SUPPORTED";
    // return `https://explorer.solana.com/address/${account}?cluster=${this.network}`;
  }

  async getSigner(keypairPath: string): Promise<Wallet> {
    const parseKeypairString = (fileString: string): Wallet => {
      const parsedSecret = parseSecretString(fileString);
      if (parsedSecret) {
        const provider = new providers.JsonRpcProvider(this.rpcUrl);
        return new Wallet(parsedSecret.toString("hex"), provider);
      }

      throw new Error(`Failed to derive secret key from input file`);
    };

    const errors: any[] = [];

    // try loading keypair from filesystem
    try {
      const normalizedKeypairPath = this.normalizePath(keypairPath);
      const wallet = FsProvider.getSecret(
        normalizedKeypairPath,
        parseKeypairString
      );
      return wallet;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from gcp secret manager
    try {
      const wallet = await GcpProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return wallet;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from aws secrets
    try {
      const wallet = await AwsProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return wallet;
    } catch (error) {
      errors.push(error);
    }

    throw new Error(
      `Failed to load EVM keypair ${keypairPath}\n${errors
        .map((e) => (e as any).toString())
        .join("\n")}`
    );
  }

  deserializeJobData(jobData: Uint8Array): OracleJob {
    return OracleJob.decodeDelimited(jobData);
  }

  async loadQueue(address: string): Promise<[any, any]> {
    throw new Error(`Not implemented yet`);
  }

  async loadAggregator(address: string): Promise<[any, any]> {
    throw new Error(`Not implemented yet`);
  }

  async loadCrank(address: string): Promise<[any, any]> {
    throw new Error(`Not implemented yet`);
  }

  async loadOracle(address: string): Promise<[any, any]> {
    throw new Error(`Not implemented yet`);
  }

  async loadPermission(
    granter: string,
    grantee: string,
    authority: string
  ): Promise<[any, any, number]> {
    throw new Error(`Not implemented yet`);
  }

  async loadLease(
    queue: string,
    aggregator: string
  ): Promise<[any, any, number]> {
    throw new Error(`Not implemented yet`);
  }

  async loadJob(address: string): Promise<[any, any, OracleJob]> {
    throw new Error(`Not implemented yet`);
  }

  normalizeAccountData(
    address: string,
    data: Record<string, any>
  ): Record<string, any> {
    const object = {
      address: address,
      ...data,
    };
    return JSON.parse(JSON.stringify(object, this.jsonReplacers, 2));
  }

  prettyPrintAggregator(aggregator: any, address: string, SPACING = 24) {
    throw new Error(`Not implemented yet`);
  }

  prettyPrintPermissions(permission: any, address: string, SPACING = 24) {
    throw new Error(`Not implemented yet`);
  }

  prettyPrintLease(
    lease: any,
    address: string,
    balance?: number,
    SPACING = 24
  ) {
    throw new Error(`Not implemented yet`);
  }

  prettyPrintJob(
    job: any,
    address: string,
    tasks: Array<OracleJob.ITask>,
    label?: string,
    SPACING = 24
  ) {
    throw new Error(`Not implemented yet`);
  }

  prettyPrintJobs(
    jobs: Array<{
      address: string;
      data: any;
      tasks: Array<OracleJob.ITask>;
    }>,
    SPACING = 24
  ) {
    throw new Error(`Not implemented yet`);
  }

  // prettyPrintAggregatorAccounts(accounts: AggregatorAccounts, SPACING = 24) {
  //   this.logger.info(prettyPrintAggregatorAccounts(accounts, SPACING));
  // }

  prettyPrintOracle(
    oracle: any,
    address: string,
    balance?: number,
    SPACING = 24
  ) {
    throw new Error(`Not implemented yet`);
  }

  prettyPrintQueue(queue: any, address: string, SPACING = 24) {
    throw new Error(`Not implemented yet`);
  }

  prettyPrintCrank(crank: any, address: string, SPACING = 24) {
    throw new Error(`Not implemented yet`);
  }

  prettyPrintSbstate(programState: any, address: string, SPACING = 24) {
    throw new Error(`Not implemented yet`);
  }

  // async printAccount(
  //   address: string,
  //   accountInfo: AccountInfo<Buffer>,
  //   jsonFlag?: boolean,
  //   _accountType?: SwitchboardAccountType
  // ) {
  //   const accountType =
  //     _accountType ?? SwitchboardProgram.getAccountType(accountInfo);
  //   if (!accountType) {
  //     throw new Error(`Not a valid Switchboard account`);
  //   }

  //   switch (accountType) {
  //     case "Aggregator": {
  //       const account = new AggregatorAccount(this.program, publicKey);
  //       const accounts = await account.fetchAccounts();

  //       if (jsonFlag) {
  //         return accounts;
  //       }

  //       this.logger.info(prettyPrintAggregatorAccounts(accounts));
  //       return;
  //     }

  //     case "Job": {
  //       const job = types.JobAccountData.decode(accountInfo.data);
  //       const oracleJob = OracleJob.decodeDelimited(job.data);

  //       if (jsonFlag) {
  //         return {
  //           publicKey: publicKey.toBase58(),
  //           data: job.toJSON(),
  //           tasks: oracleJob.tasks,
  //         };
  //       }

  //       this.logger.info(prettyPrintJob(job, publicKey, oracleJob.tasks));
  //       return;
  //     }

  //     case "Permission": {
  //       const permission = types.PermissionAccountData.decode(accountInfo.data);

  //       if (jsonFlag) {
  //         return {
  //           publicKey: publicKey.toBase58(),
  //           data: permission.toJSON(),
  //         };
  //       }

  //       this.logger.info(prettyPrintPermissions(permission, publicKey));
  //       return;
  //     }

  //     case "Lease": {
  //       const lease = types.LeaseAccountData.decode(accountInfo.data);
  //       const leaseAccount = new LeaseAccount(this.program, publicKey);
  //       const balance = await leaseAccount.fetchBalance(lease.escrow);

  //       if (jsonFlag) {
  //         return {
  //           publicKey: publicKey.toBase58(),
  //           data: lease.toJSON(),
  //           balance: balance,
  //         };
  //       }

  //       this.logger.info(prettyPrintLease(lease, publicKey));
  //       return;
  //     }

  //     case "Queue": {
  //       const queue = types.OracleQueueAccountData.decode(accountInfo.data);

  //       if (jsonFlag) {
  //         return {
  //           publicKey: publicKey.toBase58(),
  //           data: queue.toJSON(),
  //         };
  //       }

  //       this.logger.info(prettyPrintQueue(queue, publicKey));
  //       return;
  //     }

  //     case "Crank": {
  //       const crank = types.CrankAccountData.decode(accountInfo.data);

  //       if (jsonFlag) {
  //         return {
  //           publicKey: publicKey.toBase58(),
  //           data: crank.toJSON(),
  //         };
  //       }

  //       this.logger.info(prettyPrintCrank(crank, publicKey));
  //       return;
  //     }

  //     case "Vrf": {
  //       const vrf = types.VrfAccountData.decode(accountInfo.data);
  //       const vrfAccount = new VrfAccount(this.program, publicKey);
  //       const accounts = await vrfAccount.fetchAccounts(vrf);

  //       if (jsonFlag) {
  //         return accounts;
  //       }

  //       this.logger.info(prettyPrintVrfAccounts(accounts));
  //     }
  //   }
  // }
}
