A history buffer account stores a set number of accepted results for an
aggregator, and given Solana’s maximum account size of 10MB, the maximum number
of samples a single history buffer can support is ~350,000 samples. An
aggregator can only have a single history buffer associated with it.

A history buffer has a static account size when it is initialized, equal to:
`12 Bytes + (28 Bytes × Num Samples)`. Each time an aggregator value is updated
on-chain, the associated history buffer is shifted to the right, and the last
value is dropped.

This feature allows Switchboard tasks to parse a history buffer and perform a
set of calculations, such as the TwapTask. This allows feeds to reference other
feeds and perform complex calculations based on historical samples.
