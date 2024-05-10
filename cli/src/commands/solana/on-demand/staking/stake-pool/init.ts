import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../../solana";
import { chalkString } from "../../../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import * as spl from "@solana/spl-token";
import { PublicKey, SystemProgram, TransactionMessage } from "@solana/web3.js";
import {
  InstructionUtils,
  Queue,
  SB_ON_DEMAND_PID,
  State,
  SwitchboardPermission,
} from "@switchboard-xyz/on-demand";
import * as bs58 from "bs58";
import chalk from "chalk";

export default class StakePoolCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Create an stake pool account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {};

  async run() {
    const { args, flags } = await this.parse(StakePoolCreate);
    const payerKp = (this.program.provider.wallet as any).payer;
    const wallet = this.program.provider.wallet;
    const provider = this.program.provider;
    const connection = this.program.provider.connection;

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);
    const state = new State(program);
    const stateData = await state.loadData();
    const stakingPid = stateData.stakeProgram;
    const stakeIdl = await anchor.Program.fetchIdl(stakingPid, provider);
    const stakeProgram = new anchor.Program(stakeIdl!, stakingPid, provider);
    const stakeMint = stateData.switchMint;
    const stakePool = PublicKey.findProgramAddressSync(
      [Buffer.from("StakePool"), stakeMint.toBuffer(), state.pubkey.toBuffer()],
      stakeProgram.programId
    )[0];
    const poolVault = PublicKey.findProgramAddressSync(
      [Buffer.from("Vault"), stakePool.toBuffer()],
      stakeProgram.programId
    )[0];
    const ix = await stakeProgram.instruction.initializeStakePool(
      {
        authority: state.pubkey,
      },
      {
        accounts: {
          payer: payerKp.publicKey,
          stakeMint,
          stakePool,
          vault: poolVault,
          tokenProgram: spl.TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
        },
      }
    );
    const tx = await InstructionUtils.asV0Tx(program, [ix]);
    tx.sign([payerKp]);
    console.log(`Creating stake pool account: ${stakePool.toBase58()}`);
    const signature = await connection.sendTransaction(tx);
    console.log(`Signature: ${signature}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to create stakepool account");
  }
}
