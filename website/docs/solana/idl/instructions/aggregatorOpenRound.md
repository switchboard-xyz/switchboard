Opens a new round for the aggregator and will provide an incentivize reward to the caller.

## Accounts

| Name           | isMut | isSigner | Description |
| -------------- | ----- | -------- | ----------- |
| aggregator     | true  | false    |             |
| lease          | true  | false    |             |
| oracleQueue    | true  | false    |             |
| queueAuthority | false | false    |             |
| permission     | true  | false    |             |
| escrow         | true  | false    |             |
| programState   | false | false    |             |
| payoutWallet   | true  | false    |             |
| tokenProgram   | false | false    |             |
| dataBuffer     | false | false    |             |
| mint           | false | false    |             |

## Args

| Name   | Type                                                                     | Description |
| ------ | ------------------------------------------------------------------------ | ----------- |
| params | [AggregatorOpenRoundParams](/solana/idl/types/aggregatoropenroundparams) |             |
