---

title: Aggregator Permission
---
Print the permission account associated with a Switchboard aggregator account

```asciidoc
USAGE
  $ sbv2 solana print aggregator permission [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
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
  Print the permission account associated with a Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator permission print
  $ sbv2 solana aggregator print permission

EXAMPLES
  $ sbv2 aggregator:permission:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```
