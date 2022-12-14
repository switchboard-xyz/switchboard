---

title: Index
---
fetch the Switchboard program accounts on Solana

```asciidoc
USAGE
  $ sbv2 solana [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--commitment confirmed|finalized|processed] [--outputFile <value>]

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --outputFile=<value>   file to save solana account definitions to
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fetch the Switchboard program accounts on Solana
```
