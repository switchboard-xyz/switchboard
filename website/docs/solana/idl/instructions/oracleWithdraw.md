Withdraw stake and/or rewards from an OracleAccount.

## Accounts

| Name            | isMut | isSigner | Description |
| --------------- | ----- | -------- | ----------- |
| oracle          | true  | false    |             |
| oracleAuthority | false | true     |             |
| tokenAccount    | true  | false    |             |
| withdrawAccount | true  | false    |             |
| oracleQueue     | true  | false    |             |
| permission      | true  | false    |             |
| tokenProgram    | false | false    |             |
| programState    | false | false    |             |
| payer           | true  | true     |             |
| systemProgram   | false | false    |             |

## Args

| Name   | Type                                                           | Description |
| ------ | -------------------------------------------------------------- | ----------- |
| params | [OracleWithdrawParams](/solana/idl/types/oraclewithdrawparams) |             |
