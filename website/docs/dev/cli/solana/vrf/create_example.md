---

title: Create Example
---
create a VRF account for the client example program

```asciidoc
USAGE
  $ sbv2 solana vrf create example [QUEUEKEY] --vrfPid <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--vrfKeypair <value>] [--enable]
    [--queueAuthority <value>] [--maxResult <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create VRF account for

FLAGS
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --enable                  enable vrf permissions
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --maxResult=<value>       [default: 256000] the maximum VRF result
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  alternative keypair to use for queue authority
  --vrfKeypair=<value>      filesystem path of existing keypair to use for VRF Account
  --vrfPid=<value>          (required) program ID for the VRF example program

DESCRIPTION
  create a VRF account for the client example program

EXAMPLES
  $ sbv2 solana vrf create example 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --vrfPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json
```
