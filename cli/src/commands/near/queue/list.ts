import { Args } from "@oclif/core";
import { NearWithoutSignerBaseCommand as BaseCommand } from "../../../near";

export default class QueueList extends BaseCommand {
  static enableJsonFlag = true;

  static description = "list aggregators for a given queue";

  static aliases = ["near:list:queue"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    queueAddress: Args.string({
      description: "address of the queue in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(QueueList);

    const [queue, queueData] = await this.loadQueue(args.queueAddress);

    const feeds = await queue.loadAggregators();
    this.logger.info(
      JSON.stringify(
        feeds.map((f) => f.address),
        undefined,
        2
      )
    );
  }

  async catch(error: any) {
    super.catch(error, "Failed to list near oracle queue");
  }
}
