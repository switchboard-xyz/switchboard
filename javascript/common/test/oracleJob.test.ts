import { OracleJob } from "../src/index.js";

import { expect } from "chai";

const yaml = `
tasks:
  - httpTask:
      url: https://api.gateio.ws/api/v4/spot/tickers?currency_pair=BTC_USDT
  - medianTask:
      tasks:
        - jsonParseTask:
            path: $.bid
        - jsonParseTask:
            path: $.ask
        - jsonParseTask:
            path: $.last
`.trim();

const json = {
  tasks: [
    {
      httpTask: {
        url: "https://api.gateio.ws/api/v4/spot/tickers?currency_pair=BTC_USDT",
      },
    },
    {
      medianTask: {
        tasks: [
          { jsonParseTask: { path: "$.bid" } },
          { jsonParseTask: { path: "$.ask" } },
          { jsonParseTask: { path: "$.last" } },
        ],
      },
    },
  ],
};
const oracleJob = OracleJob.create(json);

describe("OracleJob Tests", () => {
  describe("JSON", () => {
    it("OracleJob.toJSON", () => {
      expect(oracleJob.toJSON()).deep.equal(json);
    });
  });
  describe("YAML", () => {
    it("OracleJob.toYaml", () => {
      expect(oracleJob.toYaml().trim()).deep.equal(yaml);
    });

    it("OracleJob.fromYaml", () => {
      expect(OracleJob.fromYaml(yaml).toJSON()).deep.equal(json);
    });

    it("Accesses child properties", () => {
      const bufferParserType = (iTask: OracleJob) => {};

      expect(bufferParserType).not.throw();
    });
  });
});
