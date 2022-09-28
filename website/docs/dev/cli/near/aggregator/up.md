---

title: Up
---
anneal an aggregator and sync settings and target lease amount

```asciidoc
USAGE
  $ sbv2 near aggregator up [AGGREGATORDEFINITIONPATH] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a
    <value>]

ARGUMENTS
  AGGREGATORDEFINITIONPATH  file path to aggregator containing the desired settings

FLAGS
  -a, --authority=<value>       alternate named account that is the authority for the oracle
  -h, --help                    Show CLI help.
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
  anneal an aggregator and sync settings and target lease amount
```
