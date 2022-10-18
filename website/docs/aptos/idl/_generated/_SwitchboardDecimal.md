A struct representing a floating point number on-chain.

| Field | Type | Description                                                                                                                                                                                             |
| ----- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value | u128 | The part of a floating-point number that represents the significant digits of that number, and that is multiplied by the base, 10, raised to the power of scale to give the actual value of the number. |
| dec   | u8   | The number of decimal places to move to the left to yield the actual value.                                                                                                                             |
| neg   | bool | Flag dictating whether the value is negative.                                                                                                                                                           |
