import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../../solana";
import { chalkString } from "../../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import type { PublicKey } from "@solana/web3.js";
import { SB_ON_DEMAND_PID, State } from "@switchboard-xyz/on-demand";
import chalk from "chalk";

export default class StatePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print the state account";

  async run() {
    const { args, flags } = await this.parse(StatePrint);
    const wallet = this.program.provider.wallet;
    const provider = this.program.provider;

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);
    const stateAccount = new State(program);

    const state = await stateAccount.loadData();

    console.log(this.prettyPrintState(state, stateAccount.pubkey));
  }

  prettyPrintState(state: any, publicKey: PublicKey, SPACING = 24): string {
    const output: string[] = [];

    output.push(
      chalk.underline(chalkString("## State", publicKey.toString(), SPACING))
    );

    output.push(chalkString("bump", state.bump.toString(), SPACING));
    output.push(chalkString("authority", state.authority.toString(), SPACING));
    output.push(
      chalkString("guardianQueue", state.guardianQueue.toString(), SPACING)
    );
    // output.push(
    // chalkString(
    // "minQuoteVerifyVotes",
    // state.minQuoteVerifyVotes.toString(),
    // SPACING
    // )
    // );
    output.push(
      chalkString("epochLength", state.epochLength.toString(), SPACING)
    );

    // Finalized Epoch
    output.push(
      chalkString(
        "finalizedEpoch.id",
        state.finalizedEpoch.id.toString(),
        SPACING
      )
    );
    output.push(
      chalkString(
        "finalizedEpoch.slotEnd",
        state.finalizedEpoch.slotEnd.toString(),
        SPACING
      )
    );
    // Current Epoch
    output.push(
      chalkString("currentEpoch.id", state.currentEpoch.id.toString(), SPACING)
    );
    output.push(
      chalkString(
        "currentEpoch.slotEnd",
        state.currentEpoch.slotEnd.toString(),
        SPACING
      )
    );

    // Next Epoch
    output.push(
      chalkString("nextEpoch.id", state.nextEpoch.id.toString(), SPACING)
    );
    output.push(
      chalkString(
        "nextEpoch.slotEnd",
        state.nextEpoch.slotEnd.toString(),
        SPACING
      )
    );
    output.push(
      chalkString(
        "permittedAdvisories",
        state.sgxAdvisories.slice(0, state.advisoriesLen),
        SPACING
      )
    );

    // _ebuf* fields are reserved and might not need to be displayed.
    // If needed, they can be added similar to the other fields.

    return output.join("\n");
  }

  async catch(error: any) {
    super.catch(error, "failed to print queue");
  }
}
