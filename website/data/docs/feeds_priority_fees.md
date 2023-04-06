---
source: "https://docs.switchboard.xyz/feeds/cost#priority-fees"
embedding-id: "feeds-priority-fees"
---
During periods of network congestion, oracle responses may be dropped by the
network. Solana added priority fees to combat this which aficts an extra fee on
top of the transaction cost to incentivize the leader to process your
transaction ahead of a lower cost transaction.

A feed authority can specify a custom priority fee step function with the
following fields:

- **basePriorityFee**: A fee added to all oracle responses for a given feed
- **priorityFeeBumpPeriod**: The number of seconds a feed is stale before
  bumping the priority fee
- **priorityFeeBump**: An extra fee to add for each period a feed has been stale
- **maxPriorityFeeMultiplier**: The maximum bump periods

The priority fee is deducted from a feed's lease with each successful oracle
response.
