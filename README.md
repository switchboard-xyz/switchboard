<div align="center">

![Switchboard Logo](https://github.com/switchboard-xyz/core-sdk/raw/main/website/static/img/icons/switchboard/avatar.png)

# Switchboard Core SDK

> Umbrella repo for the multi-chain implementations of Switchboard.

  <p>
    <a href="https://discord.gg/switchboardxyz">
      <img alt="Discord" src="https://img.shields.io/discord/841525135311634443?color=blueviolet&logo=discord&logoColor=white" />
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
[core-sdk](https://github.com/switchboard-xyz/core-sdk) repository.

```bash
git clone --recurse-submodules https://github.com/switchboard-xyz/core-sdk.git
cd core-sdk
```

Then install the dependencies

```bash
cd core-sdk
pnpm install
```

## SDKs

| **Chain**               | **Name**                                                    |
| ----------------------- | ----------------------------------------------------------- |
| Aptos                   | [aptos-sdk](https://github.com/switchboard-xyz/aptos-sdk)   |
| EVM (Arbitrum, CoreDAO) | [evm-sdk](https://github.com/switchboard-xyz/evm-sdk)       |
| NEAR                    | [near-sdk](https://github.com/switchboard-xyz/near-sdk)     |
| Solana                  | [solana-sdk](https://github.com/switchboard-xyz/solana-sdk) |
| Sui                     | [sui-sdk](https://github.com/switchboard-xyz/sui-sdk)       |

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

| **Lang** | **Name**                                                                                                                                                                   | **Description**                                                                     |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| JS       | [@switchboard-xyz/cli](/cli/) <br />[[npmjs](https://www.npmjs.com/package/@switchboard-xyz/cli), [Typedocs](https://docs.switchboard.xyz/dev/cli)]                        | Command line interface to interact with Switchboard                                 |
| JS       | [@switchboard-xyz/common](/javascript/common/) <br />[[npmjs](https://www.npmjs.com/package/@switchboard-xyz/common), [Typedocs](https://docs.switchboard.xyz/api/common)] | Contains the OracleJob protobufs and other types and utilities shared across chains |

## Troubleshooting

1. File a
   [GitHub Issue](https://github.com/switchboard-xyz/core-sdk/issues/new). If
   chain specific, then file an issue in the SDK's respective repository.
2. Ask a question in
   [Discord #dev-support](https://discord.com/channels/841525135311634443/984343400377647144)
