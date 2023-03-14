## Accounts

| Name      | isMut | isSigner | Description |
| --------- | ----- | -------- | ----------- |
| queue     | true  | false    |             |
| authority | false | true     |             |

## Args

| Field                         | Type                       | Description |
| ----------------------------- | -------------------------- | ----------- |
| name                          | Option&lt;u8[32]&gt;       |             |
| metadata                      | Option&lt;u8[64]&gt;       |             |
| unpermissionedFeedsEnabled    | Option&lt;bool&gt;         |             |
| unpermissionedVrfEnabled      | Option&lt;bool&gt;         |             |
| enableBufferRelayers          | Option&lt;bool&gt;         |             |
| varianceToleranceMultiplier   | Option&lt;BorshDecimal&gt; |             |
| slashingEnabled               | Option&lt;bool&gt;         |             |
| reward                        | Option&lt;u64&gt;          |             |
| minStake                      | Option&lt;u64&gt;          |             |
| oracleTimeout                 | Option&lt;u32&gt;          |             |
| consecutiveFeedFailureLimit   | Option&lt;u64&gt;          |             |
| consecutiveOracleFailureLimit | Option&lt;u64&gt;          |             |
