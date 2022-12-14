---

title: UP
---
start a solana docker oracle

```asciidoc
USAGE
  $ sbv2 solana oracle up --oracleKey <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--nodeImage <value>] [--arm] [-t
    <value>]

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress docker logging
  -t, --timeout=<value>  [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --arm                  apple silicon needs to use a docker image for linux/arm64
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --nodeImage=<value>    [default: dev-v2-RC_11_10_22__19_19] public key of the oracle to start-up
  --oracleKey=<value>    (required) public key of the oracle to start-up
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  start a solana docker oracle
```
