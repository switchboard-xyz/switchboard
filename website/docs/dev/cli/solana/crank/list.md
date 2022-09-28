---

title: List
---
list the pubkeys currently on the crank

```asciidoc
USAGE
  $ sbv2 solana crank list [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--force] [-f <value>]

ARGUMENTS
  CRANKKEY  public key of the crank

FLAGS
  -f, --outputFile=<value>  output file to save aggregator pubkeys to
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --force                   overwrite output file if exists
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with

DESCRIPTION
  list the pubkeys currently on the crank
```
