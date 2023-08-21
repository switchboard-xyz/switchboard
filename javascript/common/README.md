<div align="center">
  <a href="#">
    <img src="https://github.com/switchboard-xyz/core-sdk/raw/main/website/static/img/icons/switchboard/avatar.png" />
  </a>

  <h1>@switchboard-xyz/common</h1>

  <p>Contains the OracleJob protobufs and other types and utilities shared across chains.</p>

  <p>
	<a href="https://www.npmjs.com/package/@switchboard-xyz/common">
      <img alt="NPM Badge" src="https://img.shields.io/github/package-json/v/switchboard-xyz/core-sdk?color=red&filename=javascript%2Fcommon%2Fpackage.json&label=%40switchboard-xyz%2Fcommon&logo=npm" />
    </a>
  </p>

  <p>
    <a href="https://discord.gg/switchboardxyz">
      <img alt="Discord" src="https://img.shields.io/discord/841525135311634443?color=blueviolet&logo=discord&logoColor=white" />
    </a>
    <a href="https://twitter.com/switchboardxyz">
      <img alt="Twitter" src="https://img.shields.io/twitter/follow/switchboardxyz?label=Follow+Switchboard" />
    </a>
  </p>

  <h4>
    <strong>Npm: </strong><a href="https://www.npmjs.com/package/@switchboard-xyz/common">npmjs.com/package/@switchboard-xyz/common</a>
  </h4>
  <h4>
    <strong>Typedocs: </strong><a href="https://docs.switchboard.xyz/api/@switchboard-xyz/common">docs.switchboard.xyz/api/@switchboard-xyz/common</a>
  </h4>
</div>

## Install

```bash
npm i --save @switchboard-xyz/common
```

## Usage

### Create an OracleJob

```ts
import { OracleJob, serializeOracleJob } from "@switchboard-xyz/common";

const oracleJob: OracleJob = serializeOracleJob({
  tasks: [
    {
      httpTask: {
        url: "https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
      },
    },
    {
      jsonParseTask: {
        path: "$.price",
      },
    },
    {
      multiplyTask: {
        /* Mainnet USDT/USD Feed */
        aggregatorPubkey: "ETAaeeuQBwsh9mC2gCov9WdhJENZuffRMXY2HgjCcSL9",
      },
    },
  ],
});
```

### Simulate an OracleJob

```ts
import { simulateOracleJobs } from "@switchboard-xyz/common";

const result = await simulateOracleJobs([oracleJob]);
console.log(result);
```
