---

title: Crank
---
push an aggregator onto the crank

```asciidoc
USAGE
  $ sbv2 aptos push crank [CRANKHEXSTRING] --keypair <value> -a <value> [-h] [-v] [-s] [--networkId devnet|testnet]
    [--programId <value>] [--stateAddress <value>] [-u <value>] [--profileName <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -a, --aggregatorHexString=<value>  (required) HexString address of the aggregator
  -h, --help                         Show CLI help.
  -s, --silent                       suppress cli prompts
  -u, --rpcUrl=<value>               alternate RPC url
  -v, --verbose                      log everything
  --keypair=<value>                  (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>               [default: devnet] Aptos network to connect to
                                     <options: devnet|testnet>
  --profileName=<value>              [default: default] If --keypair is pointing to a yaml file, provide an optional
                                     profile to load. If none provided, default will be used
  --programId=<value>                [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b]
                                     Switchboard programId on the selected Aptos network
  --stateAddress=<value>             [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b]
                                     Switchboard state address

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  push an aggregator onto the crank

ALIASES
  $ sbv2 aptos push crank
```
