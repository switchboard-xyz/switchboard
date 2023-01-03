## Accounts

| Name              | isMut | isSigner | Description |
| ----------------- | ----- | -------- | ----------- |
| authority         | false | true     |             |
| vrf               | true  | false    |             |
| oracleQueue       | true  | false    |             |
| queueAuthority    | false | false    |             |
| dataBuffer        | false | false    |             |
| permission        | true  | false    |             |
| escrow            | true  | false    |             |
| payerWallet       | true  | false    |             |
| payerAuthority    | false | true     |             |
| recentBlockhashes | false | false    |             |
| programState      | false | false    |             |
| tokenProgram      | false | false    |             |

## Args

| Name   | Type                                                                       | Description |
| ------ | -------------------------------------------------------------------------- | ----------- |
| params | [VrfRequestRandomnessParams](/solana/idl/types/vrfrequestrandomnessparams) |             |
