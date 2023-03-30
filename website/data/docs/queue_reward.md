The queue's specified `queue.reward` is the number of tokens an oracle or crank
turner receives for successfully completing an on-chain action. For a crank
turner this is turning the crank and invoking a data feed update. For an oracle
this is responding to an update request within the reliable margin from the
accepted result.

Queues should reward oracles enough such that the economic incentive over the
lifecycle of the feed exceeds the opportunity cost to attack a protocol
consuming the feed.
