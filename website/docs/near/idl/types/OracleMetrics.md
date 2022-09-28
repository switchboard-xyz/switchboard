---
hide_table_of_contents: true
---

| Field                     | Type | Description                                                                                                |
| ------------------------- | ---- | ---------------------------------------------------------------------------------------------------------- |
| consecutive_success       | u64  | Number of consecutive successful update request                                                            |
| consecutive_error         | u64  | Number of consecutive update request that resulted in an error                                             |
| consecutive_disagreement  | u64  | Number of consecutive update request that resulted in a disagreement with the accepted median result       |
| consecutive_late_response | u64  | Number of consecutive update request that were posted on-chain late and not included in an accepted result |
| consecutive_failure       | u64  | Number of consecutive update request that resulted in a failure                                            |
| total_success             | u128 | Total number of successful update request                                                                  |
| total_error               | u128 | Total number of update request that resulted in an error                                                   |
| total_disagreement        | u128 | Total number of update request that resulted in a disagreement with the accepted median result             |
| total_late_response       | u128 | Total number of update request that were posted on-chain late and not included in an accepted result       |
