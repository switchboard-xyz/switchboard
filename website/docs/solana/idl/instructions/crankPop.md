Pops an aggregator from the crank.

## Accounts

| Name            | isMut | isSigner | Description |
| --------------- | ----- | -------- | ----------- |
| crank           | true  | false    |             |
| oracleQueue     | true  | false    |             |
| queueAuthority  | false | false    |             |
| programState    | false | false    |             |
| payoutWallet    | true  | false    |             |
| tokenProgram    | false | false    |             |
| crankDataBuffer | true  | false    |             |
| queueDataBuffer | false | false    |             |
| mint            | false | false    |             |

## Args

| Name   | Type                                               | Description |
| ------ | -------------------------------------------------- | ----------- |
| params | [CrankPopParams](/solana/idl/types/crankpopparams) |             |
