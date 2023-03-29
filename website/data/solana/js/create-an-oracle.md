The following code will create a new oracle for a given queue. Optionally
provide the enable flag with the queueAuthority keypair to auto-approve the
oracle for the queue.

```ts
import { QueueAccount } from "@switchboard-xyz/solana.js";

const queueAccount = new QueueAccount(program, queuePubkey);

const [oracleAccount, oracleInitSignature] = await queueAccount.createOracle({
  name: "My Oracle",
  metadata: "Oracle #1",
  stakeAmount: 10,
});
const oracle = await oracleAccount.loadData();

await oracleAccount.heartbeat();
```
