import type { IOracleJob } from '../src/index.js';
import { CrossbarClient } from '../src/index.js';

import { PublicKey } from '@solana/web3.js';
import { expect } from 'chai';

const queue = 'FfD96yeXs4cxZshoPPSKhSPgVQxLAJUT3gefgh84m1Di';
const job: IOracleJob = {
  tasks: [{ valueTask: { value: 123 } }],
};

describe('CrossbarClient Tests', () => {
  const client = CrossbarClient.default(/* verbose= */ true);

  afterAll(async () => {});

  test('Storing a job.', async () => {
    const { cid, feedHash, queueHex } = await client.store(queue, [job]);
    expect(cid).to.eq(
      'bafkreifvrlnt2xdl5eubo5i5e6obpr7t3gyhdelb4n4pk6lvtxjdak6yve'
    );
    expect(feedHash).to.eq(
      '0xb58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9'
    );
    expect(queueHex).to.eq(
      '0xd9cd6a04191d6cd559a5276e69a79cc6f95555deeae498c3a2f8b3ee670287d1'
    );
  });

  test('Fetching from a feed hash (with `0x` prefix).', async () => {
    const { feedHash, queueHex, jobs } = await client.fetch(
      '0xb58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9'
    );
    expect(feedHash).to.eq(
      '0xb58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9'
    );
    expect(queueHex).to.eq(
      '0xd9cd6a04191d6cd559a5276e69a79cc6f95555deeae498c3a2f8b3ee670287d1'
    );
    expect(jobs).to.have.lengthOf(1);
    expect(jobs[0]).to.deep.equal(job);
  });

  test('Fetching from a feed hash (without `0x` prefix).', async () => {
    const { feedHash, queueHex, jobs } = await client.fetch(
      'b58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9'
    );
    expect(feedHash).to.eq(
      '0xb58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9'
    );
    expect(queueHex).to.eq(
      '0xd9cd6a04191d6cd559a5276e69a79cc6f95555deeae498c3a2f8b3ee670287d1'
    );
    expect(jobs).to.have.lengthOf(1);
    expect(jobs[0]).to.deep.equal(job);
  });

  test('Fetching Solana updates.', async () => {
    const network = 'devnet';
    const devnetProgramId = new PublicKey(
      'Aio4gaXjXzJNVLtzwtNVmSqGKpANtXhybbkhtAC94ji2'
    );

    const feeds = [
      // BTC Price Feed
      // https://ondemand.switchboard.xyz/solana/devnet/feed/FAmE211gC241L5YTAssfUT3h2dHcUygVGFbz2hHBKNWG
      'FAmE211gC241L5YTAssfUT3h2dHcUygVGFbz2hHBKNWG',
      // sui test
      // https://ondemand.switchboard.xyz/solana/devnet/feed/7XcCuTUtpw7ZvfohHvXfCp2GTG5RYmNAYMMdSdSMreC5
      '7XcCuTUtpw7ZvfohHvXfCp2GTG5RYmNAYMMdSdSMreC5',
    ];
    const numSignatures = 2;

    const updates = await client.fetchSolanaUpdates(
      network,
      feeds,
      /* payer= */ 'nXsE22JSmWYk7f4KtfjXVqCvGuaVXntdSbCKzdumzFv',
      numSignatures
    );

    expect(updates).to.be.an('array');
    expect(updates).to.have.lengthOf(feeds.length);

    updates.forEach(update => {
      expect(update).to.have.property('success').to.eq(true);
      expect(update)
        .to.have.property('pullIxns')
        .that.is.an('array')
        .with.lengthOf(2);
      expect(update.pullIxns[1])
        .to.have.property('programId')
        .that.is.instanceOf(PublicKey);
      expect(update.pullIxns[1].programId.toBase58()).to.equal(
        devnetProgramId.toBase58()
      );

      update.responses.forEach(response => {
        expect(response).to.have.property('oracle');
        expect(response).to.have.property('result');
      });

      expect(update).to.have.property('lookupTables').that.is.an('array');
    });
  }, 10_000);

  test('Simulating Solana feeds.', async () => {
    const network = 'devnet';
    const feeds = [
      'AXRydnjDeWUgR5VGFFqtzYv52u2MHqFCYcsHsnEgCD15',
      '7yQ4ae7XH4tdiXXbzdsycUjFEWAhonVXLcR1vreqGT3s',
    ];

    const simulationResults = await client.simulateSolanaFeeds(network, feeds);

    expect(simulationResults).to.be.an('array');
    expect(simulationResults).to.have.lengthOf(feeds.length);

    simulationResults.forEach(result => {
      expect(result)
        .to.have.property('feed')
        .that.is.a('string')
        .and.oneOf(feeds);
      expect(result).to.have.property('feedHash').that.is.a('string');
      expect(result)
        .to.have.property('results')
        .that.is.an('array')
        .with.length.greaterThan(0);
      result.results
        .map(value => Number(value))
        .forEach(val => expect(Number.isFinite(val)).to.be.true);
    });
  });

  test('Simulating from a feed hash (without `0x` prefix).', async () => {
    const feedhHashes = [
      'e2ba292a366ff6138ea8b66b12e49e74243816ad4edd333884acedcd0e0c2e9d',
    ];
    const results = await client.simulateFeeds(feedhHashes);
    expect(results).to.be.an('array');
    expect(results).to.have.lengthOf(feedhHashes.length);

    results.forEach(result => {
      expect(result)
        .to.have.property('feedHash')
        .that.is.a('string')
        .and.oneOf(feedhHashes);
      expect(result)
        .to.have.property('results')
        .that.is.an('array')
        .with.length.greaterThan(0);
      result.results
        .map(value => Number(value))
        .forEach(val => expect(Number.isFinite(val)).to.be.true);
    });
  });
});
