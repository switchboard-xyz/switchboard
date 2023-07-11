import type { Chain, IOracleConfig, Network } from "./types";

import fs from "fs";

export abstract class ISwitchboardOracle {
  abstract imageTag: string;
  abstract silent: boolean;
  abstract switchboardDirectory: string;

  abstract chain: Chain;
  abstract network: Network;

  abstract secretPath: string;
  abstract envVariables?: Record<string, string>;

  abstract start(...args: Array<any>): any;
  abstract stop(...args: Array<any>): boolean;
  abstract kill(exitCode: number, ...args: Array<any>): any;
  abstract awaitReady(timeout: number): Promise<void>;

  constructor() {}

  /**
   * Start a Switchboard oracle and await for the oracle to signal readiness.
   *
   * @param timeout - the number of seconds to await for the oracle to start successfully heartbeating
   *
   * @throws if timeout is exceeded and oracle heartbeat was never detected
   */
  public async startAndAwait(timeout: number = 60) {
    await this.start();
    await this.awaitReady(timeout);
  }

  abstract logFile: string;

  public logs: string[] = [];

  public addLog(log: string): void {
    this.logs.push(log);
    // flush logs
    if (this.logs.length > 10) {
      this.saveLogs();
    }
  }

  /** Save an array of oracle logs */
  public saveLogs(): void {
    const filteredLogs = this.logs
      .filter((l) => Boolean)
      .map((l) => l.replace(/\r?\n\s*\r?\n/g, "\r\n"));
    if (filteredLogs.length > 0) {
      if (fs.existsSync(this.logFile)) {
        fs.appendFileSync(this.logFile, "\r\n" + filteredLogs.join("\r\n"));
        this.logs = [];
      } else {
        fs.writeFileSync(this.logFile, filteredLogs.join("\r\n"));
        this.logs = [];
      }
    }
  }

  public static parseEnvVariables(
    config: IOracleConfig
  ): Record<string, string> {
    // Set environment variables for docker image
    const envVariables = config.envVariables ?? {};

    // defaults
    envVariables["DISABLE_NONCE_QUEUE"] = "1";
    envVariables["DEBUG"] = "1";
    envVariables["VERBOSE"] = "1";
    envVariables["DISABLE_METRICS"] = "1";
    envVariables["ALLOW_LOCALHOST"] = "1";

    // set chain
    envVariables["CHAIN"] = config.chain ?? "solana";

    // rpc url (required)
    envVariables["RPC_URL"] = envVariables["RPC_URL"] ?? config.rpcUrl;
    if (!envVariables["RPC_URL"]) {
      throw new Error(`$RPC_URL is required`);
    }

    // oracle key (required)
    envVariables["ORACLE_KEY"] = envVariables["ORACLE_KEY"] ?? config.oracleKey;
    if (!envVariables["ORACLE_KEY"]) {
      throw new Error(`$ORACLE_KEY is required`);
    }

    // task runner config
    envVariables["TASK_RUNNER_SOLANA_RPC"] =
      envVariables["TASK_RUNNER_SOLANA_RPC"] ??
      config.taskRunnerSolanaRpc ??
      "https://api.mainnet-beta.solana.com";

    // solana config
    if (envVariables["CHAIN"] === "solana") {
      envVariables["CLUSTER"] = config.network;
    }

    // aptos config
    if (envVariables["CHAIN"] === "aptos") {
      envVariables["NETWORK"] = config.network;

      if (!envVariables["APTOS_PID"]) {
        throw new Error(
          `Need to provide '$APTOS_PID' if chain is set to 'aptos'`
        );
      }
    }

    // near config
    if (envVariables["CHAIN"] === "near") {
      envVariables["NEAR_NETWORK_ID"] = config.network;

      if (!envVariables["NEAR_NAMED_ACCOUNT"]) {
        throw new Error(
          `Need to provide '$NEAR_NAMED_ACCOUNT' if chain is set to 'near'`
        );
      }
    }

    return envVariables;
  }
}
