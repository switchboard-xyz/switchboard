---

title: Request
---
request a new value for a VRF

```asciidoc
USAGE
  $ sbv2 solana vrf request [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--funderAuthority <value>] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the VRF account to request randomness for

FLAGS
  -h, --help                 Show CLI help.
  -k, --keypair=<value>      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided
  -s, --silent               suppress cli prompts
  -u, --rpcUrl=<value>       alternate RPC url
  -v, --verbose              log everything
  --authority=<value>        alternative keypair that is the VRF authority
  --commitment=<option>      [default: confirmed] transaction commitment level to use
                             <options: confirmed|finalized|processed>
  --funderAuthority=<value>  alternative keypair to pay for VRF request
  --mainnetBeta              WARNING: use mainnet-beta solana cluster
  --programId=<value>        alternative Switchboard program ID to interact with

DESCRIPTION
  request a new value for a VRF

EXAMPLES
  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json --callbackPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --ixData "[145,72,9,94,61,97,126,106]" -a "{"pubkey": "HpQoFL5kxPp2JCFvjsVTvBd7navx4THLefUU68SXAyd6","isSigner": false,"isWritable": true}" -a "{"pubkey": "8VdBtS8ufkXMCa6Yr9E4KVCfX2inVZVwU4KGg2CL1q7P","isSigner": false,"isWritable": false}"
```
