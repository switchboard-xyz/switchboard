---

title: Create
---
create a job account

```asciidoc
USAGE
  $ sbv2 solana job create [JOBDEFINITION] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>] [-n <value>]

ARGUMENTS
  JOBDEFINITION  filesystem path to job definition

FLAGS
  -a, --authority=<value>  alternate keypair that will be the account authority
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -n, --name=<value>       name of the buffer account
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  create a job account
```
