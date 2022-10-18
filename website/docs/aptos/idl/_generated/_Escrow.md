| Field     | Type                          | Description                                                |
| --------- | ----------------------------- | ---------------------------------------------------------- |
| createdAt | u64                           | Unix timestamp when the resource was created.              |
| authority | HexString                     | The account delegated as the authority for making changes. |
| escrow    | [Coin](/aptos/idl/types/Coin) |                                                            |
| features  | bool[]                        |                                                            |
| \_ebuf    | u8[]                          | Reserved.                                                  |
