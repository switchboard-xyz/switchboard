---
source: "https://docs.switchboard.xyz/feeds/updates#request-update"
embedding-id: "feeds-lifecycle-request-update"
---
A feed is updated when someone calls `aggregatorOpenRound` on-chain. If
openRound is called before `aggregator.minUpdateDelaySeconds` have elapsed, the
openRound call will fail and the user will forfeit their transaction fees. If
successful, the user is rewarded from the feed's lease for keeping the feed
updating.

Optionally, a feed may be pushed onto a crank and updated periodically. Any data
feed permitted to request updates on a queue is also permitted to join a queue's
existing Crank, `aggregator.crankPubkey`. The Crank is the scheduling mechanism
behind feeds that allow them to be periodically updated. The Crank is a buffer
account that stores a collection of aggregator public keys, ordered by their
next available update, with some level of jitter added to prevent a predictable
oracle allocation cycle. A feed can set `aggregator.disableCrank` to prevent
being pushed onto a Crank and draining it's lease.

After `aggregatorOpenRound` is called successfully, the queue assigns the next
`aggregator.oracleRequestBatchSize` oracles to the update request and assigns
them to the current round.

- Any user calls **_aggregatorOpenRound_**, either manually or via a crank turn
- sbv2 program checks if `aggregator.minUpdateDelaySeconds` have passed since
  the last openRound call
- sbv2 program checks if a LeaseContract has enough funds to reward the oracles
  for the next round
- sbv2 program assigns the next `aggregator.oracleRequestBatchSize` oracles to
  the update request and emits an **_AggregatorOpenRoundEvent_**
