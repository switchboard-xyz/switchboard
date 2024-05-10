import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../../solana";

import * as anchor from "@coral-xyz/anchor";
import { Flags } from "@oclif/core";
import {
  PublicKey,
  TransactionMessage,
  Keypair,
  VersionedTransaction,
} from "@solana/web3.js";
import { Queue, SB_ON_DEMAND_PID, State } from "@switchboard-xyz/on-demand";
import * as bs58 from "bs58";

import { loadKeypair } from "../../../../utils";

export default class GuardianRegister extends BaseCommand {
  static description = "register or deregister a guardian on a queue";

  static flags = {
    ...BaseCommand.flags,
    guardian: Flags.string({
      description: "new guardian account to register",
      required: true,
    }),
    disable: Flags.boolean({
      description: "disable the specified guardian",
    }),
    asProposal: Flags.boolean({
      description: "print the transaction as a proposal",
      default: false,
    }),
    keypair: Flags.string({
      char: "k",
      description:
        "file containing the authority keypair. Required if `asProposal` is false",
    }),
  };

  static args = {};

  async run() {
    //== begin flags&opts - setup and parse flags and default options
    const { args, flags } = await this.parse(GuardianRegister);
    const provider = this.program.provider;
    const connection = this.program.provider.connection;

    // set default value = false => is not a Disable action
    let isDisableAction = false;
    if (flags.disable === true) {
      isDisableAction = true;
    }

    // check for required flags, either asProposal or keypair is needed
    if (!flags.asProposal && !flags.keypair) {
      console.log("Either `keypair` or `asProposal` needs to be specified.");
      return;
    }

    // stub keypair in case none is specified via flags
    let authKeypair = Keypair.generate();
    // slurping keypair, if specified
    if (flags.keypair) {
      console.log("✅ - Keypair file read");
      console.log(`  Using keypair file: ${flags.keypair}`);
      authKeypair = await loadKeypair(flags.keypair);
    }

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);
    //== end flags&opts

    const state = new State(program);
    const stateData = await state.loadData();

    const latestBlockhash = await connection.getLatestBlockhash("confirmed");
    console.log(
      "✅ - Fetched latest blockhash. Last Valid Height:",
      latestBlockhash.lastValidBlockHeight
    );

    //== begin queue - build queue and oracle objects
    const queueAccount = new Queue(
      program,
      new PublicKey(stateData.guardianQueue)
    );
    if (this.verbose) {
      console.log(`Queue pubkey: ${queueAccount.pubkey}`);
    }
    //== end queue

    //== begin authority - check that the queueAuthority is the same as the specified keypair
    const queueData = await queueAccount.loadData();
    const queueAuthority = queueData.authority;
    if (this.verbose) {
      console.log(`Queue authority : ${queueAuthority}`);
    }

    //== begin isGuardian - check if Guardian
    const guardianPubkey = new PublicKey(flags.guardian);
    if (this.verbose) {
      console.log(`Guardian Pubkey used: ${guardianPubkey}`);
    }

    // set native Program auth
    const nativeProgramAuth = "11111111111111111111111111111111";

    if (queueAuthority.toString() !== nativeProgramAuth.toString()) {
      // native programs' auth is always '111111...'
      console.log(
        "ERROR: guardian specifed is not linked to the switchboard guardian queue"
      );
      console.log(
        "Please use the `solana on-demand permission set` command for Oracles."
      );
      return;
    }
    //== end isGuardian

    // TODO: is there a way to check if the keypoair is authorized to write to this guardianQueue ?
    // if (
    //   (flags.asProposal !== true) &&             // keypair will be random if it's a proposal,
    //   (queueAuthority !== authKeypair.publicKey) // while this is an actual problem
    // ) {
    //   console.log("ERROR: queueAccount and authority are not the same");
    //   console.log(`>${queueAuthority}< !== >${authKeypair.publicKey}<`);
    //   return;
    // }
    //== end authority

    //== begin ix - craft the ix

    let ix;

    if (flags.disable) {
      ix = await state.unregisterGuardianIx({ guardian: guardianPubkey });
    } else {
      ix = await state.registerGuardianIx({ guardian: guardianPubkey });
    }

    if (this.verbose) {
      console.log(`  Adding the instruction below to the transaction:`);
      console.log(
        `  Clear-text instruction: ${JSON.stringify(ix, undefined, 2)}`
      );
    }
    //== end ix

    //== begin tm - build the transaction message
    const tm = new TransactionMessage({
      payerKey: authKeypair.publicKey,
      recentBlockhash: latestBlockhash.blockhash,
      instructions: [ix],
    });
    if (this.verbose) {
      console.log(`  Sending the following Transaction Message:`);
      console.log(
        `  Clear-text transaction message: ${JSON.stringify(tm, undefined, 2)}`
      );
    }
    //== end tm

    if (flags.asProposal !== true) {
      const tx = new VersionedTransaction(tm.compileToV0Message());
      console.log("✅ - Compiled Transaction Message");

      console.log(`  Signing with account bs58: ${authKeypair.publicKey}`);
      console.log(`  Connection rpc url: ${connection.rpcEndpoint}`);

      tx.sign([authKeypair]);
      console.log("✅ - Transaction signed");

      if (this.verbose) {
        console.log(`  The transaction below is now being sent on-chain.`);
        console.log(
          `  Clear-text transaction: ${JSON.stringify(tx, undefined, 2)}`
        );
      }

      const signature = await connection.sendTransaction(tx);
      await connection.confirmTransaction(signature, "confirmed");

      console.log("✅ - Transaction sent to network");
      console.log(`  Signature: ${signature}`);
    } else {
      const msg = tm.compileToLegacyMessage();
      console.log("✅ - Compiled Transaction Message");
      console.log(`  Proposal transaction: ${bs58.encode(msg.serialize())}`);
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to set permission");
  }
}
