---

title: Create
---
create a permission account

```asciidoc
USAGE
  $ sbv2 solana permission create [GRANTER] [GRANTEE] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  GRANTER  public key of the account granting permission
  GRANTEE  public key of the account getting permissions

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
  create a permission account
```
