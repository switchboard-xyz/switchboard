import type {
  attestationTypes,
  SwitchboardProgram,
} from "@swtichboard-xyz/solana.js";
import { FunctionAccount } from "@swtichboard-xyz/solana.js";

let program: SwitchboardProgram;

const functionAccount = new FunctionAccount(program, "My_Function_Pubkey");
const functionState: attestationTypes.FunctionAccountData =
  await functionAccount.loadData();
