```ts
import { SwitchboardProgram } from "@switchboard-xyz/near.js";

// from filesystem keypair
const program = await SwitchboardProgram.loadFromFs(
  "testnet", // Network ID
  "https://rpc.testnet.near.org", // RPC URL
  accountId // Near Account name
);
// from browser
const program = await SwitchboardProgram.loadFromBrowser(
  "testnet", // Network ID
  "https://rpc.testnet.near.org", // RPC URL
  accountId // Near Account name
);
```
