import { decodeString, FeedHash, OracleJob } from "../src/index.js";

import assert from "assert";
import { expect } from "chai";

const base58string =
  "4CvkZMdWYmc53RwHbxwnQAVtZP66TfBGgDBKbEXS3yp1yhyJPPuQEUPDXxW79HFo";
const binanceBtcFeedHash =
  "0f762b759dca5b4421fba1cf6fba452cdf76fb9cc6d8183722a78358a8339d10";
const binanceBtcJob = OracleJob.create({
  tasks: [
    OracleJob.Task.create({
      httpTask: OracleJob.HttpTask.create({
        url: `https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT`,
      }),
    }),
    OracleJob.Task.create({
      jsonParseTask: OracleJob.JsonParseTask.create({ path: "$.price" }),
    }),
  ],
});

describe("FeedHash Tests", () => {
  describe("verify", () => {
    it("Validates successfully (lower-case)", () => {
      expect(FeedHash.validate(binanceBtcFeedHash)).equals(binanceBtcFeedHash);
    });

    it("Validates successfully (upper-case) and transforms to lower case", () => {
      expect(FeedHash.validate(binanceBtcFeedHash.toUpperCase())).equals(
        binanceBtcFeedHash
      );
    });

    it("Validates successfully and removes `0x` prefix", () => {
      expect(FeedHash.validate(`0x${binanceBtcFeedHash}`)).equals(
        binanceBtcFeedHash
      );
      expect(FeedHash.validate(`0X${binanceBtcFeedHash}`)).equals(
        binanceBtcFeedHash
      );
    });

    it("Throws when length isn't hex", () => {
      expect(() => FeedHash.validate(base58string)).to.throw();
    });

    it("Throws when length isn't 64", () => {
      expect(() =>
        FeedHash.validate(binanceBtcFeedHash.substring(0, 60))
      ).to.throw();
    });
  });

  describe("serialize", () => {
    it("FeedHash.serialize", () => {
      const serialized = FeedHash.serialize(binanceBtcFeedHash);
      expect(serialized.toString("hex")).deep.equal(binanceBtcFeedHash);
    });
  });

  describe("compute", () => {
    it("FeedHash.compute", () => {
      const computed = FeedHash.compute(
        /* queue= */ decodeString(
          "5Qv744yu7DmEbU669GmYRqL9kpQsyYsaVKdR8YiBMTaP"
        )!,
        /* jobs= */ [binanceBtcJob]
      ).toString("hex");
      expect(computed).deep.equal(binanceBtcFeedHash);
    });
  });
});
