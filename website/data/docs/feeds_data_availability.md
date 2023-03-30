Configure when and how often you need new data on-chain.

- **Crank / Automatic Updates** — any data feed that has sufficient queue
  permissions is able to join a crank. A crank is a scheduling mechanism for
  data feeds that will invoke a new round after each minUpdateDelay with some
  added jitter to prevent predictable oracle assignment. Data feeds not on a
  crank should set the option disableCrank and will need to manually requests
  new updates or have their own scheduling mechanism.
- **minUpdateDelay** — determines how often new data can be requested on-chain.
  This should be set depending on your use case. Decentralized exchanges will
  need faster updates than a lending protocol.
- **varianceThreshold** — is the change percentage required between a previous
  round and the current oracle result before a value is published on-chain. This
  is used to conserve lease fees for the feed operator. Highly available feeds
  should set this to 0 so values are always reported on-chain.
- **forceReportPeriod** — is the max staleness for a feed. If the
  varianceThreshold was not exceeded but a set number of seconds have passed,
  the oracle will respond on-chain. This should almost always be used with
  varianceThreshold to ensure your feed is updating as expected and not stale
  for another reason.
