---
hide_table_of_contents: true
---

| Field                 | Type                                           | Description                                                                                           |
| --------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| address               | u8[32]                                         | Address of the job stored on-chain.                                                                   |
| name                  | Vec<u8\>                                       | Name of the job to store on-chain.                                                                    |
| metadata              | Vec<u8\>                                       | Metadata of the job to store on-chain.                                                                |
| authority             | String                                         | The account delegated as the authority for making account changes.                                    |
| last_heartbeat        | u64                                            | Timestamp when the oracle last heartbeated                                                            |
| num_in_use            | u32                                            | Flag dictating if an oracle is active and has heartbeated before the queue's oracle timeout parameter |
| queue                 | u8[32]                                         | Address of the queue the aggregator belongs to.                                                       |
| metrics               | [OracleMetrics](/near/idl/types/OracleMetrics) | Oracle track record                                                                                   |
| creation_timestamp    | u64                                            |                                                                                                       |
| total_delegated_stake | u128                                           |                                                                                                       |
| \_ebuf                | Vec<u8\>                                       | Reserved                                                                                              |
| features              | Vec<u8\>                                       |                                                                                                       |
