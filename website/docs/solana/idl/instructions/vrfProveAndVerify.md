## Accounts

| Name               | isMut | isSigner | Description |
| ------------------ | ----- | -------- | ----------- |
| vrf                | true  | false    |             |
| callbackPid        | false | false    |             |
| tokenProgram       | false | false    |             |
| escrow             | true  | false    |             |
| programState       | false | false    |             |
| oracle             | false | false    |             |
| oracleAuthority    | false | true     |             |
| oracleWallet       | true  | false    |             |
| instructionsSysvar | false | false    |             |

## Args

| Name   | Type                                                                 | Description |
| ------ | -------------------------------------------------------------------- | ----------- |
| params | [VrfProveAndVerifyParams](/solana/idl/types/vrfproveandverifyparams) |             |
