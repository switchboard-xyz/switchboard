Each oracle queue is independent and maintain their own configurations, which
dictates its degree of security. Queue's can require update requesters to be
pre-approved to use a queues resources or allow any requester access to a queue.
Queue's also specify a minimum stake oracles must maintain in their escrow
wallet before joining a queue, which acts as a deposit to incentivize honest
oracle behavior.

When creating a queue, an OracleQueueBuffer account must also be initialized
with a size of 8 Bytes + (32 Bytes × `queue.maxSize`), where `queue.maxSize` is
the maximum number of oracles the queue can support. The OracleQueueBuffer
account `queue.dataBuffer` stores a list of oracle public keys in a round robin
fashion, using `queue.currIdx` to track its position on the queue for allocating
resource update request. Once a buffer is full, oracles must be removed before
new oracles can join the network. An oracle can be assigned to many update
request simultaneously but must continuously heartbeat on-chain to signal
readiness.



The queue uses `queue.gcIdx` to track its garbage collection index. When an
oracle heartbeats on-chain, it passes the oracle account at index `queue.gcIdx`.
If the oracle account has failed to heartbeat before `queue.oracleTimeout`, it
is removed from the queue until its next successful heartbeat and will no longer
be assigned resource update requests.
