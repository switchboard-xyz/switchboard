| Field                         | Type                                                      | Description                                                |
| ----------------------------- | --------------------------------------------------------- | ---------------------------------------------------------- |
| authority                     | HexString                                                 | The account delegated as the authority for making changes. |
| name                          | u8[]                                                      |                                                            |
| metadata                      | u8[]                                                      |                                                            |
| oracleTimeout                 | u64                                                       |                                                            |
| reward                        | u64                                                       |                                                            |
| minStake                      | u64                                                       |                                                            |
| slashingEnabled               | bool                                                      |                                                            |
| varianceToleranceMultiplier   | [SwitchboardDecimal](/aptos/idl/types/SwitchboardDecimal) |                                                            |
| feedProbationPeriod           | u64                                                       |                                                            |
| consecutiveFeedFailureLimit   | u64                                                       |                                                            |
| consecutiveOracleFailureLimit | u64                                                       |                                                            |
| unpermissionedFeedsEnabled    | bool                                                      |                                                            |
| unpermissionedVrfEnabled      | bool                                                      |                                                            |
| lockLeaseFunding              | bool                                                      |                                                            |
| enableBufferRelayers          | bool                                                      |                                                            |
| maxSize                       | u64                                                       |                                                            |
| data                          | HexString[]                                               |                                                            |
| saveConfirmationReward        | u64                                                       |                                                            |
| saveReward                    | u64                                                       |                                                            |
| openRoundReward               | u64                                                       |                                                            |
| slashingPenalty               | u64                                                       |                                                            |
