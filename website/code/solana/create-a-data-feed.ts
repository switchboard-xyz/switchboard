import type {
  JobAccount,
  SwitchboardProgram,
} from "@switchboard-xyz/solana.js";
import { OracleQueueAccount } from "@switchboard-xyz/solana.js";

let program: SwitchboardProgram;
let jobAccount: JobAccount;

const queueAccount = new OracleQueueAccount(
  program,
  "uPeRMdfPmrPqgRWSrjAnAkH78RqAhe5kXoW6vBYRqFX"
); // devnet

const [aggregatorAccount] = await queueAccount.createFeed({
  batchSize: 1,
  minRequiredOracleResults: 1,
  minRequiredJobResults: 1,
  minUpdateDelaySeconds: 60,
  fundAmount: 2.5,
  enable: true,
  jobs: [
    // existing job account
    { pubkey: jobAccount.publicKey },
    // or create a new job account with the feed
    {
      weight: 2,
      data: OracleJob.encodeDelimited(
        OracleJob.fromObject({
          tasks: [
            {
              valueTask: {
                value: 1,
              },
            },
          ],
        })
      ).finish(),
    },
  ],
});
