```ts
import { PermissionAccount } from "@switchboard-xyz/near.js";

const permission = await PermissionAccount.create(program, {
  authority: program.account.accountId,
  granter: queue.address,
  grantee: aggregator.address,
});
```
