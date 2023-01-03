| Field            | Type    | Description                                                           |
| ---------------- | ------- | --------------------------------------------------------------------- |
| alpha            | u8[256] | The alpha bytes used to calculate the VRF proof.                      |
| alphaLen         | u32     | The number of bytes in the alpha buffer.                              |
| requestSlot      | u64     | The Slot when the VRF round was opened.                               |
| requestTimestamp | i64     | The unix timestamp when the VRF round was opened.                     |
| result           | u8[32]  | The VRF round result. Will be zeroized if still awaiting fulfillment. |
| numVerified      | u32     | The number of builders who verified the VRF proof.                    |
| ebuf             | u8[256] | Reserved for future info.                                             |
