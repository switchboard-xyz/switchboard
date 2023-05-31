import { CliBaseCommand as BaseCommand } from "../BaseCommand";
import { AwsProvider, FsProvider, GcpProvider } from "../providers";
import { IBaseChain } from "../types/chain";

import { Flags } from "@oclif/core";
import { Input } from "@oclif/parser";
import { OracleJob } from "@switchboard-xyz/common";

export abstract class EvmBaseCommand extends BaseCommand implements IBaseChain {
  static flags = {
    ...BaseCommand.flags,
    chain: Flags.string({
      description: "the evm chain to interact with",
      options: ["coredao", "arbitrum"],
      required: true,
      exclusive: ["chainId"],
    }),
    network: Flags.string({
      description: "the EVM network to connect to",
      options: ["mainnet", "testnet"],
      required: true,
      exclusive: ["chainId"],
    }),
    chainId: Flags.string({
      description: "the evm chain to interact with",
      options: ["coredao", "arbitrum"],
      required: true,
      exclusive: ["chain", "network"],
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

  public network: string;

  public rpcUrl: string;

  public programId: string;

  // public connection: Connection;

  // public program: SwitchboardProgram;

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
    // this.commitment = (flags as any).commitment ?? "confirmed";
    // this.connection = new Connection(this.rpcUrl, {
    //   commitment: (flags as any).commitment ?? "confirmed",
    // });

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

  getNetwork(clusterOption?: string, mainnetFlag?: string): string {
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

    if (mainnetFlag) {
      return "mainnet-beta";
    }

    return "devnet";
  }

  getRpcUrl(cluster: string, rpcUrlFlag?: string): string {
    if (rpcUrlFlag) {
      return rpcUrlFlag;
    }

    const rpcUrl = this.ctx.getRpcUrl("solana", cluster);
    if (!rpcUrl) {
      throw new Error(
        `Failed to get Evm RPC URL for cluster ${cluster}. Try providing the --rpcUrl flag`
      );
    }

    return rpcUrl;
  }

  getProgramId(cluster: string, programIdFlag: string): string {
    if (programIdFlag) {
      return programIdFlag;
    }

    // if (cluster === "mainnet-beta") {
    //   return SBV2_MAINNET_PID;
    // }

    // return SBV2_DEVNET_PID;

    throw new Error(`Not implemented yet`);
  }

  // async loadProgram(
  //   signer: Keypair = Keypair.fromSeed(new Uint8Array(32).fill(1))
  // ): Promise<SwitchboardProgram> {
  //   if (!this.connection) {
  //     throw new Error(
  //       `Need to load the connection before loading the Anchor program`
  //     );
  //   }

  //   if (!this.programId) {
  //     throw new Error(
  //       `Need to load the programId before loading the Anchor program`
  //     );
  //   }

  //   const program = await SwitchboardProgram.load(
  //     this.network,
  //     this.connection,
  //     signer,
  //     this.programId
  //   );

  //   return program;
  // }

  /** Load a keypair from a CLI flag and optionally check if it matches the expected account authority */
  // async loadKeypair(
  //   keypairPath: string,
  //   expectedPubkey?: PublicKey
  // ): Promise<Keypair> {
  //   const keypair = await loadKeypair(keypairPath);

  //   if (expectedPubkey && !expectedPubkey.equals(keypair.publicKey)) {
  //     throw new AuthorityMismatch();
  //   }

  //   return keypair;
  // }

  /** Load an authority from a CLI flag and optionally check if it matches the expected account authority */
  // async loadAuthority(
  //   authorityPath: string | unknown,
  //   expectedAuthority?: PublicKey
  // ): Promise<Keypair> {
  //   const authority: Keypair =
  //     typeof authorityPath === "string"
  //       ? await loadKeypair(authorityPath)
  //       : this.program.wallet.payer;

  //   if (expectedAuthority && !expectedAuthority.equals(authority.publicKey)) {
  //     throw new AuthorityMismatch();
  //   }

  //   return authority;
  // }

  mainnetCheck(): void {
    if (this.network === "mainnet-beta") {
      throw new Error(
        "cli@^2 is still in beta, mainnet is disabled for this command."
      );
    }
  }

  // async getSigner(keypairPath: string): Promise<Keypair> {
  //   const parseKeypairString = (fileString: string): Keypair => {
  //     // check if bytes
  //     const parsedFileString = fileString
  //       .trim()
  //       .replace(/\n/g, "")
  //       .replace(/\s/g, "");
  //     const bytesRegex = /^\[(\s)?\d+((\s)?,(\s)?\d+){31,}]/;
  //     if (bytesRegex.test(parsedFileString)) {
  //       return Keypair.fromSecretKey(
  //         new Uint8Array(JSON.parse(parsedFileString))
  //       );
  //     }

  //     try {
  //       return Keypair.fromSecretKey(
  //         new Uint8Array(JSON.parse(parsedFileString))
  //       );
  //     } catch {}

  //     throw new Error(`Failed to derive secret key from input file`);
  //   };

  //   const errors: any[] = [];

  //   // try loading keypair from filesystem
  //   try {
  //     const normalizedKeypairPath = this.normalizePath(keypairPath);
  //     const keypair = FsProvider.getSecret(
  //       normalizedKeypairPath,
  //       parseKeypairString
  //     );
  //     return keypair;
  //   } catch (error) {
  //     errors.push(error);
  //   }

  //   // try loading keypair from gcp secret manager
  //   try {
  //     const keypair = await GcpProvider.getSecret(
  //       keypairPath,
  //       parseKeypairString
  //     );
  //     return keypair;
  //   } catch (error) {
  //     errors.push(error);
  //   }

  //   // try loading keypair from aws secrets
  //   try {
  //     const keypair = await AwsProvider.getSecret(
  //       keypairPath,
  //       parseKeypairString
  //     );
  //     return keypair;
  //   } catch (error) {
  //     errors.push(error);
  //   }

  //   throw new Error(
  //     `Failed to load Evm keypair ${keypairPath}\n${errors
  //       .map((error) => (error as any).toString())
  //       .join("\n")}`
  //   );
  // }

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
