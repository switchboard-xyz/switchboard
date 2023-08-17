import type { PublicKey } from "@solana/web3.js";
import type { OracleJob } from "@switchboard-xyz/common";
import type { HexString } from "aptos";

/** Interfaces each chain must support */
export interface IBaseChain {
  getRpcUrl(...arguments_: any[]): string;
  getNetwork(...arguments_: any[]): string;
  getProgramId(...arguments_: any[]): HexString | string | PublicKey;
  jsonReplacers?: (key: any, value: any) => any;
  deserializeJobData(jobData: Uint8Array): OracleJob;
  toUrl(...arguments_: any[]): string;

  // loadQueue(address: string): Promise<[any, any]>;
  // loadAggregator(address: string): Promise<[any, any]>;
  // loadCrank(address: string): Promise<[any, any]>;
  // loadOracle(address: string): Promise<[any, any]>;
  // loadJob(address: string): Promise<[any, any, OracleJob]>;
}
