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
import * as bs58 from "bs58";
import chalk from "chalk";

export default class OracleCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Create an oracle account";

  static aliases = ["solana:on-demand:oracle:init"];

  static flags = {
    ...BaseCommand.flags,
    queue: Flags.string({
      description: "public key of the queue account",
      required: true,
    }),
    // priorityFee: Flags.integer({
    // description: "priority fee",
    // required: false,
    // }),
  };

  static args = {};

  async run() {
    const { args, flags } = await this.parse(OracleCreate);
    const wallet = this.program.provider.wallet;
    const provider = this.program.provider;
    const connection = this.program.provider.connection;

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);

    const queueKey = new PublicKey(flags.queue);
    const [oracle, signature] = await Oracle.create(program, {
      queue: queueKey,
    });
    console.log(`# Creating oracle account: ${oracle.pubkey.toBase58()}`);
    console.log(`# Signature: ${signature}`);
    console.log(
      `# \tPlease run the following command to add it to your environment:\n`
    );
    console.log(`export ORACLE1=${oracle.pubkey.toBase58()}`);
    console.log(`export QUEUE=${queueKey.toBase58()}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to create oracle account");
  }
}
