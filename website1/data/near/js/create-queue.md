```ts
import { QueueAccount } from "@switchboard-xyz/near.js";

const queue = await QueueAccount.create(program, {
  authority: program.account.accountId,
  mint: "wrap.test",
  reward: 0,
  minStake: 100,
  queueSize: 100,
  oracleTimeout: 180,
  unpermissionedFeeds: true,
});
console.log(await queue.loadData());
```
