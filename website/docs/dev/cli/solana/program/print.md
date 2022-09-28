---

title: Print
---
print the deserialized switchboard program state account

```asciidoc
USAGE
  $ sbv2 solana program print [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

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
  print the deserialized switchboard program state account

ALIASES
  $ sbv2 solana program print

EXAMPLES
  $ sbv2 program:print
```
