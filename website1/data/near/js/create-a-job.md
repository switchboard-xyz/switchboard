```ts
import { JobAccount } from "@switchboard-xyz/near.js";

const job = await JobAccount.create(program, {
  data: Buffer.from(OracleJob.encodeDelimited(oracleJob).finish()),
  name: Buffer.from("Job1"),
  metadata: Buffer.from("Job1 - FtxUS BTC/USD"),
});
console.log(await job.loadData());
```
