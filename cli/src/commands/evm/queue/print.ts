import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";
import { chalkString } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { OracleQueueData } from "@switchboard-xyz/evm.js";
import chalk from "chalk";

export default class QueuePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a queue";

  static flags = {
    ...BaseCommand.flags,
    oracles: Flags.boolean({
      description: "print the current set of heartbeating oracles",
    }),
  };

  static args = {
    queueAddress: Args.string({
      description: "address of the queue account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(QueuePrint);

    const [queueAccount, queue] = await this.loadQueue(args.queueAddress);

    let oracles: string[] | undefined;
    try {
      oracles = await queueAccount.loadOracles();
    } catch (error) {
      if (this.verbose) {
        this.logError(`Failed to fetch queue oracles, ${error}`);
      }
    }

    const queueData: OracleQueueData & { oracles?: string[] } = {
      ...queue,
      oracles,
    };

    if (flags.json) {
      return this.normalizeAccountData(queueAccount.address, queueData);
    }

    this.prettyPrintQueue(queueData, queueAccount.address);

    if (flags.oracles) {
      this.log(
        chalk.underline(
          chalkString("\n## Oracles", Array.from({ length: 44 }).join(" "))
        )
      );
      if (oracles) {
        for (const [n, oracle] of oracles.entries()) {
          this.logger.info(chalkString(`# ${n + 1}`, oracle));
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
