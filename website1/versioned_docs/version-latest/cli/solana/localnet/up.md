---

title: UP
---
start a local solana validator with a switchboard environment and oracle running alongside it

```asciidoc
USAGE
  $ sbv2 solana localnet up [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]
    [--oracleStakingWalletKeypair <value> --queueKeypair <value>] [--nodeImage <value>] [--arm] [-t <value>] [--reward
    <value>] [--minStake <value>] [--oracleTimeout <value>] [--slashingEnabled] [--permissionedFeeds]
    [--unpermissionedVrf] [--enableBufferRelayers]

FLAGS
  -h, --help                            Show CLI help.
  -k, --keypair=<value>                 keypair that will pay for onchain transactions. defaults to new account
                                        authority if no alternate authority provided
  -s, --silent                          suppress docker logging
  -t, --timeout=<value>                 [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>                  alternate RPC url
  -v, --verbose                         log everything
  --arm                                 apple silicon needs to use a docker image for linux/arm64
  --cluster=<option>                    the solana cluster to connect to
                                        <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>                 [default: confirmed] transaction commitment level to use
                                        <options: confirmed|finalized|processed>
  --enableBufferRelayers                enabling this setting will allow buffer relayer accounts to call openRound.
  --ledger                              enable ledger support
  --ledgerPath=<value>                  HID path to the ledger
  --mainnetBeta                         WARNING: use mainnet-beta solana cluster
  --minStake=<value>                    [default: 0] the reward payed out to oracles for responding to an update request
                                        on-chain, Ex: 2 requires oracles to have 2 wSOL in their staking wallet before
                                        heartbeating
  --nodeImage=<value>                   [default: dev-v2-RC_01_05_23_05_52] public key of the oracle to start-up
  --oracleStakingWalletKeypair=<value>  keypair to use for the oracle staking wallet. Using a static staking wallet with
                                        the same queue will produce the same oracle pubkey each time.
  --oracleTimeout=<value>               [default: 180] time period (in seconds) we should remove an oracle after if no
                                        response
  --permissionedFeeds                   enabling this setting means data feeds need explicit permission to join the
                                        queue.
  --programId=<value>                   alternative Switchboard program ID to interact with
  --queueKeypair=<value>                keypair to use for the oracle queue account. This will be the account's
                                        publicKey
  --reward=<value>                      [default: 0] the reward payed out to oracles for responding to an update request
                                        on-chain, Ex: A reward of 0.0000075 with a feed with a batchSize of 4 would
                                        deduct (4 * 0.0000075) wSOL from an aggregators lease each round.
  --slashingEnabled                     whether slashing is enabled on this queue.
  --unpermissionedVrf                   enabling this setting means data feeds do not need explicit permission to
                                        request VRF proofs and verifications from this queue.

DESCRIPTION
  start a local solana validator with a switchboard environment and oracle running alongside it
```
