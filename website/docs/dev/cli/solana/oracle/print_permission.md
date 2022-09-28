---

title: Print Permission
---
Print the permission account associated with a Switchboard oracle account

```asciidoc
USAGE
  $ sbv2 solana oracle print permission [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  ORACLEKEY  public key of the oracle account to fetch permission account and deserialize

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
  Print the permission account associated with a Switchboard oracle account

ALIASES
  $ sbv2 solana oracle permission print
  $ sbv2 solana oracle print permission

EXAMPLES
  $ sbv2 oracle:permission:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```
