---

title: Env
---
create a localnet switchboard environment

```asciidoc
USAGE
  $ sbv2 solana localnet env [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--force] [-o <value>]

FLAGS
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -o, --outputDir=<value>  output directory for scripts
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --force                  overwrite output file if existing
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  create a localnet switchboard environment
```
