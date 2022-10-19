import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  CrankAccount,
} from "@switchboard-xyz/switchboard-v2";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

export default class CrankPush extends BaseCommand {
  static description = "push an aggregator onto a crank";

  static aliases = [
    "solana:aggregator:add:crank",
    "solana:crank:add:aggregator",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "crankKey",
      description: "public key of the crank",
    },
    {
      name: "aggregatorKey",
      description: "public key of the aggregator",
    },
  ];

  async run() {
    const { args } = await this.parse(CrankPush);

    const crankAccount = new CrankAccount({
      program: this.program,
      publicKey: new PublicKey(args.crankKey),
    });

    const aggregatorAccount = new AggregatorAccount({
      program: this.program,
      publicKey: new PublicKey(args.aggregatorKey),
    });

    const txn = await crankAccount.push({ aggregatorAccount });

    if (this.silent) {
      console.log(txn);
    } else {
      this.logger.log(
        `${chalk.green(`${CHECK_ICON}Aggregator pushed to crank successfully`)}`
      );
      this.logger.log(this.toUrl(txn));
    }
  }

  async catch(error) {
    super.catch(error, "failed to push aggregator onto the crank");
  }
}
