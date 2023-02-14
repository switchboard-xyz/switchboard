<div align="center">
  <a href="#">
    <img height="170" src="https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.svg" />
  </a>

  <h1>Switchboard V2 Core</h1>

  <p>Umbrella repo for the multi-chain implementations of Switchboard V2.</p>

  <p>
    <a href="https://discord.gg/switchboardxyz">
      <img alt="Discord" src="https://img.shields.io/discord/841525135311634443?color=blueviolet&logo=discord&logoColor=white">
    </a>
    <a href="https://twitter.com/switchboardxyz">
      <img alt="Twitter" src="https://img.shields.io/twitter/follow/switchboardxyz?label=Follow+Switchboard" />
    </a>
  </p>

  <h4>
    <strong>Documentation: </strong><a href="https://docs.switchboard.xyz">docs.switchboard.xyz</a>
  </h4>
</div>

## Getting Started

To get started, clone the
[sbv2-core](https://github.com/switchboard-xyz/sbv2-core) repository.

```bash
git clone --recurse-submodules https://github.com/switchboard-xyz/sbv2-core.git
cd sbv2-core
```

## SDKs

| **Chain**     | **Name**                      |
| ------------- | ----------------------------- |
| Aptos         | [sbv2-aptos](/sdks/aptos)     |
| EVM (CoreDAO) | [sbv2-evm](/sdks/evm)         |
| NEAR          | [sbv2-near](/sdks/near)       |
| Solana        | [sbv2-solana](/sdks/solana)   |
| Starknet      | [sbv2-solana](/sdks/starknet) |
| Sui           | [sbv2-solana](/sdks/sui)      |

To add SDKs,

```bash
git submodule add https://github.com/switchboard-xyz/switchboard-v2 sdks/solana
```

To update SDKs,

```bash
# All
git submodule update --remote
# Single SDK
git submodule update --remote sdks/solana
```

## Packages

### CLI

To link the CLI,

```bash
cd cli && yarn link; cd ../;
```

### sbv2-scripts

To link the sbv2-scripts binary,

```bash
cd javascript/sbv2-scripts
yarn install
yarn link
```

**NOTE:** Requires ts-node to be installed globally,
`yarn global add typescript ts-node @types/node`

For upgrading task types:

```
cd javascript/common
npm run build
yarn publish
```
