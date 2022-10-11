---

title: Sort
---
list the pubkeys currently on the crank

```asciidoc
USAGE
  $ sbv2 solana crank sort [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--force]

ARGUMENTS
  CRANKKEY  public key of the crank

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --force                overwrite output file if exists
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  list the pubkeys currently on the crank
```
