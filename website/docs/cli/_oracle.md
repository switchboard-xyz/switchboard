
fetch logs for a switchboard oracle

* [`sbv2 oracle logs NETWORK SEARCHSTRING`](#sbv2-oracle-logs-network-searchstring)

## `sbv2 oracle logs NETWORK SEARCHSTRING`

fetch logs for a switchboard oracle

```
USAGE
  $ sbv2 oracle logs [NETWORK] [SEARCHSTRING] -f <value> [-h] [-v] [-s] [--force] [--json] [--csv]

ARGUMENTS
  NETWORK       (solana-devnet|solana-mainnet) network to parse logs for
  SEARCHSTRING  string to search for in the oracle logs

FLAGS
  -f, --outputFile=<value>  (required) output file to save aggregator pubkeys to
  -h, --help                Show CLI help.
  -s, --silent              suppress cli prompts
  -v, --verbose             log everything
  --csv                     output aggregator accounts in csv format
  --force                   overwrite output file if exists
  --json                    output aggregator accounts in json format

DESCRIPTION
  fetch logs for a switchboard oracle
```
