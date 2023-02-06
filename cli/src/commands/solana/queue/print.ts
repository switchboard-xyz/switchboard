import { Args } from "@oclif/core";
import { QueueAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

export default class QueuePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a queue account";

  static flags = {
    ...BaseCommand.flags,
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

    if (flags.json) {
      return this.normalizeAccountData(queueAccount.publicKey, queue.toJSON());
    }

    this.prettyPrintQueue(queue, queueAccount.publicKey);
  }

  async catch(error: any) {
    super.catch(error, "failed to print queue");
  }
}
