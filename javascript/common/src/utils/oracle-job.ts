import type { IOracleJob } from '../protos.js';
import { OracleJob } from '../protos.js';

import { NonEmptyArrayUtils } from './index.js';

import { Buffer } from 'buffer';

class OracleJobError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OracleJobError';
    Object.setPrototypeOf(this, OracleJobError.prototype);
  }
}

/**
 * Normalizes and validates an OracleJob definition
 *
 * @param job - OracleJob definition in various formats:
 *   - String: JSON with optional comments
 *   - IOracleJob: Protocol buffer object
 *   - Record: Plain object with tasks array
 * @returns A validated OracleJob instance
 * @throws {OracleJobError} If validation fails or job is invalid
 *
 * @example
 * ```typescript
 * // From JSON string with comments
 * const job1 = normalizeOracleJob(`{
 *   // Fetch BTC price
 *   "tasks": [
 *     {"httpTask": {"url": "https://api.coinbase.com/v2/prices/BTC-USD/spot"}}
 *   ]
 * }`);
 *
 * // From plain object
 * const job2 = normalizeOracleJob({
 *   tasks: [
 *     {httpTask: {url: "https://api.coinbase.com/v2/prices/BTC-USD/spot"}}
 *   ]
 * });
 * ```
 *
 * @remarks
 * - Handles JSON strings with both inline (//) and block (/* *\/) comments
 * - Validates task array existence and non-emptiness
 * - Performs basic OracleJob schema validation
 * - Uses regex pattern from https://regex101.com/r/B8WkuX/1 for comment stripping
 */
export function normalizeOracleJob(
  data: string | IOracleJob | Record<string, unknown>
): OracleJob {
  const parseJobObject = (jobData: object) => {
    if (!jobData) {
      throw new OracleJobError(`No job data provided: ${jobData}`);
    } else if (!('tasks' in jobData)) {
      throw new OracleJobError('"tasks" property is required');
    } else if (!NonEmptyArrayUtils.safeValidate(jobData.tasks as unknown[])) {
      throw new OracleJobError('"tasks" property must be a non-empty array');
    }
    return OracleJob.fromObject(jobData);
  };
  const parseJobString = (jobString: string) => {
    // Strip comments using regex from https://regex101.com/r/B8WkuX/1
    const cleanJson = jobString.replace(
      /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g,
      ''
    );
    return parseJobObject(JSON.parse(cleanJson));
  };
  return typeof data === 'string' ? parseJobString(data) : parseJobObject(data);
}

/**
 * Encodes an OracleJob definition into a binary format
 *
 * @param data - OracleJob definition in various formats:
 *   - String: JSON with optional comments
 *   - IOracleJob: Protocol buffer object
 *   - Record: Plain object with tasks array
 * @returns Serialized OracleJob as Buffer
 * @throws {OracleJobError} If validation or encoding fails
 *
 * @example
 * ```typescript
 * // From JSON string
 * const encoded1 = encodeOracleJob(`{
 *   "tasks": [
 *     {"httpTask": {"url": "https://api.coinbase.com/v2/prices/BTC-USD/spot"}}
 *   ]
 * }`);
 *
 * // From plain object
 * const encoded2 = encodeOracleJob({
 *   tasks: [
 *     {httpTask: {url: "https://api.coinbase.com/v2/prices/BTC-USD/spot"}}
 *   ]
 * });
 * ```
 *
 * @remarks
 * - Uses normalizeOracleJob() for initial validation and normalization
 * - Encodes using Protocol Buffers delimited format
 * - Returns a Node.js Buffer suitable for blockchain transactions
 */
export function serializeOracleJob(
  data: string | IOracleJob | Record<string, unknown>
): Buffer {
  const job = normalizeOracleJob(data);
  return Buffer.from(OracleJob.encodeDelimited(job).finish());
}

/**
 * Deserializes an OracleJob from on-chain buffer data
 *
 * @param data - Serialized OracleJob data as Buffer or Uint8Array
 * @returns A decoded OracleJob instance
 * @throws {Error} If deserialization fails or data is invalid
 *
 * @example
 * ```typescript
 * // From Buffer
 * const buffer = Buffer.from('...'); // serialized job data
 * const job1 = decodeOracleJob(buffer);
 *
 * // From Uint8Array
 * const uint8Array = new Uint8Array([...]); // serialized job data
 * const job2 = decodeOracleJob(uint8Array);
 * ```
 *
 * @remarks
 * - Uses Protocol Buffers delimited format decoding
 * - Accepts both Node.js Buffer and Uint8Array formats
 * - Commonly used when reading OracleJobs from blockchain data
 */
export function deserializeOracleJob(data: Buffer | Uint8Array): OracleJob {
  return OracleJob.decodeDelimited(data);
}
