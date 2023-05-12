---

title: Add History
---
add a history buffer to an aggregator

```asciidoc
USAGE
  $ sbv2 solana aggregator add history [AGGREGATORKEY] --historyLimit <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--force] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --force                  overwrite an existing history buffer if one already exists
  --historyLimit=<value>   (required) the number of samples to store before overwriting old samples
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  add a history buffer to an aggregator

EXAMPLES
  $ sbv2 solana:aggregator:add:history
```
