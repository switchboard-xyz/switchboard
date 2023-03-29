An oracle with **PermitOracleHeartbeat** permissions _MUST_ periodically
heartbeat on the queue to signal readiness, which adds the oracle to the queue
and allows it to be assigned resource update requests. Oracle positions are
periodically swapped in the OracleQueueBuffer account to mitigate oracles being
assigned the same update requests on each iteration of the queue.
