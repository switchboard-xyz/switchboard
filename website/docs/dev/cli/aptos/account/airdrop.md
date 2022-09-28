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
  --programId=<value>     [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b] Switchboard
                          programId on the selected Aptos network
  --stateAddress=<value>  [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b] Switchboard
                          state address

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  request an airdrop
```
