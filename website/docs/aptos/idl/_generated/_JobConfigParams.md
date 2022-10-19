| Field     | Type      | Description                                                |
| --------- | --------- | ---------------------------------------------------------- |
| name      | u8[]      | Name of the job stored on-chain.                           |
| metadata  | u8[]      | Metadata of the job to store on-chain.                     |
| authority | HexString | The account delegated as the authority for making changes. |
| data      | u8[]      | The serialized `OracleJob`.                                |
