Create and initialize the LeaseAccount.

## Accounts

| Name          | isMut | isSigner | Description |
| ------------- | ----- | -------- | ----------- |
| lease         | true  | false    |             |
| queue         | true  | false    |             |
| aggregator    | false | false    |             |
| funder        | true  | false    |             |
| payer         | true  | true     |             |
| systemProgram | false | false    |             |
| tokenProgram  | false | false    |             |
| owner         | true  | true     |             |
| escrow        | true  | false    |             |
| programState  | false | false    |             |
| mint          | false | false    |             |

## Args

| Name   | Type                                                 | Description |
| ------ | ---------------------------------------------------- | ----------- |
| params | [LeaseInitParams](/solana/idl/types/leaseinitparams) |             |
