---

title: Create
---
create a Switchboard VRF Account

```asciidoc
USAGE
  $ sbv2 solana vrf create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--vrfKeypair <value>] [--enable] [--authority <value>]
    [--queueAuthority <value>] [--callback <value> | --accountMeta <value> | --callbackPid <value> | --ixData <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create VRF account for

FLAGS
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --accountMeta=<value>...  account metas for VRF callback
  --authority=<value>       alternative keypair to use for VRF authority
  --callback=<value>        filesystem path to callback json
  --callbackPid=<value>     callback program ID
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --enable                  enable vrf permissions
  --ixData=<value>          serialized instruction data in bytes
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  alternative keypair to use for queue authority
  --vrfKeypair=<value>      filesystem path of existing keypair to use for VRF Account

DESCRIPTION
  create a Switchboard VRF Account

EXAMPLES
  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json --callbackPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --ixData "[145,72,9,94,61,97,126,106]" -a "{"pubkey": "HpQoFL5kxPp2JCFvjsVTvBd7navx4THLefUU68SXAyd6","isSigner": false,"isWritable": true}" -a "{"pubkey": "8VdBtS8ufkXMCa6Yr9E4KVCfX2inVZVwU4KGg2CL1q7P","isSigner": false,"isWritable": false}"

  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority oracle-keypair.json --callbackPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --ixData "[145,72,9,94,61,97,126,106]" -a "{"pubkey": "HYKi1grticLXPe5vqapUHhm976brwqRob8vqRnWMKWL5","isSigner": false,"isWritable": true}" -a "{"pubkey": "6vG9QLMgSvsfjvSpDxWfZ2MGPYGzEYoBxviLG7cr4go","isSigner": false,"isWritable": false}"

  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json --callback callback-example.json
```
