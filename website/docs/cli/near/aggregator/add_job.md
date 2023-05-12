---

title: Add Job
---
add a job to an aggregator

```asciidoc
USAGE
  $ sbv2 near aggregator add job [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [--name <value> | --jobKey <value>] [--metadata <value> | ] [--jobDefinition <value> | ] [--jobWeight <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate keypair that is the authority for the aggregator
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --jobDefinition=<value>       filesystem path of job json definition file
  --jobKey=<value>              public key of an existing job account to add to an aggregator
  --jobWeight=<value>           [default: 1] job weight
  --metadata=<value>            metadata of the job account
  --name=<value>                name of the job account
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  add a job to an aggregator

ALIASES
  $ sbv2 near aggregator job add
```
