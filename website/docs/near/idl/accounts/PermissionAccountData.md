---
hide_table_of_contents: true
---

| Field              | Type     | Description                                                                                                                |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| authority          | String   | The authority that is allowed to set permissions for this account.                                                         |
| permissions        | u32      | The [SwitchboardPermission](/near/idl/types/SwitchboardPermission) enumeration assigned by the `granter` to the `grantee`. |
| granter            | u8[32]   | Address of account that is granting permissions to use its resources.                                                      |
| grantee            | u8[32]   | Address of account that is being assigned permissions to use a granters resources.                                         |
| expiration         | u64      | Timestamp when the permissions expire.                                                                                     |
| creation_timestamp | u64      | Unix timestamp when the crank was created on-chain.                                                                        |
| update_timestamp   | u64      |                                                                                                                            |
| \_ebuf             | Vec<u8\> | Reserved                                                                                                                   |
| features           | Vec<u8\> |                                                                                                                            |
