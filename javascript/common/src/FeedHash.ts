import { type IOracleJob, OracleJob } from './index.js';

import { Buffer } from 'buffer';
import { sha256 } from 'js-sha256';

type VerifiedFeed = {
  /**
   *  UTC timestamp of the verification.
   */
  verifiedAt: number;
  /**
   *  The wallet that verified this feed definition.
   */
  verifier: string;
  /**
   *  The address of the queue that the feed was verified on.
   */
  queueAddress: string;
  /**
   *  The jobs of this feed definition.
   */
  jobs: IOracleJob[];
};

export class FeedHash {
  /**
   *  Disable object instantiation.
   */
  private constructor() {}
  /**
   *  Validate that a provided string is indeed a valid feed hash.
   *
   *  To be a valid feed hash, the string should be a hex string that is 64 characters in length.
   *
   *  @returns the transformed feed hash (hex value) if valid.
   */
  static validate(feedHash: string): string {
    // Make the feed hash lower case and remove the optional '0x' prefix if necessary.
    const transformed = (() => {
      const lowerCase = feedHash.toLowerCase();
      return lowerCase.startsWith('0x') ? lowerCase.substring(2) : lowerCase;
    })();
    // Validate that the result is 64 characters long and lower-case hex.
    if (/^[a-f0-9]{64}$/.test(transformed)) return transformed;
    throw new Error(`FeedHash.validate failed: ${feedHash}`);
  }
  /**
   *  After validating {@linkcode feedHash}, return it as a {@linkcode Buffer}.
   *
   *  @returns Buffer
   */
  static serialize(feedHash: string): Buffer {
    const validated = FeedHash.validate(feedHash);
    return Buffer.from(validated, 'hex');
  }
  /**
   *  Given a feed definition (a list of jobs), produce the associated feed hash and return it as a
   *  buffer.
   */
  static compute(queue: Buffer, jobs: IOracleJob[]): Buffer {
    const hasher = sha256.create();
    hasher.update(queue);
    jobs.forEach((job: IOracleJob) => {
      hasher.update(OracleJob.encodeDelimited(job).finish());
    });
    return Buffer.from(hasher.digest());
  }

  /**
   *  Validate that {@linkcode feedHash} is ok and try to fetch a verified feed definition for it.
   *
   *  @returns VerifiedFeed
   *  @throws If {@linkcode feedHash} is invalid or if there is no associated verified feed data.
   */
  static async fetchVerified(feedHash: string): Promise<VerifiedFeed> {
    const validated = FeedHash.validate(feedHash);
    if (!validated) throw new Error('`feedHash` parameter is invalid.');

    // TODO: implement this function when we have a centralized place to load verified feeds from.
    throw new Error('NotImplemented');
  }
}
