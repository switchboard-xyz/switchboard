---
source: "https://docs.switchboard.xyz/feeds/best-practices#oracle-consensus-1"
embedding-id: "feeds-oracle-consensus"
---
Configure how many oracles are assigned to a request and how many must respond
to accept a result.

- **oracleRequestBatchSize** — sets the number of oracles assigned to each
  update request. The quickest way to increase feed security is to request more
  oracles each update round because it requires a higher degree of oracle
  collusion in order to affect the on-chain result. In reality, this increases
  the overall cost of a feed so it’s a careful consideration for feed operators
  when configuring a feed.
- **minOracleResults** — set the minimum number of oracles that must respond
  before accepting a result on-chain. This ensures you have a sufficient data
  set before the on-chain program takes the median of the oracle responses.

  The number of oracles assigned to an update request should always be less than
  the number of oracles required to respond. There are a variety of reasons that
  may cause an oracle response to fail, such as Solana network degradation,
  individual oracle network issues, or transaction spamming. Your feed’s lease
  is only deducted when a round was successfully closed based on the feed’s
  minOracleResults.