## Accounts

| Name                   | isMut | isSigner | Description |
| ---------------------- | ----- | -------- | ----------- |
| authority              | false | false    |             |
| vrfPool                | true  | false    |             |
| queue                  | false | false    |             |
| mint                   | false | false    |             |
| escrow                 | true  | false    |             |
| programState           | false | false    |             |
| payer                  | true  | true     |             |
| tokenProgram           | false | false    |             |
| associatedTokenProgram | false | false    |             |
| systemProgram          | false | false    |             |
| rent                   | false | false    |             |

## Args

| Field       | Type | Description |
| ----------- | ---- | ----------- |
| maxRows     | u32  |             |
| minInterval | u32  |             |
| stateBump   | u8   |             |
