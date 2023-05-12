
manage the CLI configuration variables

* [`sbv2 config print`](#sbv2-config-print)
* [`sbv2 config set CHAIN NETWORK PARAMETER [VALUE]`](#sbv2-config-set-chain-network-parameter-value)

## `sbv2 config print`

print cli config

```
USAGE
  $ sbv2 config print [-h] [-v] [-s] [--json]

FLAGS
  -h, --help     Show CLI help.
  -s, --silent   suppress cli prompts
  -v, --verbose  log everything

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print cli config

EXAMPLES
  $ sbv2 config:print
```

## `sbv2 config set CHAIN NETWORK PARAMETER [VALUE]`

set a configuration option

```
USAGE
  $ sbv2 config set [CHAIN] [NETWORK] [PARAMETER] [VALUE] [-h] [-v] [-s] [-r]

ARGUMENTS
  CHAIN      (solana|near|aptos) chain to set a config parameter
  NETWORK    (localnet|testnet|betanet|devnet|mainnet) network of chain to set parameter
  PARAMETER  (rpc|default-account|account) parameter to set
  VALUE      value of the param to set

FLAGS
  -h, --help     Show CLI help.
  -r, --reset    remove value or set to default rpc
  -s, --silent   suppress cli prompts
  -v, --verbose  log everything

DESCRIPTION
  set a configuration option
```
