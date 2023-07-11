import { CliBaseCommand as BaseCommand } from "../BaseCommand";
import type { IBaseChain } from "../types/chain";

import type { NearNetwork } from ".";

import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import {
  Big,
  BN,
  OracleJob,
  SwitchboardDecimal,
  toUtf8,
} from "@switchboard-xyz/common";
import type { types } from "@switchboard-xyz/near.js";
import {
  AggregatorAccount,
  CrankAccount,
  JobAccount,
  loadNear,
  MAINNET_PROGRAM_ID,
  OracleAccount,
  QueueAccount,
  SwitchboardPermission,
  SwitchboardProgram,
  TESTNET_PROGRAM_ID,
} from "@switchboard-xyz/near.js";
import bs58 from "bs58";
import { Account, connect } from "near-api-js";
import { homedir } from "os";

export abstract class NearBaseCommand extends BaseCommand
  implements IBaseChain {
  static flags = {
    ...BaseCommand.flags,
    networkId: Flags.string({
      description: "Near network ID to connect to",
      options: ["testnet", "mainnet", "localnet"],
      default: "testnet",
    }),
    programId: Flags.string({
      description: "Switchboard programId on the selected Near networkId",
    }),
    rpcUrl: Flags.string({
      char: "u",
      description: "alternate RPC url",
    }),
    nearCredentialsDir: Flags.string({
      description:
        "Alternative directory for near credentials. Defaults to ~/.near-credentials",
      required: false,
      default: `${homedir()}/.near-credentials`,
    }),
  };

  public hasSigner = false;

  public networkId: NearNetwork;

  public rpcUrl: string;

  public programId: string;

  public program: SwitchboardProgram;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this.networkId = this.getNetwork((flags as any).networkId);
    this.rpcUrl = this.getRpcUrl(this.networkId, (flags as any).rpcUrl);
    this.programId = this.getProgramId(
      this.networkId,
      (flags as any).programId
    );

    this.program = await SwitchboardProgram.loadReadOnly(
      this.networkId,
      this.rpcUrl
    );

    this.logConfig({
      network: this.networkId,
      rpc: this.rpcUrl,
    });
  }

  toUrl(txnHash: string): string {
    return `https://explorer.${this.networkId}.near.org/transactions/${txnHash}`;
  }

  getNetwork(networkIdFlag: string): NearNetwork {
    if (
      networkIdFlag !== "testnet" &&
      networkIdFlag !== "mainnet" &&
      networkIdFlag !== "localnet"
    ) {
      throw new Error(`--networkId must be 'testnet', 'mainnet', or 'local'`);
    }

    return networkIdFlag;
  }

  getRpcUrl(networkId: NearNetwork, rpcUrlFlag?: string): string {
    if (rpcUrlFlag) {
      return rpcUrlFlag;
    }

    const rpcUrl = this.ctx.getRpcUrl("near", networkId);
    if (!rpcUrl) {
      throw new Error(
        `Failed to get Near RPC URL for network ${networkId}. Try providing the --rpcUrl flag`
      );
    }

    return rpcUrl;
  }

  getProgramId(networkId: string, programId?: string): string {
    if (programId) {
      return programId;
    }

    switch (networkId) {
      case "mainnet":
        return MAINNET_PROGRAM_ID;
      case "testnet":
        return TESTNET_PROGRAM_ID;
      default:
        throw new Error(
          `Failed to find Aptos ProgramID. Try passing in --programID instead`
        );
    }
  }

  deserializeJobData(jobData: Uint8Array): OracleJob {
    return OracleJob.decodeDelimited(jobData);
  }

  normalizeAccountData(address: Uint8Array, data: any): Record<string, any> {
    return JSON.parse(
      JSON.stringify(
        {
          address: address,
          addressBase58: this.encodeAddress(address),
          ...data,
        },
        this.jsonReplacers,
        2
      )
    );
  }

  // async loadNear(
  //   networkId: NearNetwork,
  //   rpcUrl: string,
  //   credentialDir: string
  // ): Promise<Near> {
  //   const keystore = new keyStores.UnencryptedFileSystemKeyStore(credentialDir);
  //   this.near = await loadNear(networkId, keystore, rpcUrl);
  //   return this.near;
  // }

  getSigner(nearNamedAccount: string): Account {
    // TODO: Support loading secrets from GCP & AWS
    if (!this.program) {
      throw new Error(
        `Need to load the SwitchboardProgram before loading the signer`
      );
    }

    return new Account(this.program.connection, nearNamedAccount);
  }

  isBase58(value: string): boolean {
    return /^[1-9A-HJ-NP-Za-km-z]*$/.test(value);
  }

  // convert a near address to a Uint8Array
  // accepts [00,01,...] or Base58 econding
  parseAddress(address: string | Array<number>): Uint8Array {
    if (Array.isArray(address)) {
      return new Uint8Array(address);
    }

    if (this.isBase58(address)) {
      return bs58.decode(address);
    }

    try {
      return new Uint8Array(JSON.parse(address));
    } catch {}

    throw new Error(`Failed to convert near address to Uint8Array, ${address}`);
  }

  encodeAddress(address: Uint8Array): string {
    return bs58.encode(address);
  }

  jsonReplacers(key: any, value: any) {
    const uint8ArrayKeys = ["address", "queue", "granter", "grantee", "crank"];
    const utf8ArrayKeys = ["name", "metadata"];

    if (key === "permissions" && typeof value === "number") {
      return SwitchboardPermission[value].toString();
    }

    if (key === "address") {
      // for some reason Array.isArray(value) is not working for permission address
      return `[${value.toString()}]`;
    }

    // if (key === "jobs" && Array.isArray(value)) {
    //   return value.map((a) => base58.encode(a));
    // }

    if (typeof value === "string") {
      return value;
    }

    if (typeof value === "number") {
      return value;
    }

    if (typeof value === "boolean") {
      return value.toString();
    }

    if (uint8ArrayKeys.includes(key) && Array.isArray(value)) {
      return bs58.encode(value);
    }

    if (utf8ArrayKeys.includes(key) && Array.isArray(value)) {
      return toUtf8(Buffer.from(value));
    }

    if (value instanceof Big) {
      return value.toString();
    }

    if (BN.isBN(value)) {
      return value.toString(10);
    }

    if ((key === "hash" || key === "jobs_checksum") && Array.isArray(value)) {
      return Buffer.from(value).toString("hex");
    }

    if (
      value &&
      (("scale" in value && "mantissa" in value) ||
        value instanceof SwitchboardDecimal)
    ) {
      return new SwitchboardDecimal(value.mantissa, value.scale)
        .toBig()
        .toString();
    }

    return value;
  }

  async loadQueue(
    address: string | Array<number>
  ): Promise<[QueueAccount, types.OracleQueueView]> {
    const account = new QueueAccount({
      program: this.program,
      address: this.parseAddress(address),
    });
    const data = await account.loadData();

    return [account, data];
  }

  async loadCrank(
    address: string | Array<number>
  ): Promise<[CrankAccount, types.CrankView]> {
    const account = new CrankAccount({
      program: this.program,
      address: this.parseAddress(address),
    });
    const data = await account.loadData();

    return [account, data];
  }

  async loadAggregator(
    address: string | Array<number>
  ): Promise<[AggregatorAccount, types.AggregatorView]> {
    const account = new AggregatorAccount({
      program: this.program,
      address: this.parseAddress(address),
    });
    const data = await account.loadData();

    return [account, data];
  }

  async loadOracle(
    address: string | Array<number>
  ): Promise<[OracleAccount, types.Oracle]> {
    const account = new OracleAccount({
      program: this.program,
      address: this.parseAddress(address),
    });
    const data = await account.loadData();

    return [account, data];
  }

  async loadJob(
    address: string | Array<number>
  ): Promise<[JobAccount, types.Job, OracleJob]> {
    const account = new JobAccount({
      program: this.program,
      address: this.parseAddress(address),
    });
    const data = await account.loadData();

    const oracleJob = this.deserializeJobData(data.data);

    return [account, data, oracleJob];
  }
}
