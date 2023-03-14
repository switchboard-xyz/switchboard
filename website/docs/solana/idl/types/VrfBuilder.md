| Field           | Type                                                     | Description                                                                                       |
| --------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| producer        | publicKey                                                | The [OracleAccountData](/solana/idl/accounts/OracleAccountData) that is producing the randomness. |
| status          | [VrfStatus](/solana/idl/types/VrfStatus)                 | The current status of the VRF verification.                                                       |
| reprProof       | u8[80]                                                   | The VRF proof sourced from the producer.                                                          |
| proof           | [EcvrfProofZC](/solana/idl/types/EcvrfProofZC)           |                                                                                                   |
| yPoint          | publicKey                                                |                                                                                                   |
| stage           | u32                                                      |                                                                                                   |
| stage1Out       | [EcvrfIntermediate](/solana/idl/types/EcvrfIntermediate) |                                                                                                   |
| r1              | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| r2              | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| stage3Out       | [EcvrfIntermediate](/solana/idl/types/EcvrfIntermediate) |                                                                                                   |
| hPoint          | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| sReduced        | [Scalar](/solana/idl/types/Scalar)                       |                                                                                                   |
| yPointBuilder   | [FieldElementZC](/solana/idl/types/FieldElementZC)[3]    |                                                                                                   |
| yRistrettoPoint | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| mulRound        | u8                                                       |                                                                                                   |
| hashPointsRound | u8                                                       |                                                                                                   |
| mulTmp1         | [CompletedPointZC](/solana/idl/types/CompletedPointZC)   |                                                                                                   |
| uPoint1         | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| uPoint2         | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| vPoint1         | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| vPoint2         | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| uPoint          | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| vPoint          | [EdwardsPointZC](/solana/idl/types/EdwardsPointZC)       |                                                                                                   |
| u1              | [FieldElementZC](/solana/idl/types/FieldElementZC)       |                                                                                                   |
| u2              | [FieldElementZC](/solana/idl/types/FieldElementZC)       |                                                                                                   |
| invertee        | [FieldElementZC](/solana/idl/types/FieldElementZC)       |                                                                                                   |
| y               | [FieldElementZC](/solana/idl/types/FieldElementZC)       |                                                                                                   |
| z               | [FieldElementZC](/solana/idl/types/FieldElementZC)       |                                                                                                   |
| p1Bytes         | u8[32]                                                   |                                                                                                   |
| p2Bytes         | u8[32]                                                   |                                                                                                   |
| p3Bytes         | u8[32]                                                   |                                                                                                   |
| p4Bytes         | u8[32]                                                   |                                                                                                   |
| cPrimeHashbuf   | u8[16]                                                   |                                                                                                   |
| m1              | [FieldElementZC](/solana/idl/types/FieldElementZC)       |                                                                                                   |
| m2              | [FieldElementZC](/solana/idl/types/FieldElementZC)       |                                                                                                   |
| txRemaining     | u32                                                      | The number of transactions remaining to verify the VRF proof.                                     |
| verified        | bool                                                     | Whether the VRF proof has been verified on-chain.                                                 |
| result          | u8[32]                                                   | The VRF proof verification result. Will be zeroized if still awaiting fulfillment.                |
