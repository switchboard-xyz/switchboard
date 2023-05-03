---
source: "https://docs.switchboard.xyz/feeds#job-definitions"
embedding-id: "jobs-overview"
---
An Aggregator Account stores a collection of Job Account public keys along with
the hashes of the job definitions. This is to prevent malicious RPC nodes from
providing incorrect task definitions to oracles before fulfillment.

A Job Account is a collection of [Switchboard Tasks](/tasks) that get executed
by an oracle sequentially. Each Job Account typically corresponds to a single
data source. A data feed requires at least one job account and at most 16 job
accounts.


