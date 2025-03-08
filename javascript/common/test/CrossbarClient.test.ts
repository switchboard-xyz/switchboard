import type { IOracleJob } from "../src/index.js";
import { CrossbarClient, OracleJob } from "../src/index.js";

import { PublicKey } from "@solana/web3.js";
import { expect } from "chai";

const queue = "FfD96yeXs4cxZshoPPSKhSPgVQxLAJUT3gefgh84m1Di";
const job: IOracleJob = {
  tasks: [{ valueTask: { value: 123 } }],
};

describe("CrossbarClient Tests", () => {
  const client = CrossbarClient.default(/* verbose= */ true);

  afterAll(async () => {});

  test("Storing a job.", async () => {
    const { cid, feedHash, queueHex } = await client.store(queue, [job]);
    expect(cid).to.eq(
      "bafkreifvrlnt2xdl5eubo5i5e6obpr7t3gyhdelb4n4pk6lvtxjdak6yve"
    );
    expect(feedHash).to.eq(
      "0xb58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9"
    );
    expect(queueHex).to.eq(
      "0xd9cd6a04191d6cd559a5276e69a79cc6f95555deeae498c3a2f8b3ee670287d1"
    );
  });

  test("Fetching from a feed hash (with `0x` prefix).", async () => {
    const { feedHash, queueHex, jobs } = await client.fetch(
      "0xb58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9"
    );
    expect(feedHash).to.eq(
      "0xb58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9"
    );
    expect(queueHex).to.eq(
      "0xd9cd6a04191d6cd559a5276e69a79cc6f95555deeae498c3a2f8b3ee670287d1"
    );
    expect(jobs).to.have.lengthOf(1);
    expect(jobs[0]).to.deep.equal(job);
  });

  test("Fetching from a feed hash (without `0x` prefix).", async () => {
    const { feedHash, queueHex, jobs } = await client.fetch(
      "b58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9"
    );
    expect(feedHash).to.eq(
      "0xb58adb3d5c6be92817751d279c17c7f3d9b0719161e378f579759dd2302bd8a9"
    );
    expect(queueHex).to.eq(
      "0xd9cd6a04191d6cd559a5276e69a79cc6f95555deeae498c3a2f8b3ee670287d1"
    );
    expect(jobs).to.have.lengthOf(1);
    expect(jobs[0]).to.deep.equal(job);
  });

  test("Fetching Solana updates.", async () => {
    const network = "devnet";
    const devnetProgramId = new PublicKey(
      "Aio4gaXjXzJNVLtzwtNVmSqGKpANtXhybbkhtAC94ji2"
    );

    const feeds = [
      "AXRydnjDeWUgR5VGFFqtzYv52u2MHqFCYcsHsnEgCD15",
      "7yQ4ae7XH4tdiXXbzdsycUjFEWAhonVXLcR1vreqGT3s",
    ];
    const numSignatures = 2;

    const updates = await client.fetchSolanaUpdates(
      network,
      feeds,
      numSignatures
    );

    expect(updates).to.be.an("array");
    expect(updates).to.have.lengthOf(feeds.length);

    updates.forEach((update, index) => {
      expect(update).to.have.property("success").to.eq(true);
      expect(update).to.have.property("pullIx").that.is.an("object");
      expect(update.pullIx)
        .to.have.property("programId")
        .that.is.instanceOf(PublicKey);
      expect(update.pullIx.programId.toBase58()).to.equal(
        devnetProgramId.toBase58()
      );

      update.responses.forEach((response) => {
        expect(response).to.have.property("oracle");
        expect(response).to.have.property("result");
      });

      expect(update).to.have.property("lookupTables").that.is.an("array");
    });
  });

  test("Simulating Solana feeds.", async () => {
    const network = "devnet";
    const feeds = [
      "AXRydnjDeWUgR5VGFFqtzYv52u2MHqFCYcsHsnEgCD15",
      "7yQ4ae7XH4tdiXXbzdsycUjFEWAhonVXLcR1vreqGT3s",
    ];

    const simulationResults = await client.simulateSolanaFeeds(network, feeds);

    expect(simulationResults).to.be.an("array");
    expect(simulationResults).to.have.lengthOf(feeds.length);

    simulationResults.forEach((result) => {
      expect(result)
        .to.have.property("feed")
        .that.is.a("string")
        .and.oneOf(feeds);
      expect(result).to.have.property("feedHash").that.is.a("string");
      expect(result)
        .to.have.property("results")
        .that.is.an("array")
        .with.length.greaterThan(0);
      result.results.forEach((value) => {
        expect(value).to.be.a("number");
      });
    });
  });

  test("Simulating from a feed hash (without `0x` prefix).", async () => {
    const feedhHashes = [
      "e2ba292a366ff6138ea8b66b12e49e74243816ad4edd333884acedcd0e0c2e9d",
    ];
    const results = await client.simulateFeeds(feedhHashes);
    console.log(results);
    expect(results).to.be.an("array");
    expect(results).to.have.lengthOf(feedhHashes.length);

    results.forEach((result) => {
      expect(result)
        .to.have.property("feedHash")
        .that.is.a("string")
        .and.oneOf(feedhHashes);
      expect(result)
        .to.have.property("results")
        .that.is.an("array")
        .with.length.greaterThan(0);
      result.results.forEach((value) => {
        expect(value).to.be.a("number");
      });
    });
  });
});
