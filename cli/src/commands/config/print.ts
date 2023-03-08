import { CliBaseCommand as BaseCommand } from "../../BaseCommand";
import { chalkString } from "../../utils";

import chalk from "chalk";

export default class ConfigPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print cli config";

  static alias = ["config get"];

  static flags = {
    ...BaseCommand.flags,
  };

  static examples = ["$ sbv2 config:print"];

  async run() {
    this.logger.info(JSON.stringify(this.ctx.toJSON(), undefined, 2));
    const PADDING: number = 24;
    try {
      const { devnet, mainnet } = this.ctx.solana;
      this.logger.info(
        chalk.underline(chalk.blue("## Solana".padEnd(PADDING)))
      );
      this.logger.info(
        chalkString(
          "solana-mainnet-rpc".padEnd(PADDING, " "),
          mainnet?.rpcUrl || "N/A"
        )
      );
      this.logger.info(
        chalkString(
          "solana-devnet-rpc".padEnd(PADDING, " "),
          devnet?.rpcUrl || "N/A"
        )
      );
    } catch {}

    try {
      const { testnet, mainnet } = this.ctx.near;
      this.logger.info(chalk.underline(chalk.blue("## Near".padEnd(PADDING))));
      this.logger.info(
        chalkString(
          "near-mainnet-rpc".padEnd(PADDING, " "),
          mainnet?.rpcUrl || "N/A"
        )
      );
      this.logger.info(
        chalkString(
          "near-testnet-rpc".padEnd(PADDING, " "),
          testnet?.rpcUrl || "N/A"
        )
      );
    } catch {}
  }
}
