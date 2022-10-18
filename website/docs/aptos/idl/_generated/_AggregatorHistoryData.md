Resource storing the historic samples for a Switchboard aggregator.

| Field           | Type                                                            | Description                                                   |
| --------------- | --------------------------------------------------------------- | ------------------------------------------------------------- |
| history         | [AggregatorHistoryRow](/aptos/idl/types/AggregatorHistoryRow)[] | Array of historical samples for confirmed values.             |
| historyWriteIdx | u64                                                             | Tracks the current array index to write new samples on-chain. |
