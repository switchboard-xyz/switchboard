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

| **Chain**     | **Name**                                                        |
| ------------- | --------------------------------------------------------------- |
| Aptos         | [sbv2-aptos](https://github.com/switchboard-xyz/sbv2-aptos)     |
| EVM (CoreDAO) | [sbv2-evm](https://github.com/switchboard-xyz/sbv2-evm)         |
| NEAR          | [sbv2-near](https://github.com/switchboard-xyz/sbv2-near)       |
| Solana        | [sbv2-solana](https://github.com/switchboard-xyz/sbv2-solana)   |
| Starknet      | [sbv2-solana](https://github.com/switchboard-xyz/sbv2-starknet) |
| Sui           | [sbv2-solana](https://github.com/switchboard-xyz/sbv2-sui)      |

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

| **Lang** | **Name**                                                                                                                                                                                    | **Description**                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| JS       | [@switchboard-xyz/cli](/cli/) <br />[[npmjs](https://www.npmjs.com/package/@switchboard-xyz/cli), [Typedocs](https://docs.switchboard.xyz/dev/cli)]                                         | Command line interface to interact with Switchboard                                 |
| JS       | [@switchboard-xyz/common](/javascript/common/) <br />[[npmjs](https://www.npmjs.com/package/@switchboard-xyz/common), [Typedocs](https://docs.switchboard.xyz/api/@switchboard-xyz/common)] | Contains the OracleJob protobufs and other types and utilities shared across chains |

## Troubleshooting

1. File a
   [GitHub Issue](https://github.com/switchboard-xyz/sbv2-core/issues/new). If
   chain specific, then file an issue in the SDK's respective repository.
2. Ask a question in
   [Discord #dev-support](https://discord.com/channels/841525135311634443/984343400377647144)
