| Field            | Type                                       | Description                                                                                                                     |
| ---------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| stateBump        | u8                                         | The [SbState](/solana/idl/accounts/SbState) bump used to derive its public key.                                                 |
| permissionBump   | u8                                         | The PermissionAccount bump used to derive its public key.                                                                       |
| vrfPool          | publicKey                                  | The public key of the [VrfPoolAccountData](/solana/idl/accounts/VrfPoolAccountData) that the VrfLiteAccount belongs to, if any. |
| status           | [VrfStatus](/solana/idl/types/VrfStatus)   | The current status of the VRF Lite account.                                                                                     |
| result           | u8[32]                                     | The VRF round result. Will be zeroized if still awaiting fulfillment.                                                           |
| counter          | u128                                       | Incremental counter for tracking VRF rounds.                                                                                    |
| alpha            | u8[256]                                    | The alpha bytes used to calculate the VRF proof.                                                                                |
| alphaLen         | u32                                        | The number of bytes in the alpha buffer.                                                                                        |
| requestSlot      | u64                                        | The Slot when the VRF round was opened.                                                                                         |
| requestTimestamp | i64                                        | The unix timestamp when the VRF round was opened.                                                                               |
| authority        | publicKey                                  | On-chain account delegated for making account changes.                                                                          |
| queue            | publicKey                                  | The [OracleQueueAccountData](/solana/idl/accounts/OracleQueueAccountData) that is assigned to fulfill VRF update request.       |
| escrow           | publicKey                                  | The token account used to hold funds for VRF update request.                                                                    |
| callback         | [CallbackZC](/solana/idl/types/CallbackZC) | The callback that is invoked when an update request is successfully verified.                                                   |
| builder          | [VrfBuilder](/solana/idl/types/VrfBuilder) | Struct containing the intermediate state between VRF crank actions.                                                             |
| expiration       | i64                                        | Unix timestamp when the VrfLiteAccount is no longer needed.                                                                     |
| ebuf             | u8[1024]                                   | Reserved for future info.                                                                                                       |
