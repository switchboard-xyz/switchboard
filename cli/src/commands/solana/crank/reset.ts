import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { AggregatorAccount, QueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class CrankReset extends BaseCommand {
  static description = "reset an aggregators crank";

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
    const { args, flags } = await this.parse(CrankReset);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    if (aggregator.crankPubkey.equals(PublicKey.default)) {
      throw new Error(`Aggregator does not belong to a crank`);
    }

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    // make sure it exists
    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      aggregator.queuePubkey
    );

    const setQueueTxn = aggregatorAccount.setQueueInstruction(this.payer, {
      queueAccount,
      authority,
    });
    const signature = await this.signAndSend(setQueueTxn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Aggregator's crank reset successfully`,
        aggregatorAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to reset the aggregators crank account");
  }
}
