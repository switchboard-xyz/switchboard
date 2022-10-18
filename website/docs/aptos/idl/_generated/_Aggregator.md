Resource storing the top level fields for a Switchboard aggregator

| Field     | Type                                                  | Description                                                                                          |
| --------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| signerCap | [SignerCapability](/aptos/idl/types/SignerCapability) | The signer capability corresponding to the account that the resource is on.                          |
| authority | HexString                                             | The account delegated as the authority for making account changes or withdrawing funds from a lease. |
| name      | u8[]                                                  | Name of the aggregator to store on-chain.                                                            |
| metadata  | u8[]                                                  | Metadata of the aggregator to store on-chain.                                                        |
| createdAt | u64                                                   | Unix timestamp when the aggregator was created.                                                      |
| isLocked  | bool                                                  | Flag for whether an aggregators configuration is locked for editing.                                 |
| \_ebuf    | u8[]                                                  | Reserved.                                                                                            |
| features  | bool[]                                                |                                                                                                      |
