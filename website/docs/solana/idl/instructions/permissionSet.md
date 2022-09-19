Sets the permission in the PermissionAccount

## Accounts

| Name       | isMut | isSigner | Description |
| ---------- | ----- | -------- | ----------- |
| permission | true  | false    |             |
| authority  | false | true     |             |

## Args

| Field      | Type                                                                   | Description                                                                                    |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| permission | [SwitchboardPermission](/feeds/solana/idl/types/SwitchboardPermission) | The [SwitchboardPermission](/feeds/solana/idl/types/SwitchboardPermission) enumeration to set. |
| enable     | bool                                                                   | Specifies whether to enable or disable the permission.                                         |
