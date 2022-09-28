---

title: Print
---
Print the deserialized Switchboard oraclequeue account

```asciidoc
USAGE
  $ sbv2 solana queue print [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--oracles]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --oracles              output oracles that are heartbeating on the queue
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard oraclequeue account

ALIASES
  $ sbv2 solana queue print

EXAMPLES
  $ sbv2 solana queue print GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U
```
