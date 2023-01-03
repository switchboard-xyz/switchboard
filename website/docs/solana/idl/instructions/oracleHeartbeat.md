Initiates a heartbeat for an OracleAccount, signifying oracle is still healthy.

## Accounts

| Name            | isMut | isSigner | Description |
| --------------- | ----- | -------- | ----------- |
| oracle          | true  | false    |             |
| oracleAuthority | false | true     |             |
| tokenAccount    | false | false    |             |
| gcOracle        | true  | false    |             |
| oracleQueue     | true  | false    |             |
| permission      | false | false    |             |
| dataBuffer      | true  | false    |             |

## Args

| Name   | Type                                                             | Description |
| ------ | ---------------------------------------------------------------- | ----------- |
| params | [OracleHeartbeatParams](/solana/idl/types/oracleheartbeatparams) |             |
