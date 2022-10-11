---

title: List
---
sort the crank

```asciidoc
USAGE
  $ sbv2 aptos crank list [CRANKHEXSTRING] [-h] [-v] [-s] [--networkId devnet|testnet] [--programId <value>]
    [--stateAddress <value>] [-u <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -h, --help              Show CLI help.
  -s, --silent            suppress cli prompts
  -u, --rpcUrl=<value>    alternate RPC url
  -v, --verbose           log everything
  --networkId=<option>    [default: devnet] Aptos network to connect to
                          <options: devnet|testnet>
  --programId=<value>     [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd] Switchboard
                          programId on the selected Aptos network
  --stateAddress=<value>  [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd] Switchboard
                          state address

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  sort the crank

ALIASES
  $ sbv2 aptos list crank
```
