<b>Size: </b>29058 Bytes<br /><b>Rent Exemption: </b>0.203134560SOL<br /><br />.

| Field        | Type                                          | Description                                                                                                               |
| ------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| status       | [VrfStatus](/solana/idl/types/vrfstatus)      | The current status of the VRF account.                                                                                    |
| counter      | u128                                          | Incremental counter for tracking VRF rounds.                                                                              |
| authority    | publicKey                                     | On-chain account delegated for making account changes.                                                                    |
| oracleQueue  | publicKey                                     | The [OracleQueueAccountData](/solana/idl/accounts/oraclequeueaccountdata) that is assigned to fulfill VRF update request. |
| escrow       | publicKey                                     | The token account used to hold funds for VRF update request.                                                              |
| callback     | [CallbackZC](/solana/idl/types/callbackzc)    | The callback that is invoked when an update request is successfully verified.                                             |
| batchSize    | u32                                           | The number of oracles assigned to a VRF update request.                                                                   |
| builders     | [VrfBuilder](/solana/idl/types/vrfbuilder)[8] | Struct containing the intermediate state between VRF crank actions.                                                       |
| buildersLen  | u32                                           | The number of builders.                                                                                                   |
| testMode     | bool                                          |                                                                                                                           |
| currentRound | [VrfRound](/solana/idl/types/vrfround)        | Oracle results from the current round of update request that has not been accepted as valid yet.                          |
| ebuf         | u8[1024]                                      | Reserved for future info. Reserved.                                                                                       |
