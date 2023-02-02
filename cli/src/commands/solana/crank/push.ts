import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  CrankAccount,
  QueueAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana/index";
import { CHECK_ICON } from "../../../utils/index";

export default class CrankPush extends BaseCommand {
  static description = "push the crank";

  static flags = {
    ...BaseCommand.flags,
    crankKey: Flags.string({
      description: "push onto a new crank, if provided",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator to push onto a crank",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(CrankPush);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      aggregator.queuePubkey
    );

    const crankPubkey = flags.crankKey
      ? new PublicKey(flags.crankKey)
      : aggregator.crankPubkey;
    if (crankPubkey.equals(PublicKey.default)) {
      throw new Error(`No crank key provided, try adding --crankKey`);
    }
    const [crankAccount, crank] = await CrankAccount.load(
      this.program,
      crankPubkey
    );

    // TOOD: Verify its allowed
    if (!crank.queuePubkey.equals(queueAccount.publicKey)) {
      throw new Error(`Crank belongs to the wrong queue`);
    }

    const txn = await crankAccount.pushInstruction(this.payer, {
      aggregatorAccount,
      crank,
    });
    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(`${chalk.green(`${CHECK_ICON}Crank pushed successful`)}`);
    this.logger.log(this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "failed to push feed onto the crank");
  }
}
