import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

export default class CrankPop extends BaseCommand {
  static description = "pop the crank";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "crankKey",
      description: "public key of the crank",
      required: true,
    },
  ];

  async run() {
    const { args } = await this.parse(CrankPop);
    const [crankAccount] = await this.loadCrank(args.crankKey);
    const signature = await crankAccount.pop({});
    console.log("Transaction Signature:", this.toUrl(signature));

    if (!this.silent) {
      this.logger.log(`${chalk.green(`${CHECK_ICON}Crank pop successful`)}`);
      this.logger.log(this.toUrl(signature));
    }
  }

  async catch(error) {
    super.catch(error, "failed to pop the crank");
  }
}
