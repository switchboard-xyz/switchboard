You should select a queue that will provide your feed with a sufficient level of
security.

- **Oracle Reputation** — you should select a queue with a proven track record
  of honest reporting. Oracles store various metrics on-chain that can be used
  to determine their reliability. Oracles are assigned to update request in a
  round robin fashion where assignment is pseudo-random but this gives a fairly
  accurate picture of a queues overall reliability.
- **Oracle minStake** — you should select a queue that requires oracles to stake
  a respectable sum of capital before joining the queue. This will be used to
  slash oracles for misreporting feeds.
- **Queue Reward** — your selected queue should reward oracles sufficiently
  enough such that they are incentivized to report honestly, yet not too high
  where update request are prohibitively expensive. Switchboard DAO queues
  currently use 12500 lamports as the oracle reward, per update request.
- **Queue Permissions** — high availability feeds should be on a queue where
  unpermissionedFeedsEnabled is set to false. This prevents data feeds from
  being able to join and spam the queue with update requests.
- **Slashing** — feeds securing financial applications should be on a queue with
  slashingEnabled to dissuade oracles from malicious behavior.

  You may notice Switchboard DAO queues do not have all of these settings
  enabled yet. Switchboard DAO queues currently rely on vetting trusted oracle
  operators to bootstrap the network. As the network grows, the queues will be
  further decentralized and rely on these parameters to enforce security. Stay
  tuned for more information on the Switchboard DAO and how new oracles will be
  permitted by the network.