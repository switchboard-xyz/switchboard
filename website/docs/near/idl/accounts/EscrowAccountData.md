---
hide_table_of_contents: true
---

| Field                     | Type      | Description                                                        |
| ------------------------- | --------- | ------------------------------------------------------------------ |
| address                   | u8[32]    | Address of the crank account.                                      |
| mint                      | String    |                                                                    |
| authority                 | publicKey | The authority that is allowed to set permissions for this account. |
| amount_locked             | u128      |                                                                    |
| program_controlled        | bool      |                                                                    |
| creation_timestamp        | u64       | Unix timestamp when the escrow account was created on-chain.       |
| last_transfer_timestamp   | u64       |                                                                    |
| last_delegation_timestamp | u64       |                                                                    |
| last_delegation_block     | u64       |                                                                    |
| \_ebuf                    | Vec<u8\>  | Reserved                                                           |
| features                  | Vec<u8\>  |                                                                    |
