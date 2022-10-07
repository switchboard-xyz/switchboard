---

title: Airdrop
---
request an airdrop

```asciidoc
USAGE
  $ sbv2 aptos account airdrop --address <value> [-h] [-v] [-s] [--networkId devnet|testnet] [--programId <value>]
    [--stateAddress <value>] [-u <value>] [--json] [-n <value>]

FLAGS
  -h, --help              Show CLI help.
  -n, --amount=<value>    [default: 50000] number of airdrops to request, 10_000 coins each
  -s, --silent            suppress cli prompts
  -u, --rpcUrl=<value>    alternate RPC url
  -v, --verbose           log everything
  --address=<value>       (required) HexString address of account to fund
  --networkId=<option>    [default: devnet] Aptos network to connect to
                          <options: devnet|testnet>
  --programId=<value>     [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd] Switchboard
                          programId on the selected Aptos network
  --stateAddress=<value>  [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd] Switchboard
                          state address

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  request an airdrop
```
