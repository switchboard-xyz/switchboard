| Field                         | Type   | Description                                                                                                                                       |
| ----------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                          | u8[]   | Name of the queue to store on-chain.                                                                                                              |
| metadata                      | u8[]   | Metadata of the queue to store on-chain.                                                                                                          |
| feedProbationPeriod           | u64    | After a feed lease is funded or re-funded, it must consecutively succeed N amount of times or its authorization to use the queue is auto-revoked. |
| consecutiveFeedFailureLimit   | u64    | Consecutive failure limit for a feed before feed permission is revoked.                                                                           |
| consecutiveOracleFailureLimit | u64    | Consecutive failure limit for an oracle before oracle permission is revoked.                                                                      |
| unpermissionedVrfEnabled      | bool   | Not used on Aptos currently.                                                                                                                      |
| lockLeaseFunding              | bool   | Prevent new leases from being funded n this queue. Useful to turn down a queue for migrations, since authority is always immutable.               |
| enableBufferRelayers          | bool   | Not used on Aptos currently.                                                                                                                      |
| minStake                      | u64    | The minimum amount of stake oracles must present to remain on the queue.                                                                          |
| maxSize                       | u64    | Maximum number of oracles a queue can support.                                                                                                    |
| createdAt                     | u64    | Unix timestamp when the resource was created.                                                                                                     |
| features                      | bool[] |                                                                                                                                                   |
| \_ebuf                        | u8[]   | Reserved.                                                                                                                                         |
