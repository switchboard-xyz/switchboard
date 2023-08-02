import type { SwitchboardProgram, types } from "@swtichboard-xyz/solana.js";
import { AggregatorAccount } from "@swtichboard-xyz/solana.js";

let program: SwitchboardProgram;

const aggregatorAccount = new AggregatorAccount(program, "My_Data_Feed_Pubkey");
const aggregatorState: types.AggregatorAccountData =
  await aggregatorAccount.loadData();
