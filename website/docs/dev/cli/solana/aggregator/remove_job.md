---

title: Remove Job
---
remove a switchboard job account from an aggregator

```asciidoc
USAGE
  $ sbv2 solana aggregator remove job [AGGREGATORKEY] [JOBKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  JOBKEY         public key of an existing job account to remove from an aggregator

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  remove a switchboard job account from an aggregator

EXAMPLES
  $ sbv2 aggregator:remove:job
```
