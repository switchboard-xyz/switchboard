---
hide_table_of_contents: true
---

| Field              | Type                                       | Description                                                  |
| ------------------ | ------------------------------------------ | ------------------------------------------------------------ |
| address            | u8[32]                                     | Address of the crank account.                                |
| name               | Vec<u8\>                                   | Name of the crank to store on-chain.                         |
| metadata           | Vec<u8\>                                   | Metadata of the crank to store on-chain.                     |
| queue              | u8[32]                                     | Address of the oracle queue that owns the crank              |
| max_rows           | u32                                        | Maximum number of aggregators allowed to be added to a crank |
| jitter_modifier    | u8                                         | Pseudorandom value added to next aggregator update time      |
| data               | Vec<[CrankRow](/near/idl/types/CrankRow)\> | Aggregators currently on the crank.                          |
| creation_timestamp | u64                                        | Unix timestamp when the crank was created on-chain.          |
| \_ebuf             | Vec<u8\>                                   | Reserved                                                     |
| features           | Vec<u8\>                                   |                                                              |
