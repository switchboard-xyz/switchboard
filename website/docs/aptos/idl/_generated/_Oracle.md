| Field     | Type                                                  | Description                                                                 |
| --------- | ----------------------------------------------------- | --------------------------------------------------------------------------- |
| name      | u8[]                                                  | Name of the oracle stored on-chain.                                         |
| metadata  | u8[]                                                  | Optional, metadata for the oracle stored on-chain.                          |
| signerCap | [SignerCapability](/aptos/idl/types/SignerCapability) | The signer capability corresponding to the account that the resource is on. |
| features  | bool[]                                                |                                                                             |
| createdAt | u64                                                   | Unix timestamp when the resource was created.                               |
| \_ebuf    | u8[]                                                  | Reserved.                                                                   |
