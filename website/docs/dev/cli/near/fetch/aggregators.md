---

title: Aggregators
---
fetch all aggregators for a given near account

```asciidoc
USAGE
  $ sbv2 near fetch aggregators --accountId <value> [-h] [-v] [-s] [--networkId testnet|mainnet|betanet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountId=<value>           (required) optional, authority to fetch aggregators for
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|betanet|localnet>
  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  fetch all aggregators for a given near account

ALIASES
  $ sbv2 near fetch aggregators
```
