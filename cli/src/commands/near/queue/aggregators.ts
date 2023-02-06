import { Args } from "@oclif/core";
import base58 from "bs58";
import { NearWithoutSignerBaseCommand as BaseCommand } from "../../../near";

export default class FetchAggregators extends BaseCommand {
  static enableJsonFlag = true;

  static description = "fetch all aggregators for a given queue account";

  static aliases = ["near:queue:feeds"];

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
    const { flags, args } = await this.parse(FetchAggregators);

    const [queue, queueData] = await this.loadQueue(args.queueAddress);

    const feeds = await queue.loadAggregatorKeys();
    console.log(
      JSON.stringify(
        feeds.map((a) => base58.encode(a)),
        this.jsonReplacers,
        2
      )
    );
  }

  async catch(error: any) {
    super.catch(error, "Failed to fetch near aggregators");
  }
}
