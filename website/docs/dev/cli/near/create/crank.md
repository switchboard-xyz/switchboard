---

title: Crank
---
create a new crank

```asciidoc
USAGE
  $ sbv2 near create crank [QUEUEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [--name
    <value>] [--metadata <value>] [--maxRows <value>]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --maxRows=<value>             [default: 100] maximum number of rows on the crank
  --metadata=<value>            metadata of the crank for easier identification
  --name=<value>                name of the crank for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|betanet|localnet>
  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new crank

ALIASES
  $ sbv2 near create crank
```
