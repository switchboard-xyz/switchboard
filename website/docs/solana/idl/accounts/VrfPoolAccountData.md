| Field       | Type      | Description                                                                                                               |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| authority   | publicKey | On-chain account delegated for making account changes.                                                                    |
| queue       | publicKey | The [OracleQueueAccountData](/solana/idl/accounts/OracleQueueAccountData) that is assigned to fulfill VRF update request. |
| escrow      | publicKey | The token account used to hold funds for VRF update request.                                                              |
| minInterval | u32       | The minimum number of seconds between requesting a new VRF result for a given VrfLiteAccount.                             |
| maxRows     | u32       | The maximum number of rows the VrfPool can support.                                                                       |
| size        | u32       | The current size of the VrfPool                                                                                           |
| idx         | u32       | Incrementer used to track the pools position.                                                                             |
| stateBump   | u8        | The [SbState](/solana/idl/accounts/SbState) bump used to derive its public key.                                           |
| ebuf        | u8[135]   | Reserved for future info.                                                                                                 |
