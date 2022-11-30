import chalk from "chalk";
import { CliBaseCommand as BaseCommand } from "../../BaseCommand";
import { chalkString } from "../../utils";

export default class ConfigPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print cli config";

  static alias = ["config get"];

  static flags = {
    ...BaseCommand.flags,
  };

  static examples = ["$ sbv2 config:print"];

  async run() {
    this.log(JSON.stringify(this.ctx.toJSON(), undefined, 2));
    const PADDING: number = 24;
    try {
      const { devnet, mainnet } = this.ctx.solana;
      this.log(chalk.underline(chalk.blue("## Solana".padEnd(PADDING))));
      this.log(
        chalkString(
          "solana-mainnet-rpc".padEnd(PADDING, " "),
          mainnet.rpcUrl || "N/A"
        )
      );
      this.log(
        chalkString(
          "solana-devnet-rpc".padEnd(PADDING, " "),
          devnet.rpcUrl || "N/A"
        )
      );
    } catch (error) {}

    try {
      const { testnet, mainnet } = this.ctx.near;
      this.log(chalk.underline(chalk.blue("## Near".padEnd(PADDING))));
      this.log(
        chalkString(
          "near-mainnet-rpc".padEnd(PADDING, " "),
          mainnet.rpcUrl || "N/A"
        )
      );
      this.log(
        chalkString(
          "near-testnet-rpc".padEnd(PADDING, " "),
          testnet.rpcUrl || "N/A"
        )
      );
    } catch (error) {}
  }
}
