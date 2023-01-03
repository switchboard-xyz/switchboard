Create and initialize the [SbState](/solana/idl/accounts/sbstate).

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

| Name   | Type                                                     | Description |
| ------ | -------------------------------------------------------- | ----------- |
| params | [ProgramInitParams](/solana/idl/types/programinitparams) |             |
