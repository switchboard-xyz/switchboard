---

title: Set
---
permit a grantee to use a granters resources

```asciidoc
USAGE
  $ sbv2 solana permission set [PERMISSIONKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>] [--disable]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account

FLAGS
  -a, --authority=<value>  alternate keypair that is the granters authority
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --disable                disable permissions
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  permit a grantee to use a granters resources
```
