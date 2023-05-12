---

title: Metrics
---
list oracle metrics

```asciidoc
USAGE
  $ sbv2 aptos oracle metrics [ORACLEHEXSTRING] [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--json]

ARGUMENTS
  ORACLEHEXSTRING  HexString address of the crank

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --networkId=<option>  [default: testnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list oracle metrics
```
