import * as anchor from "@project-serum/anchor";
import { ACCOUNT_DISCRIMINATOR_SIZE } from "@project-serum/anchor";
import { Cluster, Connection, Keypair, PublicKey } from "@solana/web3.js";
import {
  programWallet,
  SBV2_DEVNET_PID,
  SBV2_MAINNET_PID,
} from "@switchboard-xyz/switchboard-v2";
import { NoPayerKeypairProvided } from "../types";
import { TransactionInstruction, TransactionSignature } from "@solana/web3.js";
import {
  packInstructions,
  signTransactions,
} from "@switchboard-xyz/switchboard-v2";

export const toCluster = (cluster: string): Cluster => {
  switch (cluster) {
    case "devnet":
    case "testnet":
    case "mainnet-beta": {
      return cluster;
    }
  }

  throw new Error(`Invalid cluster provided ${cluster}`);
};

export const loadAnchor = async (
  cluster: string,
  connection: Connection,
  authority?: Keypair
): Promise<anchor.Program> => {
  let PID: PublicKey;
  switch (cluster) {
    case "devnet": {
      PID = SBV2_DEVNET_PID;
      break;
    }

    case "mainnet-beta": {
      PID = SBV2_MAINNET_PID;
      break;
    }

    case "testnet": {
      throw new Error(`${cluster} PID not implemented yet`);
    }
  }

  const programId = new anchor.web3.PublicKey(PID);
  const keypair: Keypair = authority
    ? authority
    : anchor.web3.Keypair.generate(); // no keypair provided, defaulting to dummy keypair

  const wallet = new anchor.Wallet(keypair);
  const provider = new anchor.AnchorProvider(connection, wallet, {
    commitment: "finalized",
    // preflightCommitment: "finalized",
  });

  const anchorIdl = await anchor.Program.fetchIdl(programId, provider);
  if (!anchorIdl) throw new Error(`failed to read idl for ${programId}`);

  // fs.writeFileSync(
  //   `${programId}.json`,
  //   JSON.stringify(anchorIdl, undefined, 2)
  // );

  const program = new anchor.Program(anchorIdl, programId, provider);
  return program;
};

export const getNewProgram = (
  program: anchor.Program,
  keypair: Keypair
): anchor.Program => {
  const wallet = new anchor.Wallet(keypair);
  const provider = new anchor.AnchorProvider(
    program.provider.connection,
    wallet,
    {
      commitment: "finalized",
      // preflightCommitment: "finalized",
    }
  );
  const programId = program.programId;

  const anchorIdl = program.idl;
  if (!anchorIdl) throw new Error(`failed to read idl for ${programId}`);

  return new anchor.Program(anchorIdl, programId, provider);
};

export const programHasPayer = (program: anchor.Program): boolean => {
  const payer = programWallet(program);
  return !payer.publicKey.equals(
    Keypair.fromSeed(new Uint8Array(32).fill(1)).publicKey
  );
};

export const getProgramPayer = (program: anchor.Program): Keypair => {
  if (programHasPayer(program)) return programWallet(program);
  throw new NoPayerKeypairProvided();
};

export const verifyProgramHasPayer = (program: anchor.Program): void => {
  if (programHasPayer(program)) return;
  throw new NoPayerKeypairProvided();
};

import {
  AggregatorAccount,
  CrankAccount,
  JobAccount,
  LeaseAccount,
  OracleAccount,
  OracleQueueAccount,
  PermissionAccount,
  ProgramStateAccount,
  VrfAccount,
} from "@switchboard-xyz/switchboard-v2";

export class InvalidSwitchboardAccount extends Error {
  constructor(message = "failed to match account type by discriminator") {
    super(message);
    Object.setPrototypeOf(this, InvalidSwitchboardAccount.prototype);
  }
}

export const SWITCHBOARD_ACCOUNT_TYPES = [
  "JobAccountData",
  "AggregatorAccountData",
  "OracleAccountData",
  "OracleQueueAccountData",
  "PermissionAccountData",
  "LeaseAccountData",
  "ProgramStateAccountData",
  "VrfAccountData",
  "SbState",
  "BUFFERxx",
  "CrankAccountData",
] as const;

export type SwitchboardAccount =
  | JobAccount
  | AggregatorAccount
  | OracleAccount
  | OracleQueueAccount
  | PermissionAccount
  | LeaseAccount
  | ProgramStateAccount
  | VrfAccount
  | CrankAccount;

export type SwitchboardAccountType = typeof SWITCHBOARD_ACCOUNT_TYPES[number];

export const SWITCHBOARD_DISCRIMINATOR_MAP = new Map<
  SwitchboardAccountType,
  Buffer
>(
  SWITCHBOARD_ACCOUNT_TYPES.map((accountType) => [
    accountType,
    anchor.BorshAccountsCoder.accountDiscriminator(accountType),
  ])
);

// should also check if pubkey is a token account
export const findAccountType = async (
  program: anchor.Program,
  publicKey: PublicKey
): Promise<SwitchboardAccountType> => {
  const account = await program.provider.connection.getAccountInfo(publicKey);
  if (!account) {
    throw new Error(`failed to fetch account info for ${publicKey}`);
  }

  const accountDiscriminator = account.data.slice(
    0,
    ACCOUNT_DISCRIMINATOR_SIZE
  );

  for (const [name, discriminator] of SWITCHBOARD_DISCRIMINATOR_MAP.entries()) {
    if (Buffer.compare(accountDiscriminator, discriminator) === 0) {
      return name;
    }
  }

  throw new InvalidSwitchboardAccount();
};

export const loadSwitchboardAccount = async (
  program: anchor.Program,
  publicKey: PublicKey
): Promise<[SwitchboardAccountType, SwitchboardAccount]> => {
  const accountType = await findAccountType(program, publicKey);
  switch (accountType) {
    case "JobAccountData": {
      return [accountType, new JobAccount({ program, publicKey })];
    }

    case "AggregatorAccountData": {
      return [accountType, new AggregatorAccount({ program, publicKey })];
    }

    case "OracleAccountData": {
      return [accountType, new OracleAccount({ program, publicKey })];
    }

    case "PermissionAccountData": {
      return [accountType, new PermissionAccount({ program, publicKey })];
    }

    case "LeaseAccountData": {
      return [accountType, new LeaseAccount({ program, publicKey })];
    }

    case "OracleQueueAccountData": {
      return [accountType, new OracleQueueAccount({ program, publicKey })];
    }

    case "CrankAccountData": {
      return [accountType, new CrankAccount({ program, publicKey })];
    }

    case "SbState":
    case "ProgramStateAccountData": {
      return [accountType, new ProgramStateAccount({ program, publicKey })];
    }

    case "VrfAccountData": {
      return [accountType, new VrfAccount({ program, publicKey })];
    }
  }

  throw new InvalidSwitchboardAccount();
};

export async function packAndSend(
  program: anchor.Program,
  ixnsBatch: (TransactionInstruction | TransactionInstruction[])[],
  ixnsBatch2: (TransactionInstruction | TransactionInstruction[])[],
  signers: Keypair[],
  feePayer: PublicKey
): Promise<TransactionSignature[]> {
  const signatures: Promise<TransactionSignature>[] = [];
  const { blockhash } = await program.provider.connection.getLatestBlockhash();

  const packedTransactions = packInstructions(ixnsBatch, feePayer, blockhash);
  const signedTransactions = signTransactions(packedTransactions, signers);
  // const signedTxs = await (
  //   program.provider as anchor.AnchorProvider
  // ).wallet.signAllTransactions(signedTransactions);

  for (let k = 0; k < packedTransactions.length; k += 1) {
    const tx = signedTransactions[k];
    signatures.push(
      program.provider.connection.sendTransaction(tx, signers, {
        skipPreflight: true,
        maxRetries: 10,
      })
    );
  }

  await Promise.all(signatures);

  if (ixnsBatch2 && ixnsBatch2.length > 0) {
    const packedTransactions2 = packInstructions(
      ixnsBatch2,
      feePayer,
      blockhash
    );
    const signedTransactions2 = signTransactions(packedTransactions2, signers);
    const signedTxs2 = await (
      program.provider as anchor.AnchorProvider
    ).wallet.signAllTransactions(signedTransactions2);

    for (let k = 0; k < packedTransactions2.length; k += 1) {
      const tx = signedTxs2[k];
      const rawTx = tx.serialize();
      signatures.push(
        program.provider.connection.sendRawTransaction(rawTx, {
          skipPreflight: true,
          maxRetries: 10,
        })
      );
    }
  }

  return Promise.all(signatures);
}
