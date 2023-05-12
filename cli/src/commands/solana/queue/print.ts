import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import { chalkString } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { QueueAccount } from "@switchboard-xyz/solana.js";
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

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      args.queueKey
    );
    const oracles = flags.oracles
      ? await queueAccount.loadOracles()
      : undefined;

    if (flags.json) {
      return this.normalizeAccountData(queueAccount.publicKey, {
        ...queue.toJSON(),
        oracles,
      });
    }

    this.prettyPrintQueue(queue, queueAccount.publicKey);

    if (flags.oracles) {
      this.log(
        chalk.underline(
          chalkString("\n## Oracles", Array.from({ length: 44 }).join(" "))
        )
      );
      if (oracles) {
        for (const [n, oracle] of oracles.entries()) {
          this.logger.info(chalkString(`# ${n + 1}`, oracle.toBase58()));
        }
      } else {
        this.log("No oracles heartbeating");
      }
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to print queue");
  }
}
