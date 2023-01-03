| Field           | Type                                                     | Description                                                                                       |
| --------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| producer        | publicKey                                                | The [OracleAccountData](/solana/idl/accounts/oracleaccountdata) that is producing the randomness. |
| status          | [VrfStatus](/solana/idl/types/vrfstatus)                 | The current status of the VRF verification.                                                       |
| reprProof       | u8[80]                                                   | The VRF proof sourced from the producer.                                                          |
| proof           | [EcvrfProofZC](/solana/idl/types/ecvrfproofzc)           |                                                                                                   |
| yPoint          | publicKey                                                |                                                                                                   |
| stage           | u32                                                      |                                                                                                   |
| stage1Out       | [EcvrfIntermediate](/solana/idl/types/ecvrfintermediate) |                                                                                                   |
| r1              | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| r2              | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| stage3Out       | [EcvrfIntermediate](/solana/idl/types/ecvrfintermediate) |                                                                                                   |
| hPoint          | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| sReduced        | [Scalar](/solana/idl/types/scalar)                       |                                                                                                   |
| yPointBuilder   | [FieldElementZC](/solana/idl/types/fieldelementzc)[3]    |                                                                                                   |
| yRistrettoPoint | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| mulRound        | u8                                                       |                                                                                                   |
| hashPointsRound | u8                                                       |                                                                                                   |
| mulTmp1         | [CompletedPointZC](/solana/idl/types/completedpointzc)   |                                                                                                   |
| uPoint1         | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| uPoint2         | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| vPoint1         | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| vPoint2         | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| uPoint          | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| vPoint          | [EdwardsPointZC](/solana/idl/types/edwardspointzc)       |                                                                                                   |
| u1              | [FieldElementZC](/solana/idl/types/fieldelementzc)       |                                                                                                   |
| u2              | [FieldElementZC](/solana/idl/types/fieldelementzc)       |                                                                                                   |
| invertee        | [FieldElementZC](/solana/idl/types/fieldelementzc)       |                                                                                                   |
| y               | [FieldElementZC](/solana/idl/types/fieldelementzc)       |                                                                                                   |
| z               | [FieldElementZC](/solana/idl/types/fieldelementzc)       |                                                                                                   |
| p1Bytes         | u8[32]                                                   |                                                                                                   |
| p2Bytes         | u8[32]                                                   |                                                                                                   |
| p3Bytes         | u8[32]                                                   |                                                                                                   |
| p4Bytes         | u8[32]                                                   |                                                                                                   |
| cPrimeHashbuf   | u8[16]                                                   |                                                                                                   |
| m1              | [FieldElementZC](/solana/idl/types/fieldelementzc)       |                                                                                                   |
| m2              | [FieldElementZC](/solana/idl/types/fieldelementzc)       |                                                                                                   |
| txRemaining     | u32                                                      | The number of transactions remaining to verify the VRF proof.                                     |
| verified        | bool                                                     | Whether the VRF proof has been verified on-chain.                                                 |
| result          | u8[32]                                                   | The VRF proof verification result. Will be zeroized if still awaiting fulfillment.                |
