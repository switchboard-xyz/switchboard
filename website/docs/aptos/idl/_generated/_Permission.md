| Field       | Type      | Description                                                                            |
| ----------- | --------- | -------------------------------------------------------------------------------------- |
| authority   | HexString | The account delegated as the authority for making changes.                             |
| permissions | BitVector | The SwitchboardPermission enumeration assigned by the `granter` to the `grantee`.      |
| granter     | HexString | Address of the account that is granting permissions to use its resources.              |
| grantee     | HexString | Address of the account that is being granted permissions to use a granter's resources. |
| createdAt   | u64       | Unix timestamp when the resource was created.                                          |
| updatedAt   | u64       | Unix timestamp when the permissions were last updated.                                 |
| features    | bool[]    |                                                                                        |
| \_ebuf      | u8[]      | Reserved.                                                                              |
