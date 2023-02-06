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
import {
  baseJsonReplacers,
  chalkString,
  FAILED_ICON,
  normalizeFilePath,
} from "./utils";
import bs58 from "bs58";
import { Big } from "@switchboard-xyz/common";
import { OracleJob, toUtf8 } from "@switchboard-xyz/common";
import {
  FsProvider,
  LogProvider,
  LoggerParameters,
  ConfigProvider,
} from "./providers";
import { HexString } from "aptos";
import { PublicKey } from "@solana/web3.js";
import { isBN } from "bn.js";
import { SwitchboardDecimal } from "@switchboard-xyz/common";

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

  logProperty(property: string, value: any) {
    this.log(chalkString(property, value));
  }

  normalizePath(filePath: string): string {
    return normalizeFilePath(filePath);
  }

  verifyFileExists(filePath: string): boolean {
    if (fs.existsSync(filePath)) {
      return true;
    }

    return false;
  }

  normalizeDirPath(directoryPath: string): string {
    const normalizedPath =
      directoryPath.startsWith("/") || directoryPath.startsWith("C:")
        ? directoryPath
        : path.join(process.cwd(), directoryPath);

    return normalizedPath;
  }

  logError(message: string) {
    const logger = this.logger ?? console;
    logger.info(chalk.red(`${FAILED_ICON}${message}`));
  }

  async catch(error: unknown, message?: string) {
    const logger = this.logger ?? console;
    if (message) {
      logger.info(chalk.red(`${FAILED_ICON}${message}`));
    }

    if ("parse" in (error as any)) {
      (error as any).parse = undefined;
    }

    if (error instanceof Error) {
      throw error;

      // if (error.message) {
      //   const messageLines = error.message.split("\n");
      //   logger.error(messageLines[0]);
      // }

      // if (this.verbose) {
      //   console.error(error);
      // }

      // if (error.stack) {
      //   logger.error(error);
      // } else {
      //   logger.error(error.toString());
      // }

      // // this.exit(1); // causes unreadable errors?
    } else {
      throw error;
    }
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

  loadJobDefinition(jsonDefinitionPath: string): OracleJob {
    const normalizedPath = this.normalizePath(jsonDefinitionPath);

    const oracleJob = OracleJob.fromObject(
      JSON.parse(
        fs
          .readFileSync(normalizedPath, "utf-8")
          .replace(/\/\*[\S\s]*?\*\/|([^:\\]|^)\/\/.*$/g, "")
      )
    );

    return oracleJob;
  }

  loadJobDefinitions(jsonDefinitionPath: string): Array<OracleJob> {
    const normalizedPath = this.normalizePath(jsonDefinitionPath);

    const fileString = fs
      .readFileSync(normalizedPath, "utf-8")
      .replace(/\/\*[\S\s]*?\*\/|([^:\\]|^)\/\/.*$/g, "");
    const fileObj = JSON.parse(fileString);

    if ("tasks" in fileObj) {
      const oracleJob = OracleJob.fromObject(fileObj);
      return [oracleJob];
    }

    if ("jobs" in fileObj && Array.isArray(fileObj.jobs)) {
      const oracleJobs: Array<OracleJob> = fileObj.jobs.map(
        (job: Record<string, any>): OracleJob => OracleJob.fromObject(job)
      );
      return oracleJobs;
    }

    throw new Error(
      `Failed to load job definitions from file, ${jsonDefinitionPath}`
    );
  }

  // eslint-disable-next-line complexity
  jsonReplacers(key: any, value: any): any {
    if (
      !value ||
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      return value;
    }

    if (
      key === "ebuf" ||
      key === "_ebuf" ||
      key === "reserved" ||
      key === "reserved1"
    ) {
      return;
    }

    if ((key === "name" || key === "metadata") && Array.isArray(value)) {
      return toUtf8(value);
    }

    if ((key === "address" || key === "queue") && Array.isArray(value)) {
      return bs58.encode(value);
    }

    if (Array.isArray(value) && value.length > 0) {
      if (typeof value[0] === "number") {
        if (value.every((item) => item === 0)) {
          return [];
        }

        return `[${value.join(",")}]`;
      }

      if (value[0] instanceof PublicKey) {
        return value.filter(
          (pubkey) => !(pubkey as PublicKey).equals(PublicKey.default)
        );
      }

      try {
        return value.map((element) => this.jsonReplacers(key, element));
      } catch {}
    }

    if (
      value instanceof SwitchboardDecimal ||
      ("mantissa" in value && "scale" in value)
    ) {
      const big = SwitchboardDecimal.from(value).toBig();
      return big.toString();
    }

    if (value instanceof Big) {
      return value.toString();
    }

    if (isBN(value)) {
      return value.toString();
    }

    if (value instanceof HexString) {
      return value.toString();
    }

    if (value instanceof PublicKey) {
      return value.toBase58();
    }

    return baseJsonReplacers(key, value);
  }
}
