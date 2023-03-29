The following highlights some basic maintenance you should employ when creating
your own Switchboard feed.

- **Monitor Lease Funds** — you should monitor your feeds lease account for low
  balances. When a feed’s lease is emptied, it will no longer process new
  updates until it has enough to reward the oracles processing the update. We
  are working with a few web3 messaging services to enable wallet notifications
  when leases are low on funds.
- **Monitor Crank Eviction** — if a lease is emptied, it will also be evicted
  from its crank. Switchboard feeds act like public utilities where anyone is
  free to re-push it to a crank, as long as it doesn’t have
  `aggregator.disableCrank` set to true.
- **Monitor Data Sources** — Sometimes APIs change or move. High availability
  feeds should have some basic routine health checks to ensure their on-chain
  data is updating as expected.
- **Monitor Priority Fees** - Solana data feeds may specify a priority fee
  configuration in order to push updates through during periods of congestion.
  You should monitor the average priority fee for the network and update as
  needed.
