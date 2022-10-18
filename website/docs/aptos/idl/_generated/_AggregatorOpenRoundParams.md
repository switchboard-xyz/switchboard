Call OpenRound on an aggregator and request a new value from a batch of oracles.

| Field          | Type      | Description                                               |
| -------------- | --------- | --------------------------------------------------------- |
| aggregatorAddr | HexString | Address of the aggregator that is requesting a new value. |
| jitter         | u64       | Pseudorandom value added to next aggregator update time.  |
