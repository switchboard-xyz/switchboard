| Field     | Type                                                     | Description                                           |
| --------- | -------------------------------------------------------- | ----------------------------------------------------- |
| programId | publicKey                                                | The program ID of the callback program being invoked. |
| accounts  | [AccountMetaBorsh](/solana/idl/types/accountmetaborsh)[] | The accounts being used in the callback instruction.  |
| ixData    | bytes                                                    | The serialized instruction data.                      |
