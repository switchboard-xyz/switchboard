---
source: "https://docs.switchboard.xyz/feeds/cost"
embedding-id: "feeds-cost"
---
Each data feed has a LeaseContract, which is a pre-funded escrow account to
reward oracles for fulfilling update request. The LeaseContract has a
pre-specified `lease.withdrawAuthority` which is the only wallet allowed to
withdraw funds from the lease escrow. Any user is able to contribute to a
LeaseContract and keep the feed updating.

When a new openRound is successfully requested for a data feed, the user who
requested it is transferred `queue.reward` tokens from the feeds LeaseContract.
This is to incentivize users and crank turners to keep feeds updating based on a
feeds config.

When a data feed result is accepted on-chain by a batch of oracles, the oracle
rewards, as specified by `queue.reward`, are automatically deducted from the
`lease.escrow` and transferred to an `oracle.tokenAccount`.
