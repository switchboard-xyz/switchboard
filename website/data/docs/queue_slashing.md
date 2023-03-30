A queue may set `queue.slashingEnabled` to true in order to dissuade oracles
from responding to update request outside a set margin of error.

A queue's `queue.varianceToleranceMultiplier` determines how many standard
deviations an oracle must respond within before being slashed and forfeiting a
portion of their stake. [Defaults to 2 std deviations]

DeFi protocols with a significant TVL should require their feeds to be on a
queue with slashing enabled.
