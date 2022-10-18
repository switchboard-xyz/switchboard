| Field          | Type      | Description                                                                                       |
| -------------- | --------- | ------------------------------------------------------------------------------------------------- |
| addr           | HexString | Address of the job account resource.                                                              |
| name           | u8[]      | Name of the job to store on-chain.                                                                |
| metadata       | u8[]      | Metadata of the job to store on-chain.                                                            |
| authority      | HexString | The account delegated as the authority for making changes.                                        |
| expiration     | u64       | Timestamp when the feed is no longer needed.                                                      |
| hash           | u8[]      | Hash of the job account to prevent malicous RPC nodes from providing an incorrect job definition. |
| data           | u8[]      | The serialized `OracleJob`.                                                                       |
| referenceCount | u64       | The number of aggregators currently referencing this job.                                         |
| totalSpent     | u64       | The total amount spent on leases associated with this job.                                        |
| createdAt      | u64       | Unix timestamp when the resource was created.                                                     |
| variables      | u8[][]    |                                                                                                   |
| features       | bool[]    |                                                                                                   |
| \_ebuf         | u8[]      | Reserved.                                                                                         |
