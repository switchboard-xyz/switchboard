import { PublicKey } from "@solana/web3.js";
import { OracleJob } from "@switchboard-xyz/common";
import { HexString } from "aptos";

/** Interfaces each chain must support */
export interface IBaseChain {
  getRpcUrl(...args: any[]): string;
  getNetwork(...args: any[]): string;
  getProgramId(...args: any[]): HexString | string | PublicKey;
  jsonReplacers?: (key: any, value: any) => any;
  deserializeJobData(jobData: Uint8Array): OracleJob;
  toUrl(...args: any[]): string;

  loadQueue(address: string): Promise<[any, any]>;
  loadAggregator(address: string): Promise<[any, any]>;
  loadCrank(address: string): Promise<[any, any]>;
  loadOracle(address: string): Promise<[any, any]>;
  loadJob(address: string): Promise<[any, any, OracleJob]>;
}
