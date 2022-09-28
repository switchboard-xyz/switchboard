---

title: Vrf
---
watch a vrf for a new value

```asciidoc
USAGE
  $ sbv2 solana watch vrf [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

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

DESCRIPTION
  watch a vrf for a new value

ALIASES
  $ sbv2 solana vrf watch

EXAMPLES
  $ sbv2 vrf:aggregator J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa
```
