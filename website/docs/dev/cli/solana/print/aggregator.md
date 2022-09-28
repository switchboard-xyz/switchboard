---

title: Aggregator
---
Print the deserialized Switchboard aggregator account

```asciidoc
USAGE
  $ sbv2 solana print aggregator [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [--json] [--jobs] [-o]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

FLAGS
  -h, --help               Show CLI help.
  -o, --oraclePubkeysData  print the assigned oracles for the current round
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --jobs                   output job definitions
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print the deserialized Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator print

EXAMPLES
  $ sbv2 aggregator:print GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR
```
