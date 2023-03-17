import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana/index";
import { AggregatorIllegalRoundOpenCall } from "../../../types/index";
import { CHECK_ICON } from "../../../utils/index";

import { Args, Flags } from "@oclif/core";
import { AggregatorAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class AggregatorClose extends BaseCommand {
  static description =
    "close an aggregator and associated PDA accounts on devnet";

  static examples = [
    "$ sbv2 solana aggregator close J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json",
  ];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the aggregator and required to make config changes",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorClose);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const txn = await aggregatorAccount.closeInstructions(this.payer, {
      authority: authority,
    });

    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(`${CHECK_ICON}Aggregator closed successfully`)}`
    );

    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to close aggregator account");
  }
}
