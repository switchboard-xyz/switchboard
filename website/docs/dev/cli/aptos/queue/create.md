---

title: Create
---
create a new oracle queue

```asciidoc
USAGE
  $ sbv2 aptos queue create --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet] [--programId <value>]
    [--stateAddress <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name <value>] [--metadata
    <value>] [--minStake <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--slashingEnabled]
    [--unpermissionedFeeds] [--unpermissionedVrf] [--enableBufferRelayers] [--lockLeaseFunding] [--new]

FLAGS
  -a, --authority=<value>  alternate account HexString that will be the authority for the queue
  -h, --help               Show CLI help.
  -r, --reward=<value>     oracle rewards for successfully responding to an update request
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --enableBufferRelayers   enable oracles to fulfill buffer relayer requests
  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file
  --lockLeaseFunding       lock lease funding
  --metadata=<value>       metadata of the queue for easier identification
  --minStake=<value>       minimum stake required by an oracle to join the queue
  --name=<value>           name of the queue for easier identification
  --networkId=<option>     [default: devnet] Aptos network to connect to
                           <options: devnet|testnet>
  --new                    create account at new AptosAccount with authority set to --account
  --oracleTimeout=<value>  [default: 180] number of oracles to add to the queue
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b] Switchboard
                           programId on the selected Aptos network
  --queueSize=<value>      [default: 100] maximum number of oracles the queue can support
  --slashingEnabled        permit slashing malicous oracles
  --stateAddress=<value>   [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b] Switchboard
                           state address
  --unpermissionedFeeds    permit unpermissioned feeds
  --unpermissionedVrf      permit unpermissioned VRF accounts

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle queue

ALIASES
  $ sbv2 aptos create queue
```
