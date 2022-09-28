---

title: History Print
---
Print the history buffer associated with an aggregator account

```asciidoc
USAGE
  $ sbv2 solana aggregator history print [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the history buffer associated with an aggregator account

ALIASES
  $ sbv2 solana aggregator history print
  $ sbv2 solana aggregator print history

EXAMPLES
  $ sbv2 aggregator:print:history 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```
