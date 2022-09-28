---

title: Permission
---
Print the deserialized Switchboard permission account

```asciidoc
USAGE
  $ sbv2 solana print permission [PERMISSIONKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account to deserialize

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
  Print the deserialized Switchboard permission account

ALIASES
  $ sbv2 solana permission print

EXAMPLES
  $ sbv2 permission:print 94XXM72K2aKu2wcuJaawV8njuGaFZvhy8iKgPxoa1tJk
```
