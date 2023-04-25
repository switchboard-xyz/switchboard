```ts
import { AggregatorAccount } from "@switchboard-xyz/near.js";

const aggregator = await AggregatorAccount.create(program, {
  authority: program.account.accountId,
  queue: queue.address,
  name: Buffer.from(""),
  metadata: Buffer.from(""),
  batchSize: 1,
  minOracleResults: 1,
  minJobResults: 1,
  minUpdateDelaySeconds: 5,
  startAfter: 0,
  varianceThreshold: sbv2.SwitchboardDecimal.fromBig(new Big(0)),
  forceReportPeriod: 0,
  crank: crank.address,
  rewardEscrow: escrow.address,
  historyLimit: 1000,
});
console.log(await aggregator.loadData());
```
