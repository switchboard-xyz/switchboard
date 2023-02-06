import { Args } from "@oclif/core";
import { AggregatorAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { AggregatorIllegalRoundOpenCall } from "../../../types";
import { CHECK_ICON } from "../../../utils";

export default class AggregatorUpdate extends BaseCommand {
  static description = "request a new aggregator result from a set of oracles";

  static aliases = ["solana:aggregator:open-round"];

  static examples = [
    "$ sbv2 solana aggregator update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args } = await this.parse(AggregatorUpdate);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const txn = await aggregatorAccount.openRoundInstruction(this.payer, {});

    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(`${CHECK_ICON}Aggregator update request sent to oracles`)}`
    );

    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    if (
      error instanceof AggregatorIllegalRoundOpenCall ||
      error.toString().includes("0x177d")
    ) {
      this.logger.info(error.toString());
      this.exit(0);
    }

    super.catch(error, "failed to open a new aggregator update round");
  }
}
