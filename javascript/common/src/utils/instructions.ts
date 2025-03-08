import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import bs58 from "bs58";

// Convert object to TransactionInstruction
export function IxFromHex(pullIx: {
  keys: { pubkey: string; isSigner: boolean; isWritable: boolean }[];
  programId: string;
  data: string;
}): TransactionInstruction {
  const keys = pullIx.keys.map((key) => ({
    ...key,
    pubkey: new PublicKey(Buffer.from(key.pubkey, "hex")),
  }));
  const programId = new PublicKey(
    bs58.encode(Buffer.from(pullIx.programId, "hex"))
  );
  const data = Buffer.from(pullIx.data, "hex");
  return new TransactionInstruction({
    keys,
    programId,
    data,
  });
}
