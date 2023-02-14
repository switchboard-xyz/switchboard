import { VrfAccount } from "@switchboard-xyz/solana.js";

const vrfAccount = new VrfAccount(program, vrfPubkey);
const vrf = await vrfAccount.loadData();
console.log(vrf);
