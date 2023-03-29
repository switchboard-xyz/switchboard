When a new update is requested, the feeds `aggregator.currentRound` is zeroized.
The AggregatorRound is updated each time an assigned oracle responds. After
`aggregator.minOracleResponses` responses, the round is moved to
`aggregator.latestConfirmedRound` and ready for on-chain programs to consume.

- sbv2 program waits for `aggregator.minOracleResults` to be submitted by the
  assigned oracles
- When sufficient oracle responses, the sbv2 program computes the accepted value
  from the median of the oracle responses
- If a feed has a history buffer account, the accepted result is pushed onto the
  buffer
- Oracles that responded within `queue.varianceToleranceMultiplier` are rewarded
  `queue.reward` from the feed's LeaseContract
- If `queue.slashingEnabled`, oracles that responded outside the
  `queue.varianceToleranceMultiplier` are slashed `queue.reward` tokens from
  it's `oracle.tokenAccount` and transferred to the feed's `lease.escrow`
- If additional oracle responses are submitted after a value has been accepted,
  the median is recalculated based on the new response set, oracle rewards are
  redistributed, and the history buffer value is updated
