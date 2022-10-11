---

title: Oracle Permission
---
create a permission account

```asciidoc
USAGE
  $ sbv2 near create oracle permission --accountName <value> --granter <value> --grantee <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a
    <value>] [--enable]

FLAGS
  -a, --authority=<value>       alternate account that is the granters authority
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --enable                      enable permissions
  --grantee=<value>             (required) account that will be granted permissions, typically an Oracle or Aggregator
  --granter=<value>             (required) account that will grant permissions, typically the OracleQueue
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|betanet|localnet>
  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a permission account

ALIASES
  $ sbv2 near create oracle permission
```
