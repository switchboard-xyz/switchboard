Adds fund to a LeaseAccount. Note that funds can always be withdrawn by the withdraw authority if one was set on lease initialization.

## Accounts

| Name         | isMut | isSigner | Description |
| ------------ | ----- | -------- | ----------- |
| lease        | true  | false    |             |
| aggregator   | false | false    |             |
| queue        | false | false    |             |
| funder       | true  | false    |             |
| owner        | true  | true     |             |
| escrow       | true  | false    |             |
| tokenProgram | false | false    |             |
| programState | false | false    |             |
| mint         | false | false    |             |

## Args

| Name   | Type                                                     | Description |
| ------ | -------------------------------------------------------- | ----------- |
| params | [LeaseExtendParams](/solana/idl/types/leaseextendparams) |             |
