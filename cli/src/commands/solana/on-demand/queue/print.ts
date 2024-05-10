import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../../solana";
import { chalkString } from "../../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { Queue, SB_ON_DEMAND_PID } from "@switchboard-xyz/on-demand";
import chalk from "chalk";

export default class QueuePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a queue account";

  static flags = {
    ...BaseCommand.flags,
    oracles: Flags.boolean({ description: "print the queue oracles" }),
  };

  static args = {
    queueKey: Args.string({
      description: "public key of the queue account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(QueuePrint);
    const wallet = this.program.provider.wallet;
    const provider = this.program.provider;

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);

    const queueAccount = new Queue(program, new PublicKey(args.queueKey));
    const queue = await queueAccount.loadData();
    // const oracles = flags.oracles
    // ? await queueAccount.loadOracles()
    // : undefined;
    //
    // if (flags.json) {
    // return this.normalizeAccountData(queueAccount.pubkey, {
    // ...queue.toJSON(),
    // oracles,
    // });
    // }

    console.log(this.prettyPrintQueue(queue, queueAccount.pubkey));

    // if (flags.oracles) {
    // this.log(
    // chalk.underline(
    // chalkString("\n## Oracles", Array.from({ length: 44 }).join(" "))
    // )
    // );
    // if (oracles) {
    // for (const [n, oracle] of oracles.entries()) {
    // this.logger.info(chalkString(`# ${n + 1}`, oracle.toBase58()));
    // }
    // } else {
    // this.log("No oracles heartbeating");
    // }
    // }
  }

  prettyPrintQueue(queue: any, publicKey: PublicKey, SPACING = 36): string {
    const output: string[] = [];

    output.push(chalk.underline(chalkString("## Queue", publicKey, SPACING)));

    output.push(chalkString("authority", queue.authority, SPACING));
    output.push(
      chalkString("mrEnclavesLen", queue.mrEnclavesLen.toString(), SPACING)
    );
    output.push(chalkString(`mrEnclaves`, "", SPACING));
    for (let i = 0; i < queue.mrEnclavesLen; i++) {
      const mrEnclave = Buffer.from(queue.mrEnclaves[i]).toString("hex");
      output.push(chalkString(`    mrEnclave-${i}`, mrEnclave, SPACING));
    }
    output.push(
      chalkString("oracleKeysLen", queue.oracleKeysLen.toString(), SPACING)
    );
    output.push(chalkString(`oracleKeys`, "", SPACING));
    for (let i = 0; i < queue.oracleKeysLen; i++) {
      output.push(
        chalkString(`    oracleKey-${i}`, queue.oracleKeys[i], SPACING)
      );
    }
    output.push(
      chalkString(
        "maxQuoteVerificationAge",
        queue.maxQuoteVerificationAge.toString(),
        SPACING
      )
    );
    output.push(
      chalkString(
        "lastHeartbeat",
        new Date(queue.lastHeartbeat * 1000).toISOString(),
        SPACING
      )
    );
    output.push(
      chalkString("nodeTimeout", queue.nodeTimeout.toString(), SPACING)
    );
    output.push(
      chalkString("oracleMinStake", queue.oracleMinStake.toString(), SPACING)
    );
    output.push(
      chalkString(
        "allowAuthorityOverrideAfter",
        queue.allowAuthorityOverrideAfter,
        SPACING
      )
    );
    output.push(chalkString("reward", queue.reward.toString(), SPACING));
    output.push(chalkString("currIdx", queue.currIdx.toString(), SPACING));
    output.push(chalkString("gcIdx", queue.gcIdx.toString(), SPACING));
    output.push(
      chalkString(
        "requireAuthorityHeartbeatPermission",
        queue.requireAuthorityHeartbeatPermission.toString(),
        SPACING
      )
    );
    output.push(
      chalkString(
        "requireAuthorityVerifyPermission",
        queue.requireAuthorityVerifyPermission.toString(),
        SPACING
      )
    );
    output.push(
      chalkString(
        "requireUsagePermissions",
        queue.requireUsagePermissions.toString(),
        SPACING
      )
    );
    output.push(chalkString("mint", queue.mint, SPACING));

    // Additional fields can be added here as needed

    return output.join("\n");
  }

  async catch(error: any) {
    super.catch(error, "failed to print queue");
  }
}
