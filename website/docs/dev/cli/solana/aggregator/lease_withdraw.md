---

title: Lease Withdraw
---
withdraw funds from an aggregator lease

```asciidoc
USAGE
  $ sbv2 solana aggregator lease withdraw [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--withdrawAddress <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

FLAGS
  -a, --authority=<value>    keypair delegated as the authority for managing the oracle account
  -h, --help                 Show CLI help.
  -k, --keypair=<value>      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided
  -s, --silent               suppress cli prompts
  -u, --rpcUrl=<value>       alternate RPC url
  -v, --verbose              log everything
  --amount=<value>           (required) token amount to withdraw from lease account. If decimals provided, amount will
                             be normalized to raw tokenAmount
  --commitment=<option>      [default: confirmed] transaction commitment level to use
                             <options: confirmed|finalized|processed>
  --mainnetBeta              WARNING: use mainnet-beta solana cluster
  --programId=<value>        alternative Switchboard program ID to interact with
  --withdrawAddress=<value>  tokenAccount to withdraw to. If not provided, payer associated token account will be used

DESCRIPTION
  withdraw funds from an aggregator lease

ALIASES
  $ sbv2 solana aggregator lease withdraw

EXAMPLES
  $ sbv2 aggregator:lease:withdraw GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```
