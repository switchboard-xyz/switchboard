The following parameters can be provided when initializing an oracle on a queue:

| field                  | Required | Description                                                                                                                                    |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                 | false    | The name of the oracle on-chain for easier identification.                                                                                     |
| `metadata`             | false    | Metadata for the oracle on-chain for easier identification.                                                                                    |
| `authority`            | false    | The authority for the oracle and is required to sign any transactions on behalf of the oracle. Defaults to payer pubkey if not provided.       |
| `stakingWalletKeypair` | false    | Keypair used for the oracle's staking wallet and is used in the PDA derivation scheme.                                                         |
| `stakeAmount`          | false    | Wrap any necessary SOL and fund the oracle's staking wallet. Needed if a queue has a `minStake` requirement.                                   |
| `disableWrap`          | false    | Will not wrap any missing SOL. Assumes a previous instruction will handle it.                                                                  |
| `funderTokenWallet`    | false    | Public key of a wrapped SOL token account that will fund the staking wallet. Defaults to payers wrapped SOL associated wallet if not provided. |
| `funderAuthority`      | false    | Keypair that is used to approve any token transfers on behalf of the `funderTokenWallet`. Defaults to payer if not provided.                   |
| `enable`               | false    | If the `queueAuthority` keypair is provided or the payer is the queue authority, enable `PERMIT_ORACLE_HEARTBEAT` permissions for the oracle.  |
| `queueAuthority`       | false    | Keypair of the queue authority that will approve permissions for the oracle. Defaults to payer keypair if not provided.                        |
