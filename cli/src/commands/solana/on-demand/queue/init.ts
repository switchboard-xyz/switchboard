import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { chalkString } from "../../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import { PublicKey, TransactionMessage } from "@solana/web3.js";
import {
  InstructionUtils,
  Oracle,
  Queue,
  SB_ON_DEMAND_PID,
  SwitchboardPermission,
} from "@switchboard-xyz/on-demand";
import * as bs58 from "bs58";
import chalk from "chalk";

export default class QueueInit extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Init a queue account";

  static flags = {
    ...BaseCommand.flags,
    reward: Flags.integer({
      description: "reward for the queue account",
      required: false,
    }),
    nodeTimeout: Flags.integer({
      description: "timeout before oracles can be removed from queue",
      required: false,
    }),
    asProposal: Flags.boolean({
      description: "output the instruction as a proposal",
      required: false,
    }),
  };

  static args = {};

  async run() {
    const { args, flags } = await this.parse(QueueInit);
    const payerKp = (this.program.provider.wallet as any).payer;
    const wallet = this.program.provider.wallet;
    const provider = this.program.provider;
    const connection = this.program.provider.connection;

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);
    const slot = await connection.getSlot("finalized");
    const [queue, kp, ix] = await Queue.createIx(program, {
      allowAuthorityOverrideAfter: 600, // 10 minutes
      reward: flags.reward,
      nodeTimeout: flags.nodeTimeout,
      requireAuthorityHeartbeatPermission: true,
      requireUsagePermission: false,
      maxQuoteVerificationAge: 60 * 60 * 24 * 7, // 1 week
      lutSlot: slot,
    });
    const delegationGroupInitIx = await queue.initDelegationGroupIx(slot);
    if (flags.asProposal) {
      const tx = new TransactionMessage({
        recentBlockhash: (await connection.getRecentBlockhash()).blockhash,
        payerKey: wallet.publicKey,
        instructions: [ix, delegationGroupInitIx],
      });
      const msg = tx.compileToLegacyMessage();
      console.log(`Proposal transaction: ${bs58.encode(msg.serialize())}`);
    } else {
      const tx = await InstructionUtils.asV0Tx(program, [
        ix,
        delegationGroupInitIx,
      ]);
      tx.sign([payerKp, kp]);
      const signature = await connection.sendTransaction(tx);
      console.log(`Signature: ${signature}`);
    }
    console.log(`Queue account: ${kp.publicKey.toBase58()}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to init a queue account");
  }
}
