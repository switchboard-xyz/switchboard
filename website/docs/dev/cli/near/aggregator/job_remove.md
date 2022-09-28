---

title: Job Remove
---
remove a job to an aggregator

```asciidoc
USAGE
  $ sbv2 near aggregator job remove [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a
    <value>] [-j <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate keypair that is the authority for the aggregator
  -h, --help                    Show CLI help.
  -j, --jobAddress=<value>...   public key of an existing job account to remove from an aggregator
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|betanet|localnet>
  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  remove a job to an aggregator

ALIASES
  $ sbv2 near aggregator job remove
```
