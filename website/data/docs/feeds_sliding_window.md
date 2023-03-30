During periods of network congestion, oracle responses may be delayed and
processed by the network after the next round has started. This results in a
data feed to be stale for a prolonged period of time even when an oracle
response is just milliseconds too late.

To remedy this, Solana feeds may enable sliding window mode
`aggregator.resolutionMode`. Sliding window mode allows an aggregator to store
the last 16 oracle responses even if they were processed after its assigned
round has closed. The sliding window account can only store a single response
per oracle to prevent an oracle from filling the responses with malicous data.
Upon each response, the `aggregator.latestConfirmedRound` is calculated from the
median of the last `aggregator.oracleRequestBatchSize` responses.
