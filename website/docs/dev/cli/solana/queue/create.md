---

title: Create
---
create a personal oracle queue

```asciidoc
USAGE
  $ sbv2 solana queue create [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--force] [-a <value>] [-n <value>] [--minStake <value>] [-r <value>]
    [-c <value>] [--oracleTimeout <value>] [-o <value>] [--queueSize <value>] [--unpermissionedFeeds]
    [--unpermissionedVrf] [--enableBufferRelayers] [-f <value>]

FLAGS
  -a, --authority=<value>   keypair to delegate authority to for creating permissions targeted at the queue
  -c, --crankSize=<value>   [default: 100] size of the crank
  -f, --outputFile=<value>  output queue schema to a json file
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -n, --name=<value>        [default: Custom Queue] name of the queue for easier identification
  -o, --numOracles=<value>  number of oracles to add to the queue
  -r, --reward=<value>      [default: 0] oracle rewards for successfully responding to an update request
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --enableBufferRelayers    enable oracles to fulfill buffer relayer requests
  --force                   overwrite output file if existing
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --minStake=<value>        [default: 0] minimum stake required by an oracle to join the queue
  --oracleTimeout=<value>   [default: 180] number of oracles to add to the queue
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueSize=<value>       [default: 100] maximum number of oracles the queue can support
  --unpermissionedFeeds     permit unpermissioned feeds
  --unpermissionedVrf       permit unpermissioned VRF accounts

DESCRIPTION
  create a personal oracle queue
```
