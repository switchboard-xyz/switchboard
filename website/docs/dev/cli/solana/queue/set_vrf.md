---

title: Set Vrf
---
set unpermissionedVrfEnabled

```asciidoc
USAGE
  $ sbv2 solana queue set vrf [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [-a <value>] [--disable]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create a crank on

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for oracle queue
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --disable                disable unpermissionedVrfEnabled
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set unpermissionedVrfEnabled
```
