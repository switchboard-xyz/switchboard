---
title: Up
---

start an aptos docker oracle

```asciidoc
USAGE
  $ sbv2 aptos oracle up [ORACLEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet] [--programId
    <value>] [--stateAddress <value>] [-u <value>] [--profileName <value>] [-d <value>] [--nodeImage <value>] [--arm]

ARGUMENTS
  ORACLEHEXSTRING  HexString address of the oracle

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -s, --silent                  suppress docker logging
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --arm                         apple silicon needs to use a docker image for linux/arm64
  --keypair=<value>             (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>          [default: devnet] Aptos network to connect to
                                <options: devnet|testnet>
  --nodeImage=<value>           [default: dev-v2-10-18-22] public key of the oracle to start-up
  --profileName=<value>         [default: default] If --keypair is pointing to a yaml file, provide an optional profile
                                to load. If none provided, default will be used
  --programId=<value>           [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd]
                                Switchboard programId on the selected Aptos network
  --stateAddress=<value>        [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd]
                                Switchboard state address

DESCRIPTION
  start an aptos docker oracle
```
