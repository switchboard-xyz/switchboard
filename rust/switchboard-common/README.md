<div align="center">

![Switchboard Logo](https://github.com/switchboard-xyz/switchboard/raw/main/website/static/img/icons/switchboard/avatar.png)

# switchboard-common

> Common Switchboard types and utilities

[![Crates.io Badge](https://img.shields.io/crates/v/switchboard-common?label=switchboard-common&logo=rust)](https://crates.io/crates/switchboard-common)

[![Discord Badge](https://img.shields.io/discord/841525135311634443?color=blueviolet&logo=discord&logoColor=white)](https://discord.gg/switchboardxyz)

[![Twitter Badge](https://img.shields.io/twitter/follow/switchboardxyz?label=Follow+Switchboard)](https://twitter.com/switchboardxyz)

  <h4>
    <strong>Typedocs: </strong><a href="https://docs.rs/switchboard-common">docs.rs/switchboard-common</a>
  </h4>
  <h4>
    <strong>Switchboard Documentation: </strong><a href="https://docs.switchboard.xyz">docs.switchboard.xyz</a>
  </h4>
</div>

## Install

Run the following Cargo command in your project directory:

```bash
cargo add switchboard-common
```

Or add the following line to your Cargo.toml:

```toml
[dependencies]
switchboard-common = "0.8.8"
```

## Features

The following features can be enabled with this crate:

| Feature  | Description                                                                                                                               |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `client` | Enable functionality for using Switchboard off-chain in a client such as enabling the Gramine runtime and other SGX related feature sets. |
| `solana` | Enable features specific to Solana including the SolanaFunctionEnvironment struct                                                         |
