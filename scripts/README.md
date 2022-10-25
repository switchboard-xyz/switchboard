# Sbv2-Core Scripts

## Aptos

```bash

```

## Near

Command line script to create a Near Switchboard environment

```bash
Usage:
./scripts/near.sh  [-a accountId] [-c testnet|mainnet] [-n name] [-m minStake] [-r reward] [-s queueSize] [-u updateInterval]

Options:
-a accountId, named account used as the payer and authority


Example:
        ./scripts/near.sh -a sbv2-authority.testnet -c testnet -n 'Near Queue' -m 0 -r 0.000075 -s 250 -u 10 -o 3

        Account ID: sbv2-authority.testnet
        Network: testnet
        Queue Name: Near Queue
        Min Stake: 0
        Reward: 0.000075
        Size: 250
        Update Interval: 10
        Num Oracles: 3
```
./scripts/near.sh -a sbv2-authority.near -c mainnet -n 'Permissionless Queue' -m 0 -r 0.000075 -s 250 -u 10 -o 3