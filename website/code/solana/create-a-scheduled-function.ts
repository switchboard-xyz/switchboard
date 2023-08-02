import { parseMrEnclave } from "@switchboard-xyz/common";
import type { SwitchboardProgram } from "@switchboard-xyz/solana.js";
import {
  AttesationQueueAccount,
  FunctionAccount,
} from "@switchboard-xyz/solana.js";

let program: SwitchboardProgram;
const attestationQueueAccount = new AttesationQueueAccount(
  program,
  "2ie3JZfKcvsRLsJaP5fSo43gUo1vsurnUAtAgUdUAiDG" // mainnet attestation queue
);

const [functionAccount] = await FunctionAccount.create(program, {
  name: "FUNCTION_NAME",
  metadata: "FUNCTION_METADATA",
  schedule: "30 * * * * *", // every 30 seconds
  container: "switchboardlabs/basic-binance-oracle",
  containerRegistry: "dockerhub",
  version: "latest",
  mrEnclave: parseMrEnclave("0xABC123"),
  attestationQueue: attestationQueueAccount,
});
