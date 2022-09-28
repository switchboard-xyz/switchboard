---

title: Balance
---
check an oracles token balance

```asciidoc
USAGE
  $ sbv2 solana oracle balance [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  ORACLEKEY  public key of the oracle to check token balance

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
  check an oracles token balance

EXAMPLES
  $ sbv2 oracle:balance 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```
