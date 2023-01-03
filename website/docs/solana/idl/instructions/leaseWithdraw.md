## Accounts

| Name              | isMut | isSigner | Description |
| ----------------- | ----- | -------- | ----------- |
| lease             | true  | false    |             |
| escrow            | true  | false    |             |
| aggregator        | false | false    |             |
| queue             | false | false    |             |
| withdrawAuthority | false | true     |             |
| withdrawAccount   | true  | false    |             |
| tokenProgram      | false | false    |             |
| programState      | false | false    |             |
| mint              | false | false    |             |

## Args

| Name   | Type                                                         | Description |
| ------ | ------------------------------------------------------------ | ----------- |
| params | [LeaseWithdrawParams](/solana/idl/types/leasewithdrawparams) |             |
