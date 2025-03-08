import { IxFromHex } from "./utils/instructions.js";
import { decodeString } from "./utils/string.js";
import type { IOracleJob, OracleJob } from "./protos.js";

import type { TransactionInstruction } from "@solana/web3.js";
import axios from "axios";
import bs58 from "bs58";

/**
 *  The response from the gateway after fetching signatures.
 *  Variables are snake_case for serialization.
 */
export type FeedEvalResponse = {
  /**
   *  Hex encoded oracle pubkey
   */
  oracle_pubkey: string;
  /**
   *  Hex encoded queue pubkey
   */
  queue_pubkey: string;
  /**
   *  Hex encoded oracle signing pubkey
   */
  oracle_signing_pubkey: string;
  /**
   *  Hex encoded feed id
   */
  feed_hash: string;
  /**
   *  Hex encoded blockhash/slothash the response was signed with.
   */
  recent_hash: string;
  /**
   *  Errors encountered while fetching feed value
   */
  failure_error: string;
  /**
   *  Feed values derived
   */
  success_value: string;
  /**
   *  Signed message of the result and blockhash
   */
  msg: string;
  /**
   *  Oracle signature of the result and blockhash
   *
   *  Sha256(success_feed_hashes || results || slothash)
   */
  signature: string;
  recovery_id: number;

  /**
   *  If the feed fetch failed, get other recent successes
   */
  recent_successes_if_failed: Array<FeedEvalResponse>;

  /**
   * Timestamp marking when the result was fetched
   */
  timestamp?: number;
};

export type CrossbarFetchResponse = {
  feedHash: string;
  queueHex: string;
  jobs: IOracleJob[];
};

export type CrossbarSimulateResponse = {
  feedHash: string;
  results: (number | string)[];
  receipts: any[];
};

/**
 * The response from the gateway after fetching signatures.
 */
export type EVMResult = FeedEvalResponse & {
  /**
   *  The result of the feed evaluation
   */
  result: number;
};

export class CrossbarClient {
  readonly crossbarUrl: string;
  readonly verbose: boolean;

  // feed hash -> crossbar response
  readonly feedCache: Map<string, CrossbarFetchResponse> = new Map();

  static default(verbose?: boolean) {
    return new CrossbarClient("https://crossbar.switchboard.xyz", verbose);
  }

  constructor(crossbarUrl: string, verbose?: boolean) {
    this.crossbarUrl = new URL(crossbarUrl).origin;
    this.verbose = !!verbose;
  }

  /**
   * GET /fetch/:feedHash
   * Fetch data from the crossbar using the provided feedHash
   * @param {string} feedHash - The hash of the feed to fetch data for
   * @returns {Promise<{feedHash: string; queueHex: string; jobs: IOracleJob[];}} - The data fetched from the crossbar
   */
  async fetch(feedHash: string): Promise<{
    feedHash: string;
    queueHex: string;
    jobs: IOracleJob[];
  }> {
    try {
      // Check if the feedHash is already in the cache
      const cached = this.feedCache.get(feedHash);
      if (cached) return cached;

      // Fetch the data from the crossbar
      const response = await axios
        .get(`${this.crossbarUrl}/fetch/${feedHash}`)
        .then((resp) => resp.data);

      // Cache the response on the crossbar instance
      this.feedCache.set(feedHash, response);

      return response;
    } catch (err) {
      if (!axios.isAxiosError(err)) throw err;

      const response = err.response;
      if (!response) throw err;

      // If response is outside of the 200 range, log the status and throw an error.
      if (this.verbose) console.error(`${response.status}: ${response.data}`);
      throw new Error(`Bad Crossbar fetch status: ${response.status}`);
    }
  }

  /**
   * POST /store
   * Store oracle jobs on the crossbar, associated with a queue address
   * @param {string} queueAddress - The address of the queue
   * @param {IOracleJob[]} jobs - The oracle jobs to store
   * @returns {Promise<{ cid: string; feedHash: string; queueHex: string }>} - The stored data information
   */
  async store(
    queueAddress: string,
    jobs: IOracleJob[]
  ): Promise<{ cid: string; feedHash: string; queueHex: string }> {
    try {
      // Try to decode the queueAddress to a Buffer so that we can send it in the expected format,
      // base58, to the Crossbar node.
      const queue = decodeString(queueAddress);
      if (!queue) throw new Error(`Unable to parse queue: ${queueAddress}`);

      return await axios
        .post(
          `${this.crossbarUrl}/store`,
          { queue: bs58.encode(queue), jobs },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((resp) => {
          if (resp.status === 200) return resp.data;
          throw new Error(`Bad Crossbar store response: ${resp.status}`);
        });
    } catch (err) {
      if (!axios.isAxiosError(err)) throw err;

      const response = err.response;
      if (!response) throw err;

      if (this.verbose) console.error(`${response.status}: ${response.data}`);
      throw new Error(`Bad Crossbar store response: ${response.status}`);
    }
  }

  /**
   * GET /simulate/:feedHashes
   * Simulate fetching feed results from the crossbar using feed hashes
   * @param {string[]} feedHashes - The hashes of the feeds to simulate
   * @returns {Promise<CrossbarSimulateResponse[]>} - The simulated feed results
   */
  async simulateFeeds(
    feedHashes: string[]
  ): Promise<CrossbarSimulateResponse[]> {
    try {
      if (!feedHashes || feedHashes.length === 0)
        throw new Error("At least one feed is required");

      const feedsParam = feedHashes.join(",");
      return await axios
        .get(`${this.crossbarUrl}/simulate/${feedsParam}`)
        .then((resp) => resp.data);
    } catch (err) {
      if (!axios.isAxiosError(err)) throw err;

      const response = err.response;
      if (!response) throw err;

      if (this.verbose) console.error(`${response.status}: ${response.data}`);
      throw new Error(`Bad Crossbar simulateFeed response: ${response.status}`);
    }
  }

  /**
   * GET /updates/solana/:network/:feedpubkeys
   * Fetch updates for Solana network feeds from the crossbar
   * @param {string} network - The Solana network to fetch updates for
   * @param {string[]} feedpubkeys - The public keys of the feeds to fetch updates for
   * @param {number} [numSignatures] - The number of signatures to fetch (optional)
   * @returns {Promise<{ success: boolean; pullIx: TransactionInstruction; responses: { oracle: string; result: number | null; errors: string }[]; lookupTables: string[] }[]>} - The updates for the specified feeds
   */
  async fetchSolanaUpdates(
    network: string,
    feedpubkeys: string[],
    numSignatures?: number
  ): Promise<
    {
      success: boolean;
      pullIx: TransactionInstruction;
      responses: { oracle: string; result: number | null; errors: string }[];
      lookupTables: string[];
    }[]
  > {
    try {
      if (!network) throw new Error("Network is required");
      if (!feedpubkeys || feedpubkeys.length === 0)
        throw new Error("At least one feed is required");

      const feedsParam = feedpubkeys.join(",");
      const response = await axios
        .get(`${this.crossbarUrl}/updates/solana/${network}/${feedsParam}`, {
          params: { numSignatures },
        })
        .then((resp) => resp.data);

      // Convert pullIx from hex to TransactionInstruction using IxFromHex
      const updates = response.map((update: any) => ({
        ...update,
        pullIx: IxFromHex(update.pullIx),
      }));

      return updates;
    } catch (err) {
      if (!axios.isAxiosError(err)) throw err;

      const response = err.response;
      if (!response) throw err;

      if (this.verbose) console.error(`${response.status}: ${response.data}`);
      throw new Error(
        `Bad Crossbar fetchSolanaUpdates response: ${response.status}`
      );
    }
  }

  /**
   * GET /simulate/solana/:network/:feedpubkeys
   * Simulate fetching Solana feed results from the crossbar
   * @param {string} network - The Solana network to simulate
   * @param {string[]} feedpubkeys - The public keys of the feeds to simulate
   * @returns {Promise<{ feed: string; feedHash: string; results: number[] }[]>} - The simulated feed results
   */
  async simulateSolanaFeeds(
    network: string,
    feedpubkeys: string[]
  ): Promise<{ feed: string; feedHash: string; results: number[] }[]> {
    try {
      if (!network) throw new Error("Network is required");
      if (!feedpubkeys || feedpubkeys.length === 0)
        throw new Error("At least one feed is required");

      const feedsParam = feedpubkeys.join(",");
      return await axios
        .get(`${this.crossbarUrl}/simulate/solana/${network}/${feedsParam}`)
        .then((resp) => resp.data);
    } catch (err) {
      if (!axios.isAxiosError(err)) throw err;

      const response = err.response;
      if (!response) throw err;

      if (this.verbose) console.error(`${response.status}: ${response.data}`);
      throw new Error(
        `Bad Crossbar simulateSolanaFeeds response: ${response.status}`
      );
    }
  }

  /**
   * GET /updates/evm/:chainId/:aggregatorIds
   * Fetch updates for EVM network feeds from the crossbar
   * @param param0 - The chain ID and aggregator IDs to fetch updates for
   * @returns Promise<{ results: EVMResult[]; encoded: string[] }> - The updates for the specified feeds
   */
  async fetchEVMResults({
    chainId,
    aggregatorIds,
  }: {
    chainId: number;
    aggregatorIds: string[];
  }): Promise<{ results: EVMResult[]; encoded: string[] }> {
    try {
      if (!chainId) throw new Error("Chain ID is required");
      if (!aggregatorIds || aggregatorIds.length === 0)
        throw new Error("At least one feed is required");

      const feedsParam = aggregatorIds.join(",");
      return await axios
        .get(`${this.crossbarUrl}/updates/evm/${chainId}/${feedsParam}`)
        .then((resp) => resp.data);
    } catch (err) {
      if (!axios.isAxiosError(err)) throw err;

      const response = err.response;
      if (!response) throw err;

      if (this.verbose) console.error(`${response.status}: ${response.data}`);
      throw new Error(
        `Bad Crossbar fetchEVMUpdates response: ${response.status}`
      );
    }
  }

  /**
   * GET /simulate/evm/:network/:aggregatorIds
   * Simulate fetching Solana feed results from the crossbar
   * @param {string} network - The Solana network to simulate
   * @param {string[]} aggregatorIds - The public keys of the feeds to simulate
   * @returns {Promise<{ feed: string; feedHash: string; results: number[] }[]>} - The simulated feed results
   */
  async simulateEVMFeeds(
    network: number,
    aggregatorIds: string[]
  ): Promise<{ aggregatorId: string; feedHash: string; results: number[] }[]> {
    try {
      if (!network) throw new Error("Network is required");
      if (!aggregatorIds || aggregatorIds.length === 0)
        throw new Error("At least one feed is required");

      const feedsParam = aggregatorIds.join(",");
      return await axios
        .get(`${this.crossbarUrl}/simulate/evm/${network}/${feedsParam}`)
        .then((resp) => resp.data);
    } catch (err) {
      if (!axios.isAxiosError(err)) throw err;

      const response = err.response;
      if (!response) throw err;

      if (this.verbose) console.error(`${response.status}: ${response.data}`);
      throw new Error(
        `Bad Crossbar simulateEVMFeeds response: ${response.status}`
      );
    }
  }

  /**
   * GET /randomness/evm/:chainId/:randomnessId
   * @param param0 - The chain ID and randomness ID to resolve
   */
  async resolveEVMRandomness({
    chainId,
    randomnessId,
  }: {
    chainId: number;
    randomnessId: string;
  }): Promise<{
    encoded: string;
    response: {
      signature: string;
      recovery_id: number;
      value: string;
    };
  }> {
    try {
      return await axios
        .get(`${this.crossbarUrl}/randomness/evm/${chainId}/${randomnessId}`)
        .then((resp) => resp.data);
    } catch (err) {
      if (!axios.isAxiosError(err)) throw err;

      const response = err.response;
      if (!response) throw err;

      if (this.verbose) console.error(`${response.status}: ${response.data}`);
      throw new Error(
        `Bad Crossbar resolveEVMRandomness response: ${response.status}`
      );
    }
  }
}
