# Sbv2 Core

Umbrella repo for the multi-chain implementations of Switchboard V2.

Documentation (WIP): https://switchboard-xyz.github.io/sbv2-core/

## Setup

```bash
git clone --recurse-submodules https://github.com/switchboard-xyz/sbv2-core.git
cd sbv2-core
```

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

To link the CLI,

```bash
cd cli && yarn link; cd ../;
```

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
