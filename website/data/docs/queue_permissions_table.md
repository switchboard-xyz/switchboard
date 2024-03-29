---
source: "https://docs.switchboard.xyz/permissions"
embedding-id: "queue-permissions-table"
---

| Queue Setting                | False (0)                                                                                                    | True (1)                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `unpermissionedFeedsEnabled` | Aggregators & Buffer Relayers _MUST_ have **PermitOracleQueueUsage** permissions before requesting an update | Aggregators & Buffer Relayers require no explicit permissions before requesting an update |
| `unpermissionedVrfEnabled`   | VRF Accounts _MUST_ have **PermitVrfRequests** permissions before requesting an update                       | VRF Accounts require no explicit permissions before requesting an update                  |
| `enableBufferRelayers`       | Buffer Relayers are _NOT_ permitted to request updates                                                       | Buffer Relayers are permitted to request updates                                          |
