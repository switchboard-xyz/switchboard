---

title: Print
---
print an oracle account

```asciidoc
USAGE
  $ sbv2 solana oracle print [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  ORACLEKEY  public key of the oracle account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an oracle account
```
