import { Command, Flags } from "@oclif/core";
import { Input } from "@oclif/parser";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { CliConfig } from "../config";
import { CommandContext } from "../types/context/context";
import { LoggerParameters, LogProvider } from "../types/context/logging";
import { FAILED_ICON } from "../utils";

abstract class NearBaseCommand extends Command {
  static flags = {
    verbose: Flags.boolean({
      char: "v",
      description: "log everything",
    }),
    silent: Flags.boolean({
      char: "s",
      description: "suppress cli prompts",
    }),
  };

  public silent: boolean; // TODO: move to logger

  public verbose: boolean; // TODO: move to logger

  public cliConfig: CliConfig;

  public logger: LogProvider;

  public context: CommandContext;

  async init() {
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    NearBaseCommand.flags = flags as any;

    // setup logging
    this.silent = (flags as any).silent;
    this.verbose = (flags as any).verbose;
    const level = (flags as any).silent
      ? "error"
      : (flags as any).verbose
      ? "debug"
      : "info";
    const logFilename = path.join(this.config.cacheDir, "log.txt");
    const logParameters: LoggerParameters = {
      console: {
        level,
      },
      file: {
        level: "debug",
        filename: logFilename,
      },
      silent: this.silent ?? false,
      verbose: this.verbose ?? false,
    };
    this.logger = new LogProvider(logParameters);

    fs.mkdirSync(this.config.dataDir, { recursive: true });
  }

  async catch(error: any, message?: string) {
    // fall back to console if logger is not initialized yet
    const logger = this.logger ?? console;

    if (message) {
      logger.info(chalk.red(`${FAILED_ICON}${message}`));
    }

    if (error.message) {
      const messageLines = error.message.split("\n");
      logger.error(messageLines[0]);
    }

    if (this.verbose) {
      console.error(error);
    }
    // if (error.stack) {
    //   logger.error(error);
    // } else {
    //   logger.error(error.toString());
    // }

    // this.exit(1); // causes unreadable errors?
  }
}

export default NearBaseCommand;
