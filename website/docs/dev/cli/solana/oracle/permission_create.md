---

title: Permission Create
---
create a permission account for an oracle

```asciidoc
USAGE
  $ sbv2 solana oracle permission create [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  ORACLEKEY  public key of the oracle account

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
  create a permission account for an oracle
```
