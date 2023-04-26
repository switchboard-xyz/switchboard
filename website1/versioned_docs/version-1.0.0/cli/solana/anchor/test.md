---

title: Test
---
run anchor test and a switchboard oracle in parallel

```asciidoc
USAGE
  $ sbv2 solana anchor test -k <value> [-h] [-v] [-s] [--mainnetBeta | --cluster localnet|devnet] [-u <value>]
    [--programId <value>] [-d <value>] [--oracleKey <value>] [--nodeImage <value>] [--arm] [-t <value>] [--oracleDelay
    <value>] [--delay <value>]

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -k, --keypair=<value>         (required) keypair that will pay for onchain transactions. defaults to new account
                                authority if no alternate authority provided
  -s, --silent                  suppress docker logging
  -t, --timeout=<value>         [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --arm                         apple silicon needs to use a docker image for linux/arm64
  --cluster=<option>            [default: localnet] cluster
                                <options: localnet|devnet>
  --delay=<value>               [default: 30000] the number of milliseconds after starting the Switchboard oracle to
                                start running the Anchor test suite
  --mainnetBeta                 WARNING: use mainnet-beta solana cluster
  --nodeImage=<value>           [default: dev-v2-RC_01_05_23_05_52] public key of the oracle to start-up
  --oracleDelay=<value>         [default: 5000] the number of milliseconds after starting the validator to start the
                                Switchboard oracle
  --oracleKey=<value>           public key of the oracle to start-up
  --programId=<value>           alternative Switchboard program ID to interact with

DESCRIPTION
  run anchor test and a switchboard oracle in parallel
```
