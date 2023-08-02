import { flags } from "@oclif/parser";
import * as winston from "winston";

export type LogLevel =
  | "error"
  | "warn"
  | "info"
  | "debug"
  | "config"
  | "output";

export interface ILogProvider {
  log(message: string): void;
  debug(message: string): void;
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export interface ConsoleParameters {
  level?: LogLevel;
}

export interface FileParameters {
  level: LogLevel;
  filename: string;
}

export interface LoggerParameters {
  console?: ConsoleParameters | false;
  file?: FileParameters | false;
  silent?: boolean;
  verbose?: boolean;
}

export class LogProvider implements ILogProvider {
  private _logger: ILogProvider;

  public silent = false;

  public verbose = false;

  public enabled = true;

  get logger() {
    return this._logger;
  }

  constructor(parameters: LoggerParameters, disable = false) {
    this._logger = new WinstonLogger(parameters);
    this.silent = parameters.silent ?? false;
    this.verbose = parameters.verbose ?? false;

    if (disable) {
      this.disable();
    }
  }

  disable() {
    this.enabled = false;
  }

  log(message: string) {
    if (this.enabled) {
      this.logger.log(message);
    }
  }

  debug(message: string) {
    if (this.enabled) {
      this.logger.debug(message);
    }
  }

  info(message: string) {
    if (this.enabled) {
      this.logger.info(message);
    }
  }

  warn(message: string) {
    if (this.enabled) {
      this.logger.warn(message);
    }
  }

  error(message: string) {
    if (this.enabled) {
      this.logger.error(message);
    }
  }
}

export class WinstonLogger {
  public logger: winston.Logger;

  constructor(parameters: LoggerParameters) {
    // file logger formatter
    const format = winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
      // winston.format.printf((info) => {
      //   return JSON.stringify({
      //     timestamp: info.timestamp,
      //     level: info.level,
      //     service: info.service,
      //     message: info.message.replace(/[^\s\w]/gi, ""),
      //   });
      // })
    );
    const transports: winston.transport[] = [];

    if (parameters.file && parameters.file.filename) {
      transports.push(
        new winston.transports.File({
          filename: parameters.file.filename,
          level: "debug",
          format: format,
        })
      );
    }

    if (parameters.console) {
      transports.push(
        new winston.transports.Console({
          level: parameters.console.level || "info",
          format: winston.format.printf((info) => `${info.message}`),
        })
      );
    }

    this.logger = winston.createLogger({
      transports,
      defaultMeta: { service: "js_sb_cli" },
    });
  }

  public log(message: string) {
    this.logger.log("info", message);
  }

  public info(message: string) {
    this.logger.info(message);
  }

  public warn(message: string) {
    this.logger.warn(message);
  }

  public error(message: string) {
    this.logger.error(message);
  }

  public debug(message: string) {
    this.logger.debug(message);
  }
}

export const CONSOLE_ONLY_LOGGER: LoggerParameters = {
  console: { level: "info" },
};

export const DEFAULT_LOGGER = new LogProvider(CONSOLE_ONLY_LOGGER);
