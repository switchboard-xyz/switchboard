| Field             | Type      | Description                                             |
| ----------------- | --------- | ------------------------------------------------------- |
| oracleAddress     | HexString | Address of oracle that removed funds from their wallet. |
| destinationWallet | HexString | Wallet that received funds from the oracle's wallet.    |
| previousAmount    | u64       | Amount before the withdraw.                             |
| newAmount         | u64       | Amount after the withdraw.                              |
| timestamp         | u64       | Unix timestamp of the withdraw.                         |
