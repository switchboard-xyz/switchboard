| Field           | Type                                                                    | Description                                                 |
| --------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------- |
| openRoundParams | [AggregatorOpenRoundParams](/aptos/idl/types/AggregatorOpenRoundParams) |                                                             |
| queueAddr       | HexString                                                               | Address of the oracle queue that the resource belongs to.   |
| batchSize       | u64                                                                     | Number of oracles assigned to an update request.            |
| jobKeys         | HexString[]                                                             |                                                             |
| reward          | u64                                                                     | Rewards to provide oracles and round openers on this queue. |
| openRoundReward | u64                                                                     |                                                             |
