---
hide_table_of_contents: true
---

| Name          | Type                                                          | Description                                         |
| ------------- | ------------------------------------------------------------- | --------------------------------------------------- |
| feed_key      | u8[32]                                                        | Address of the aggregator that was updated.         |
| oracles       | Vec<u8[32]>                                                   | Oracles assigned to the update request              |
| oracle_values | Vec<[SwitchboardDecimal](/near/idl/types/SwitchboardDecimal)> | Array of oracle responses.                          |
| timestamp     | u64                                                           | Timestamp of the event.                             |
| round_id      | u128                                                          | The ID of the round associated with the aggregator. |
| value         | [SwitchboardDecimal](/near/idl/types/SwitchboardDecimal)      | The accepted value on-chain.                        |
