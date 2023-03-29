Switchboard is a multi-chain oracle, currently deployed on Aptos, CoreDAO, NEAR,
Solana, Starknet, and Sui. Each is a native implementation with subtle
differences but the overall architecture remains the same. The top-level program
state account controls the token mint used for oracle rewards and data feed
update costs for each queue.

Switchboard was architected to be permissionless and allow users to create and
manage their own Switchboard network. Each chain can support many oracle queues,
which can have varrying levels of security and trust assumptions.
