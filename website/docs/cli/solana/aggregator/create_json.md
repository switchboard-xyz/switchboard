---

title: Create Json
---
create an aggregator from a json file

```asciidoc
USAGE
  $ sbv2 solana aggregator create json [DEFINITIONFILE] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-q <value>] [-a <value>]
    [--leaseAmount <value>]

ARGUMENTS
  DEFINITIONFILE  filesystem path of queue definition json file

FLAGS
  -a, --authority=<value>  alternate keypair that will be the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -q, --queueKey=<value>   public key of the oracle queue to create aggregator for
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --leaseAmount=<value>    [default: 0] amount of funds to deposit into the lease, ex: 1.5 would deposit 1.5 wSOL
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aggregator from a json file

ALIASES
  $ sbv2 solana json create aggregator

EXAMPLES
  $ sbv2 solana aggregator create json examples/aggregator.json --keypair ../payer-keypair.json --queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile aggregator.schema.json
```
