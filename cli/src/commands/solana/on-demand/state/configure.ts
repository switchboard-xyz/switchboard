import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { chalkString } from "../../../../utils";
import { loadKeypair } from "../../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import * as spl from "@solana/spl-token";
import { PublicKey, TransactionMessage } from "@solana/web3.js";
import {
  InstructionUtils,
  Oracle,
  Queue,
  SB_ON_DEMAND_PID,
  State,
  SwitchboardPermission,
} from "@switchboard-xyz/on-demand";
import * as bs58 from "bs58";
import chalk from "chalk";

export default class StateConfigure extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Create an oracle account";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      description: "new authority for the state account",
      required: false,
    }),
    guardianQueue: Flags.string({
      description: "guardian queue id",
      required: false,
    }),
    stakeProgram: Flags.string({
      description: "stake program id",
      required: false,
    }),
    stakePool: Flags.string({
      description: "stake pool id",
      required: false,
    }),
    switchMint: Flags.string({
      description: "switchboard mint address",
      required: false,
    }),
    asProposal: Flags.boolean({
      description: "output the instruction as a proposal",
      required: false,
    }),
    permitAdvisory: Flags.integer({
      description: "Adds a new allowed advisory for oracles",
      required: false,
    }),
    denyAdvisory: Flags.integer({
      description: "Adds a new denied advisory for oracles",
      required: false,
    }),
    testOnlyDisableMrEnclaveCheck: Flags.boolean({
      description: "Disables the mr enclave check for testing",
      required: false,
    }),
  };

  static args = {};

  async run() {
    const { args, flags } = await this.parse(StateConfigure);
    const wallet = this.program.provider.wallet;
    const provider = this.program.provider;
    const connection = this.program.provider.connection;

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);
    const state = new State(program);

    const payerKp = (this.program.provider.wallet as any).payer;
    const ix = await state.setConfigsIx({
      newAuthority: flags.authority
        ? new PublicKey(flags.authority!)
        : undefined,
      stakeProgram: flags.stakeProgram
        ? new PublicKey(flags.stakeProgram!)
        : undefined,
      guardianQueue: flags.guardianQueue
        ? new PublicKey(flags.guardianQueue!)
        : undefined,
      switchMint: flags.switchMint
        ? new PublicKey(flags.switchMint!)
        : undefined,
      stakePool: flags.stakePool ? new PublicKey(flags.stakePool!) : undefined,
      permitAdvisory: flags.permitAdvisory
        ? Number(flags.permitAdvisory)
        : undefined,
      denyAdvisory: flags.denyAdvisory ? Number(flags.denyAdvisory) : undefined,
      testOnlyDisableMrEnclaveCheck: flags.testOnlyDisableMrEnclaveCheck,
    });
    if (flags.asProposal) {
      const tx = new TransactionMessage({
        recentBlockhash: (await connection.getRecentBlockhash()).blockhash,
        payerKey: wallet.publicKey,
        instructions: [ix],
      });
      const msg = tx.compileToLegacyMessage();
      console.log(`Proposal transaction: ${bs58.encode(msg.serialize())}`);
    } else {
      const tx = await InstructionUtils.asV0Tx(program, [ix]);
      tx.sign([payerKp]);
      const buf = tx.serialize();
      const signature = await connection.sendTransaction(tx);
      console.log(`Signature: ${signature}`);
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to configure state account");
  }
}
