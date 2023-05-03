---
source: "https://docs.switchboard.xyz/crank"
embedding-id: "crank-overview"
tags:
    - crank
    - data feed
    - jitter
    - scheduling
---

A queue can choose to create one or many cranks. A crank is a scheduling
mechanism that allows data feeds to request periodic updates. A crank can be
turned by anyone, and if successful, the crank turner will be rewarded for jump
starting the system.

A data feed is only permitted to join a crank if it has sufficient permissions
(as detailed above) and the crank has available capacity. Data feeds on a crank
are ordered by their next available update time with some level of jitter to
mitigate oracles being assigned to the same update request upon each iteration
of the queue, which makes them susceptible to a malicous oracle.
