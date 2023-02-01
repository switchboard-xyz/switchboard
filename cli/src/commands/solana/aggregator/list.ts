import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana/index";

export default class AggregatorList extends BaseCommand {
  static enableJsonFlag = true;

  static description =
    "get a list of aggregators from a provided authority pubkey";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "authorityKey",
      description: "public key of an aggregator's authority",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorList);

    const authorityPubkey = new PublicKey(args.authorityKey);

    const accounts = await this.program.getProgramAccounts();
    const aggregators = Array.from(accounts.aggregators.entries()).filter(
      ([aggregatorKey, aggregator]) =>
        aggregator.authority.equals(authorityPubkey)
    );

    const aggregatorKeys = aggregators.map((a) => a[0]);

    if (flags.json) {
      return aggregatorKeys;
    }

    aggregatorKeys.forEach((aggregatorKey) => console.log(aggregatorKey));
  }

  async catch(error) {
    super.catch(error, "failed to list aggregators");
  }
}
