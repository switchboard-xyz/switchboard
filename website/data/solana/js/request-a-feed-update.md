The following code shows how to call open round and request a new update for a
feed:

```ts
import { AggregatorAccount } from "@switchboard-xyz/solana.js";

const aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);

await aggregatorAccount.openRound();
```
