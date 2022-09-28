---
hide_table_of_contents: true
---

OpenRound successfully called on an aggregator

| Name     | Type        | Description                                                               |
| -------- | ----------- | ------------------------------------------------------------------------- |
| feed_key | u8[32]      | Address of the aggregator requesting a new result                         |
| oracles  | Vec<u8[32]> | Oracles assigned to the update request                                    |
| jobs     | Vec<u8[32]> | Job accounts associated with an aggregator containing the job definitions |
