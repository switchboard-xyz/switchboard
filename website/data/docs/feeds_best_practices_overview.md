Developers building real world applications for web3 rely on oracles to relay
and publish data on-chain. Oracles are not a one size fit all solution, in fact
redundancy should be used depending on your use cases and risk tolerance.
Switchboard’s goal is to generalize data feeds and leave it up to the developer
to configure and tune their data flow. Today’s article looks at how Switchboard
feeds differ from other providers, and how you can configure your data feed to
increase economic security.

A Switchboard feed belongs to a single oracle queue, which is a realm of oracles
that get assigned to update requests in a round-robin fashion. The feed’s config
dictates how update requests are invoked and routed through the network, along
with a set of job accounts that define how data is sourced off-chain.
Switchboard data feeds can fetch data from http endpoints, websockets, or
on-chain sources. Switchboard feeds are meant to be generic enough to meet any
use case and leave it up to the on-chain consumers to configure.