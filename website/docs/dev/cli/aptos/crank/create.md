---

title: Create
---
create a new crank

```asciidoc
USAGE
  $ sbv2 aptos crank create [QUEUEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet] [--programId
    <value>] [--stateAddress <value>] [-u <value>] [--profileName <value>] [--name <value>] [--metadata <value>]
    [--maxRows <value>] [--new]

ARGUMENTS
  QUEUEHEXSTRING  HexString of the oracle queue to create a crank for

FLAGS
  -h, --help              Show CLI help.
  -s, --silent            suppress cli prompts
  -u, --rpcUrl=<value>    alternate RPC url
  -v, --verbose           log everything
  --keypair=<value>       (required) Path to AptosAccount keypair or config.yaml file
  --maxRows=<value>       [default: 100] maximum number of rows on the crank
  --metadata=<value>      metadata of the queue for easier identification
  --name=<value>          name of the queue for easier identification
  --networkId=<option>    [default: devnet] Aptos network to connect to
                          <options: devnet|testnet>
  --new                   create account at new AptosAccount with authority set to --account
  --profileName=<value>   [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                          load. If none provided, default will be used
  --programId=<value>     [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b] Switchboard
                          programId on the selected Aptos network
  --stateAddress=<value>  [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b] Switchboard
                          state address

DESCRIPTION
  create a new crank

ALIASES
  $ sbv2 aptos create crank
```
