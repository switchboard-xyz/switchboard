---

title: Push
---
push an aggregator onto the crank

```asciidoc
USAGE
  $ sbv2 near crank push [CRANKADDRESS] --accountName <value> -a <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  CRANKADDRESS  address of the crank in Uint8 or Base58 encoding

FLAGS
  -a, --aggregatorAddress=<value>  (required) address of the aggregator in Uint8 or Base58 encoding
  -h, --help                       Show CLI help.
  -s, --silent                     suppress cli prompts
  -u, --rpcUrl=<value>             alternate RPC url
  -v, --verbose                    log everything
  --accountName=<value>            (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>     [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                   Defaults to ~/.near-credentials
  --networkId=<option>             [default: testnet] Near network ID to connect to
                                   <options: testnet|mainnet|betanet|localnet>
  --programId=<value>              [default: switchboard-v2.testnet] Switchboard programId on the selected Near
                                   networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  push an aggregator onto the crank

ALIASES
  $ sbv2 near push crank
```
