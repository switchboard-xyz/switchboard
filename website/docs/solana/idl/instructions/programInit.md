Create and initialize the [SbState](/solana/idl/accounts/SbState).

## Accounts

| Name          | isMut | isSigner | Description |
| ------------- | ----- | -------- | ----------- |
| state         | true  | false    |             |
| authority     | false | false    |             |
| tokenMint     | true  | false    |             |
| vault         | true  | false    |             |
| payer         | true  | true     |             |
| systemProgram | false | false    |             |
| tokenProgram  | false | false    |             |
| daoMint       | false | false    |             |

## Args

| Field     | Type | Description                                                                     |
| --------- | ---- | ------------------------------------------------------------------------------- |
| stateBump | u8   | The [SbState](/solana/idl/accounts/SbState) bump used to derive its public key. |
