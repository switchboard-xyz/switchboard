---
source: "https://docs.switchboard.xyz/feeds"
embedding-id: "feeds-composability"
---
Data feeds may reference other data feeds and build upon each other. It is
**_strongly_** recommended that you own any feed that you reference in case of
downstream impacts out of your control. While anyone can extend another feeds
lease, a lease owner can always withdraw any lease funds and prevent future
updates.

As an example, you could construct the following feed definition:

- Create a Switchboard feed that sources SOL/USD prices from a variety of
  exchanges, each weighted by their 7d volume, along with a history buffer
- Create a Switchboard feed that uses an OracleTask to fetch the Pyth SOL/USD
  price every 10 seconds, along with a history buffer
- Create a Switchboard feed that uses an OracleTask to fetch the Chainlink
  SOL/USD price every 10 seconds, along with a history buffer
- Finally, create a Switchboard feed that calculates the 1min TWAP of each
  source above and returns the median of the results

This is just a small window into how Switchboard feeds can build on each other
and let the downstream consumer configure their feeds to meet their own use
cases.
