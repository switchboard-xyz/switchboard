---

title: Vrf
---
Print the deserialized Switchboard VRF account

```asciidoc
USAGE
  $ sbv2 solana print vrf [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json]

ARGUMENTS
  VRFKEY  public key of the vrf account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print the deserialized Switchboard VRF account

ALIASES
  $ sbv2 solana vrf print

EXAMPLES
  $ sbv2 solana vrf print [VRF_PUBKEY]
```
