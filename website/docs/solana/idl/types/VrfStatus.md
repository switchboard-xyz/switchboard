| Name                  | Value | Description                                                                     |
| --------------------- | ----- | ------------------------------------------------------------------------------- |
| StatusNone            | 1     | VRF Account has not requested randomness yet.                                   |
| StatusRequesting      | 2     | VRF Account has requested randomness but has yet to receive an oracle response. |
| StatusVerifying       | 3     | VRF Account has received a VRF proof that has yet to be verified on-chain.      |
| StatusVerified        | 4     | VRF Account has successfully requested and verified randomness on-chain.        |
| StatusCallbackSuccess | 5     | VRF Account's callback was invoked successfully.                                |
| StatusVerifyFailure   | 6     | Failed to verify VRF proof.                                                     |
