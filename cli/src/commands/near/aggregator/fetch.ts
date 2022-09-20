import { Flags } from "@oclif/core";
import { AggregatorAccount } from "@switchboard-xyz/near.js";
import { NearWithoutSignerBaseCommand as BaseCommand } from "../../../near";

export default class FetchAggregator extends BaseCommand {
  static enableJsonFlag = true;

  static description = "fetch all aggregators for a given near account";

  static aliases = ["near:fetch:aggregators"];

  static flags = {
    ...BaseCommand.flags,
    accountId: Flags.string({
      description: "optional, authority to fetch aggregators for",
      required: true,
    }),
  };

  static args = [];

  async run() {
    const { flags, args } = await this.parse(FetchAggregator);

    const feeds = await AggregatorAccount.loadAuthorityKeys(
      this.program,
      flags.accountId
    );

    console.log(feeds);

    // console.log(
    //   JSON.stringify(feeds.map((a) => this.normalizeAccountData(a.address, a))),
    //   this.jsonReplacers,
    //   2
    // );
  }

  async catch(error) {
    super.catch(error, "Failed to fetch near aggregators");
  }
}
