---

title: Turn
---
turn the crank and get rewarded if aggregator updates available

```asciidoc
USAGE
  $ sbv2 solana crank turn [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  CRANKKEY  public key of the crank to turn

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  turn the crank and get rewarded if aggregator updates available

EXAMPLES
  $ sbv2 crank:turn 85L2cFUvXaeGQ4HrzP8RJEVCL7WvRrXM2msvEmQ82AVr --keypair ../payer-keypair.json
```
