A feed can set an `aggregator.varianceThreshold` to instruct an oracle to skip
reporting a value on-chain if the percentage change between the current result
and the `aggregator.previousConfirmedRoundResult` is not exceeded. This is a
cost saving tool to conserve lease cost during low volatility.

A feeds `aggregator.forceReportPeriod` is the compliment and instructs an oracle
to always report a result if `aggregator.forceReportPeriod` seconds have elapsed
since the last successful confirmed round. This can be thought of as the maximum
allowable staleness for a feed.

The two settings above can greatly increase the lifespan of a feed's lease but
also makes it difficult to estimate the remaining time on a lease.
