import * as anchor from "@project-serum/anchor";
import { Keypair, PublicKey } from "@solana/web3.js";
import { NoPayerKeypairProvided } from "../types";
import {
  AggregatorAccount,
  CrankAccount,
  JobAccount,
  LeaseAccount,
  OracleAccount,
  QueueAccount,
  PermissionAccount,
  ProgramStateAccount,
  VrfAccount,
  SwitchboardProgram,
} from "@switchboard-xyz/solana.js";

export const programHasPayer = (program: SwitchboardProgram): boolean => {
  const payer = program.wallet.payer;
  return !payer.publicKey.equals(
    Keypair.fromSeed(new Uint8Array(32).fill(1)).publicKey
  );
};

export const getProgramPayer = (program: SwitchboardProgram): Keypair => {
  if (programHasPayer(program)) return program.wallet.payer;
  throw new NoPayerKeypairProvided();
};

export const verifyProgramHasPayer = (program: SwitchboardProgram): void => {
  if (programHasPayer(program)) return;
  throw new NoPayerKeypairProvided();
};

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
  | QueueAccount
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
  program: SwitchboardProgram,
  publicKey: PublicKey
): Promise<SwitchboardAccountType> => {
  const account = await program.provider.connection.getAccountInfo(publicKey);
  if (!account) {
    throw new Error(`failed to fetch account info for ${publicKey}`);
  }

  const accountDiscriminator = account.data.slice(
    0,
    anchor.ACCOUNT_DISCRIMINATOR_SIZE
  );

  for (const [name, discriminator] of SWITCHBOARD_DISCRIMINATOR_MAP.entries()) {
    if (Buffer.compare(accountDiscriminator, discriminator) === 0) {
      return name;
    }
  }

  throw new InvalidSwitchboardAccount();
};

export const loadSwitchboardAccount = async (
  program: SwitchboardProgram,
  publicKey: PublicKey
): Promise<[SwitchboardAccountType, SwitchboardAccount]> => {
  const accountType = await findAccountType(program, publicKey);
  switch (accountType) {
    case "JobAccountData": {
      return [accountType, new JobAccount(program, publicKey)];
    }

    case "AggregatorAccountData": {
      return [accountType, new AggregatorAccount(program, publicKey)];
    }

    case "OracleAccountData": {
      return [accountType, new OracleAccount(program, publicKey)];
    }

    case "PermissionAccountData": {
      return [accountType, new PermissionAccount(program, publicKey)];
    }

    case "LeaseAccountData": {
      return [accountType, new LeaseAccount(program, publicKey)];
    }

    case "OracleQueueAccountData": {
      return [accountType, new QueueAccount(program, publicKey)];
    }

    case "CrankAccountData": {
      return [accountType, new CrankAccount(program, publicKey)];
    }

    case "SbState":
    case "ProgramStateAccountData": {
      return [accountType, new ProgramStateAccount(program, publicKey)];
    }

    case "VrfAccountData": {
      return [accountType, new VrfAccount(program, publicKey)];
    }
  }

  throw new InvalidSwitchboardAccount();
};
