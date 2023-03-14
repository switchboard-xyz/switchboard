## Accounts

| Name                   | isMut | isSigner | Description |
| ---------------------- | ----- | -------- | ----------- |
| authority              | false | false    |             |
| vrf                    | true  | true     |             |
| mint                   | false | false    |             |
| escrow                 | true  | false    |             |
| queueAuthority         | false | false    |             |
| queue                  | false | false    |             |
| permission             | true  | false    |             |
| programState           | false | false    |             |
| payer                  | true  | true     |             |
| tokenProgram           | false | false    |             |
| associatedTokenProgram | false | false    |             |
| systemProgram          | false | false    |             |
| rent                   | false | false    |             |

## Args

| Field      | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| callback   | Option&lt;Callback&gt; |             |
| stateBump  | u8                     |             |
| expiration | Option&lt;i64&gt;      |             |
