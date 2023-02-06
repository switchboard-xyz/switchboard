import { Args, Flags } from "@oclif/core";
import { AggregatorAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

export default class AggregatorLock extends BaseCommand {
  static description =
    "lock an aggregator's configuration and prevent further changes";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorLock);

    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );
    const authority = await this.loadAuthority(
      flags.authority,
      aggregatorData.authority
    );

    const txn = aggregatorAccount.lockInstruction(this.payer, {
      authority,
    });
    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(`${CHECK_ICON}Aggregator locked successfully`)}`
    );

    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to lock aggregator configuration");
  }
}
