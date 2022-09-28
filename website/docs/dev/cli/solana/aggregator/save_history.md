---

title: Save History
---
request a new aggregator result from a set of oracles

```asciidoc
USAGE
  $ sbv2 solana aggregator save history [AGGREGATORKEY] -f <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [--force] [--json] [--csv]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

FLAGS
  -f, --outputFile=<value>  (required) output file to save aggregator pubkeys to
  -h, --help                Show CLI help.
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --csv                     output aggregator accounts in csv format
  --force                   overwrite output file if exists
  --json                    output aggregator accounts in json format
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with

DESCRIPTION
  request a new aggregator result from a set of oracles

EXAMPLES
  $ sbv2 aggregator:save:history --outputFile ../aggregator-history.json --csv
```
