import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { chalkString } from "../../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import { PublicKey, TransactionMessage } from "@solana/web3.js";
import {
  Oracle,
  Queue,
  SB_ON_DEMAND_PID,
  SwitchboardPermission,
} from "@switchboard-xyz/on-demand";
import { State } from "@switchboard-xyz/on-demand";
import * as bs58 from "bs58";
import chalk from "chalk";

export default class GuardianCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Create an guardian account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {};

  async run() {
    const { args, flags } = await this.parse(GuardianCreate);
    const wallet = this.program.provider.wallet;
    const provider = this.program.provider;
    const connection = this.program.provider.connection;

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);
    const state = new State(program);
    const stateData = await state.loadData();

    const [oracle, signature] = await Oracle.create(program, {
      queue: stateData.guardianQueue,
    });
    console.log(`# Creating guardian account: ${oracle.pubkey.toBase58()}`);
    console.log(`# Signature: ${signature}`);
    console.log(
      `# \tPlease run the following command to add it to your environment:\n`
    );
    console.log(`export GUARDIAN_ORACLE1=${oracle.pubkey.toBase58()}`);
    console.log(`export GUARDIAN_QUEUE=${stateData.guardianQueue.toBase58()}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to create guardian account");
  }
}
