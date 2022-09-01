/** BaseCommand
 * - Config
 * - Logger
 * - Filesystem Utils
 */
import { Command, Flags } from "@oclif/core";
import { Input } from "@oclif/parser";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { baseJsonReplacers, FAILED_ICON } from "./utils";
import bs58 from "bs58";
import Big from "big.js";
import { isBN } from "bn.js";
import { OracleJob } from "@switchboard-xyz/common";
import {
  FsProvider,
  LogProvider,
  LoggerParameters,
  ConfigProvider,
} from "./providers";
import { HexString } from "aptos";
import { toUtf8 } from "./utils";

export abstract class CliBaseCommand extends Command {
  static flags = {
    help: Flags.help({ char: "h" }),
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

  public logger: LogProvider;

  public ctx: ConfigProvider;

  public fs: FsProvider;

  async init() {
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    CliBaseCommand.flags = flags as any;

    // setup config
    fs.mkdirSync(this.config.dataDir, { recursive: true });
    this.ctx = new ConfigProvider(this.config.dataDir);

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
    this.logger = new LogProvider(logParameters, flags.json);

    // setup filesystem utils
    // TODO: Move this to ConfigProvider
    this.fs = new FsProvider(this.config.dataDir, this.logger);
  }

  normalizePath(filePath: string): string {
    const normalizedPath =
      filePath.startsWith("/") || filePath.startsWith("C:")
        ? filePath
        : path.join(process.cwd(), filePath);
    if (!fs.existsSync(normalizedPath)) {
      throw new Error(`Failed to find file at ${normalizedPath}`);
    }

    return normalizedPath;
  }

  async catch(error: any, message?: string) {
    const logger = this.logger ?? console;
    if (message) {
      logger.info(chalk.red(`${FAILED_ICON}${message}`));
    }

    throw error;

    if (error.message) {
      const messageLines = error.message.split("\n");
      logger.error(messageLines[0]);
    }

    if (this.verbose) {
      console.error(error);
    }
    if (error.stack) {
      logger.error(error);
    } else {
      logger.error(error.toString());
    }

    // this.exit(1); // causes unreadable errors?
  }

  logConfig(c: Record<string, string>, writeHeader = true) {
    if (writeHeader) {
      this.logger.debug(chalk.underline(chalk.blue("## Config".padEnd(16))));
    }
    const keySize = Math.max(12, ...Object.keys(c).map((k) => k.length));
    for (const [key, value] of Object.entries(c)) {
      this.logger.debug(
        `${chalk.yellow(`${key}:`.padEnd(keySize + 1, " "))} ${chalk.blue(
          value
        )}`
      );
    }
  }

  loadJobJson(jsonDefinitionPath: string): OracleJob {
    const normalizedPath = this.normalizePath(jsonDefinitionPath);

    const oracleJob = OracleJob.fromObject(
      JSON.parse(
        fs
          .readFileSync(normalizedPath, "utf-8")
          .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, "")
      )
    );

    return oracleJob;
  }

  jsonReplacers(key: any, value: any) {
    if (
      !value ||
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      return value;
    } else {
      if (key === "name" || (key === "metadata" && Array.isArray(value))) {
        return toUtf8(Buffer.from(value));
      } else if (
        (key === "address" || key === "queue") &&
        Array.isArray(value)
      ) {
        return bs58.encode(value);
      } else if (value instanceof Big) {
        return value.toString();
      } else if (value instanceof HexString) {
        return value.toString();
      }
    }

    return baseJsonReplacers(key, value);
  }
}
