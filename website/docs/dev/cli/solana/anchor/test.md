---
title: Test
---

run anchor test and a switchboard oracle in parallel

```asciidoc
USAGE
  $ sbv2 solana anchor test [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [-d <value>] [--oracleKey <value>] [--nodeImage <value>] [--arm] [-t
    <value>]

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -k, --keypair=<value>         keypair that will pay for onchain transactions. defaults to new account authority if no
                                alternate authority provided
  -s, --silent                  suppress docker logging
  -t, --timeout=<value>         [default: 120] number of seconds before timing out
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --arm                         apple silicon needs to use a docker image for linux/arm64
  --commitment=<option>         [default: confirmed] transaction commitment level to use
                                <options: confirmed|finalized|processed>
  --mainnetBeta                 WARNING: use mainnet-beta solana cluster
  --nodeImage=<value>           [default: dev-v2-10-18-22] public key of the oracle to start-up
  --oracleKey=<value>           public key of the oracle to start-up
  --programId=<value>           alternative Switchboard program ID to interact with

DESCRIPTION
  run anchor test and a switchboard oracle in parallel
```
