| Field      | Type      | Description                                                                                                                                            |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| authority  | HexString | The account delegated as the authority for the granter.                                                                                                |
| granter    | HexString | Address of oracle queue that is granting permissions to use its resources.                                                                             |
| grantee    | HexString | Address of account that is being assigned permissions to use a granters resources.                                                                     |
| permission | u64       | Permissions being assigned to a resource. See [SwitchboardPermission](/aptos/idl/types/SwitchboardPermission) for enumerations and their descriptions. |
| enable     | bool      | Flag dictating whether permissions are being enabled or disabled.                                                                                      |
