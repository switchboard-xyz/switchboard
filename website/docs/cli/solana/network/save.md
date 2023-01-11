---

title: Save
---
save an existing switchboard network

```asciidoc
USAGE
  $ sbv2 solana network save --queueKey <value> --outputFile <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json] [--force]

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --force
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --outputFile=<value>   (required) outputFile to save accounts in JSON format
  --programId=<value>    alternative Switchboard program ID to interact with
  --queueKey=<value>     (required) queue account to load

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  save an existing switchboard network
```
