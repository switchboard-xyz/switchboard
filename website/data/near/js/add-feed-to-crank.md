The code below shows how to push a feed onto a crank:

```ts
import { CrankAccount } from "@switchboard-xyz/near.js";

const crank = new CrankAccount({ program, address: crankAddress });
await crank.push({
  aggregator: aggregatorAccount.address,
});
```
