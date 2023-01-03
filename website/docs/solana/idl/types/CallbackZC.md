| Field       | Type                                                 | Description                                                                                   |
| ----------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| programId   | publicKey                                            | The program ID of the callback program being invoked.                                         |
| accounts    | [AccountMetaZC](/solana/idl/types/accountmetazc)[32] | The accounts being used in the callback instruction.                                          |
| accountsLen | u32                                                  | The number of accounts used in the callback. The number of accounts in the accounts array.    |
| ixData      | u8[1024]                                             | The serialized instruction data.                                                              |
| ixDataLen   | u32                                                  | The number of serialized bytes in the instruction data. The length of the instruction buffer. |
