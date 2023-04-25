```ts
import { EscrowAccount } from "@switchboard-xyz/near.js";

const escrowAccount = await EscrowAccount.getOrCreateStaticAccount(program);
await aggregatorAccount.openRound({
  rewardRecipient: escrowAccount.address,
});
```
