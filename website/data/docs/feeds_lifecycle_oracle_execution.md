- Oracle watches the chain for an **_AggregatorOpenRoundEvent_** with the
  oracle's public key assigned to the update
- Oracle fetches the feed and job account definitions from its RPC Provider
- Oracle verifies the job account definitions match the feeds
  `aggregator.jobHashes`
- Oracle executes the job definitions in parallel
- When an oracle receives `aggregator.minJobResults`, it calculates the weighted
  median based on the feeds `aggregator.jobWeights`. Note, this is not enforced
  on-chain and is purely up to the oracle to respect
- If a feed has configured a `aggregator.varianceThreshold` and
  `aggregator.forceReportPeriod` has not elapsed, the oracle calculates the
  percentage change between its calculated result and the previous confirmed
  round. If it does not exceed the feeds `aggregator.varianceThreshold`, the
  oracle drops the update request and waits for new update request
- If a feeds configuration dictate a new on-chain result, the oracle submits an
  **_aggregatorSaveResult_** transaction