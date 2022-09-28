---

title: Create
---
add a crank to an existing oracle queue

```asciidoc
USAGE
  $ sbv2 solana crank create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [-n <value>] [-r <value>] [--queueAuthority <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create a crank on

FLAGS
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -n, --name=<value>        name of the crank for easier identification
  -r, --maxRows=<value>     [default: 100] maximum number of rows a crank can support
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  alternative keypair to use for queue authority

DESCRIPTION
  add a crank to an existing oracle queue

EXAMPLES
  $ sbv2 queue:add:crank 5aYuxRdcB9GpWrEXVMBQp2R5uf94uoBiFdMEBwcmHuU4 -k ../authority-keypair.json -n crank-1
```
