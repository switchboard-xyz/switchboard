<div align="center">
  <a href="#">
    <img src="https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png" />
  </a>

  <h1>@switchboard-xyz/cli</h1>

  <p>A command line tool to interact with Switchboard.</p>

  <p>

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@switchboard-xyz/cli.svg)](https://npmjs.org/package/@switchboard-xyz/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@switchboard-xyz/cli.svg)](https://npmjs.org/package/@switchboard-xyz/cli)
[![License](https://img.shields.io/npm/l/@switchboard-xyz/cli.svg)](https://github.com/switchboard-xyz/sbv2-core/blob/main/cli/LICENSE)

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
    <strong>Npm: </strong><a href="https://www.npmjs.com/package/@switchboard-xyz/cli">npmjs.com/package/@switchboard-xyz/cli</a>
  </h4>
  <h4>
    <strong>Typedocs: </strong><a href="https://docs.switchboard.xyz/dev/cli">docs.switchboard.xyz/dev/cli</a>
  </h4>
</div>

## Install

Run the following command to install the `sbv2` binary in your $PATH.

```bash npm2yarn
npm install -g @switchboard-xyz/cli
```

You can re-run this command to upgrade your CLI version or run the command:

```bash
sbv2 update stable
```

## Setup

### Solana

```bash
# Devnet
sbv2 config set solana devnet rpc https://api.devnet.solana.com
sbv2 config set solana devnet default-account "~/.config/solana/id.json"

# Mainnet
sbv2 config set solana mainnet-beta rpc https://api.mainnet-beta.solana.com
sbv2 config set solana mainnet-beta default-account "~/.config/solana/id.json"
```

### Aptos

```bash
# Testnet
sbv2 config set aptos testnet rpc https://fullnode.testnet.aptoslabs.com/v1
sbv2 config set aptos testnet default-account ".aptos/config.yaml"

# Devnet
sbv2 config set aptos devnet rpc https://fullnode.devnet.aptoslabs.com/v1
sbv2 config set aptos devnet default-account ".aptos/config.yaml"
```

### NEAR

```bash
# Testnet
sbv2 config set near testnet rpc https://rpc.testnet.near.org
sbv2 config set near testnet default-account my-named-account.testnet

# Mainnet
sbv2 config set near mainnet rpc https://rpc.mainnet.near.org
sbv2 config set near mainnet default-account my-named-account.near
```
