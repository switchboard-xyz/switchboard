| Field                | Type                                                 | Description                                                                           |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| oracleIdx            | u32                                                  |                                                                                       |
| error                | bool                                                 |                                                                                       |
| value                | [BorshDecimal](/feeds/solana/idl/types/BorshDecimal) |                                                                                       |
| jobsChecksum         | u8[32]                                               |                                                                                       |
| minResponse          | [BorshDecimal](/feeds/solana/idl/types/BorshDecimal) |                                                                                       |
| maxResponse          | [BorshDecimal](/feeds/solana/idl/types/BorshDecimal) |                                                                                       |
| feedPermissionBump   | u8                                                   |                                                                                       |
| oraclePermissionBump | u8                                                   |                                                                                       |
| leaseBump            | u8                                                   |                                                                                       |
| stateBump            | u8                                                   | The [SbState](/feeds/solana/idl/accounts/SbState) bump used to derive its public key. |
