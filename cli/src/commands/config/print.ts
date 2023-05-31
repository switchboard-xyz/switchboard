import { CliBaseCommand as BaseCommand } from "../../BaseCommand";

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
    this.logger.info(chalk.underline(chalk.blue(`## Config`.padEnd(24))));
    this.logger.info(this.ctx.toPrettyString());
  }
}
