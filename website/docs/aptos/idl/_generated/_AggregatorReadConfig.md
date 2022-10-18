| Field                 | Type        | Description                                                                           |
| --------------------- | ----------- | ------------------------------------------------------------------------------------- |
| readCharge            | u64         | The cost to read a data feed.                                                         |
| rewardEscrow          | HexString   | The account address that will receive any funds incurred from setting a `readCharge`. |
| readWhitelist         | HexString[] | Optional, account addresses permitted to read a data feed.                            |
| limitReadsToWhitelist | bool        | Flag dictating whether a feed permits public reads.                                   |
