---

title: Push
---
push an aggregator onto a crank

```asciidoc
USAGE
  $ sbv2 solana crank push [CRANKKEY] [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  CRANKKEY       public key of the crank
  AGGREGATORKEY  public key of the aggregator

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  push an aggregator onto a crank

ALIASES
  $ sbv2 solana aggregator add crank
  $ sbv2 solana crank add aggregator
```
