---

title: Add Job
---
add a job to an aggregator

```asciidoc
USAGE
  $ sbv2 solana aggregator add job [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--jobDefinition <value> | --jobKey <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

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
  --jobDefinition=<value>  filesystem path of job json definition file
  --jobKey=<value>         public key of an existing job account to add to an aggregator
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  add a job to an aggregator

EXAMPLES
  $ sbv2 aggregator:add:job
```
