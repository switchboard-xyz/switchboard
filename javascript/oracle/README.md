<div align="center">
  <a href="#">
    <img src="https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png" />
  </a>

  <h1>@switchboard-xyz/oracle</h1>

  <p>A Typescript wrapper for the Switchboard V2 oracle.</p>

  <p>
    <img alt="Test Status" src="https://github.com/switchboard-xyz/sbv2-solana/actions/workflows/solana-js-test.yml/badge.svg" />
	  <a href="https://www.npmjs.com/package/@switchboard-xyz/solana.js">
      <img alt="NPM Badge" src="https://img.shields.io/github/package-json/v/switchboard-xyz/sbv2-solana?color=red&filename=javascript%2Fsolana.js%2Fpackage.json&label=%40switchboard-xyz%2Fsolana.js&logo=npm" />
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
    <strong>Npm: </strong><a href="https://www.npmjs.com/package/@switchboard-xyz/solana.js">npmjs.com/package/@switchboard-xyz/oracle</a>
  </h4>
  <h4>
    <strong>Sbv2 SDK: </strong><a href="https://github.com/switchboard-xyz/sbv2-core">github.com/switchboard-xyz/sbv2-core</a>
  </h4>
</div>

## Install

```bash
npm i --save-dev @switchboard-xyz/oracle
```

## Usage

### NodeJS

```ts
import { NodeOracle } from "@switchboard-xyz/oracle";

const oracle = await NodeOracle.fromReleaseChannel({
  releaseChannel: "testnet",
  chain: "solana",
  network: "localnet",
  rpcUrl: "http://0.0.0.0:8899",
  oracleKey: "FKFPBD5WUUL5bSNwBH3AKY58KuY8nz2zkMCYR271CcVA",
  secretPath: "~/.config/solana/id.json",
});

try {
  await oracle.startAndAwait();
  console.log("oracle ready");
  await sleep(10000);
} catch (error) {
  console.error(error);
}

oracle.stop();
```

### Docker

```ts
import { DockerOracle } from "@switchboard-xyz/oracle";

const oracle = await DockerOracle.fromReleaseChannel({
  releaseChannel: "testnet",
  chain: "solana",
  network: "localnet",
  rpcUrl: "http://0.0.0.0:8899",
  oracleKey: "FKFPBD5WUUL5bSNwBH3AKY58KuY8nz2zkMCYR271CcVA",
  secretPath: "~/.config/solana/id.json",
});

try {
  await oracle.startAndAwait();
  console.log("oracle ready");
  await sleep(10000);
} catch (error) {
  console.error(error);
}

oracle.stop();
```
