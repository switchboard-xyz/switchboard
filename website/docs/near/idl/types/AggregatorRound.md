---
hide_table_of_contents: true
---

| Field                | Type                                                           | Description                                                         |
| -------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------- |
| id                   | u128                                                           | The ID of the round.                                                |
| num_success          | u32                                                            | Number of successful responses                                      |
| num_error            | u32                                                            | Number of error responses                                           |
| is_closed            | bool                                                           | Whether an update request round has ended                           |
| round_open_slot      | u64                                                            | Solana slot when the update request round was open                  |
| round_open_timestamp | i64                                                            | Timestamp when the update request round was open                    |
| result               | [SwitchboardDecimal](/near/idl/types/SwitchboardDecimal)       | Maintains the current median of all successful round responses      |
| std_deviation        | [SwitchboardDecimal](/near/idl/types/SwitchboardDecimal)       | Standard deviation of the accepted results in the round             |
| min_response         | [SwitchboardDecimal](/near/idl/types/SwitchboardDecimal)       | Maintains the minimum oracle response this round                    |
| max_response         | [SwitchboardDecimal](/near/idl/types/SwitchboardDecimal)       | Maintains the maximum oracle response this round                    |
| oracles              | Vec<u8[32]\>                                                   | Public keys of the oracles fulfilling this round                    |
| medians_data         | Vec<[SwitchboardDecimal](/near/idl/types/SwitchboardDecimal)\> | Represents all successful node responses this round. `NaN` if empty |
| current_payout       | Vec<i64\>                                                      | Rewards to provide oracles and round openers on this queue.         |
| medians_fulfilled    | Vec<bool\>                                                     | Keeps track of which responses are fulfilled here                   |
| errors_fulfilled     | Vec<bool\>                                                     | Keeps track of which errors are fulfilled here                      |
| \_ebuf               | Vec<u8\>                                                       | Reserved.                                                           |
| features             | Vec<u8\>                                                       |                                                                     |
