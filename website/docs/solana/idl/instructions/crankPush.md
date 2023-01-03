Pushes a new aggregator onto the crank.

## Accounts

| Name           | isMut | isSigner | Description |
| -------------- | ----- | -------- | ----------- |
| crank          | true  | false    |             |
| aggregator     | true  | false    |             |
| oracleQueue    | true  | false    |             |
| queueAuthority | false | false    |             |
| permission     | false | false    |             |
| lease          | true  | false    |             |
| escrow         | true  | false    |             |
| programState   | false | false    |             |
| dataBuffer     | true  | false    |             |

## Args

| Name   | Type                                                 | Description |
| ------ | ---------------------------------------------------- | ----------- |
| params | [CrankPushParams](/solana/idl/types/crankpushparams) |             |
