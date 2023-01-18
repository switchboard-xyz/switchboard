<b>Size: </b>1269 Bytes<br /><b>Rent Exemption: </b>0.009723120 SOL<br /><br />.

| Field                         | Type                                                       | Description                                                                                                                                                                                                                                                                         |
| ----------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                          | u8[32]                                                     | Name of the queue to store on-chain.                                                                                                                                                                                                                                                |
| metadata                      | u8[64]                                                     | Metadata of the queue to store on-chain.                                                                                                                                                                                                                                            |
| authority                     | publicKey                                                  | The account delegated as the authority for making account changes or assigning permissions targeted at the queue.                                                                                                                                                                   |
| oracleTimeout                 | u32                                                        | Interval when stale oracles will be removed if they fail to heartbeat. Time period we should remove an oracle after if no response.                                                                                                                                                 |
| reward                        | u64                                                        | Rewards to provide oracles and round openers on this queue.                                                                                                                                                                                                                         |
| minStake                      | u64                                                        | The minimum amount of stake oracles must present to remain on the queue.                                                                                                                                                                                                            |
| slashingEnabled               | bool                                                       | Whether slashing is enabled on this queue.                                                                                                                                                                                                                                          |
| varianceToleranceMultiplier   | [SwitchboardDecimal](/solana/idl/types/switchboarddecimal) | The tolerated variance amount oracle results can have from the accepted round result before being slashed. slashBound = varianceToleranceMultiplier \* stdDeviation Default: 2.                                                                                                     |
| feedProbationPeriod           | u32                                                        | Number of update rounds new feeds are on probation for. If a feed returns 429s within probation period, auto disable permissions. After a feed lease is funded or re-funded, it must consecutively succeed N amount of times or its authorization to use the queue is auto-revoked. |
| currIdx                       | u32                                                        | Current index of the oracle rotation.                                                                                                                                                                                                                                               |
| size                          | u32                                                        | Current number of oracles on a queue.                                                                                                                                                                                                                                               |
| gcIdx                         | u32                                                        | Garbage collection index.                                                                                                                                                                                                                                                           |
| consecutiveFeedFailureLimit   | u64                                                        | Consecutive failure limit for a feed before feed permission is revoked.                                                                                                                                                                                                             |
| consecutiveOracleFailureLimit | u64                                                        | Consecutive failure limit for an oracle before oracle permission is revoked.                                                                                                                                                                                                        |
| unpermissionedFeedsEnabled    | bool                                                       | Enabling this setting means data feeds do not need explicit permission to join the queue and request new values from its oracles.                                                                                                                                                   |
| unpermissionedVrfEnabled      | bool                                                       | Enabling this setting means VRF accounts do not need explicit permission to join the queue and request new values from its oracles.                                                                                                                                                 |
| curatorRewardCut              | [SwitchboardDecimal](/solana/idl/types/switchboarddecimal) | TODO: Revenue percentage rewarded to job curators overall. Not implemented yet. Revenue percentage rewarded to job curators overall.                                                                                                                                                |
| lockLeaseFunding              | bool                                                       | Prevent new leases from being funded n this queue. Useful to turn down a queue for migrations, since authority is always immutable.                                                                                                                                                 |
| mint                          | publicKey                                                  | Token mint used for the oracle queue rewards and slashing.                                                                                                                                                                                                                          |
| enableBufferRelayers          | bool                                                       | Whether oracles are permitted to fulfill buffer relayer update request.                                                                                                                                                                                                             |
| ebuf                          | u8[968]                                                    | Reserved for future info. Reserved.                                                                                                                                                                                                                                                 |
| maxSize                       | u32                                                        | Maximum number of oracles a queue can support.                                                                                                                                                                                                                                      |
| dataBuffer                    | publicKey                                                  | The public key of the OracleQueueBuffer account holding a collection of Oracle pubkeys that haver successfully heartbeated before the queues `oracleTimeout`.                                                                                                                       |