---
hide_table_of_contents: true
---

| Field           | Type     | Description                                                                      |
| --------------- | -------- | -------------------------------------------------------------------------------- |
| address         | u8[32]   | Address of the job stored on-chain.                                              |
| name            | Vec<u8\> | Name of the job to store on-chain.                                               |
| metadata        | Vec<u8\> | Metadata of the job to store on-chain.                                           |
| authority       | String   | The account delegated as the authority for making account changes.               |
| expiration      | u64      | Timestamp when the job is considered invalid                                     |
| hash            | u8[32]   | Hash of the serialized data to prevent tampering                                 |
| data            | Vec<u8\> | Serialized protobuf containing the collection of task to retrieve data off-chain |
| reference_count | u32      | The number of data feeds referencing the job account.                            |
| total_spent     | u64      |                                                                                  |
| created_at      | u64      | Timestamp when the job account was created.                                      |
| \_ebuf          | Vec<u8\> | Reserved                                                                         |
| features        | Vec<u8\> |                                                                                  |
