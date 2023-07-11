import { ISwitchboardOracle } from "./SwitchboardOracle";
import type { Chain, IOracleConfig, Network } from "./types";
import { normalizeFsPath, sleep } from "./utils";

import type { ChildProcess } from "child_process";
import { spawn } from "child_process";
import fs from "fs";
import fetch from "node-fetch";
import path from "path";

export class TsNodeOracle extends ISwitchboardOracle {
  readonly imageTag: string = "TsNode";

  readonly switchboardDirectory: string;
  readonly silent = false;

  readonly chain: Chain;
  readonly network: Network;
  readonly envVariables: Record<string, string>;
  readonly secretPath: string;

  logs: string[] = [];
  readonly logFile: string;

  oracleProcess?: ChildProcess;

  isActive = true;
  readonly timestamp: number = Date.now();

  onDataCallback: (data: any) => void;
  onErrorCallback: (error: Error) => void;
  onCloseCallback: (code: number, signal: NodeJS.Signals) => void;

  constructor(readonly sourcePath: string, readonly config: IOracleConfig) {
    super();
    // set config
    this.chain = config.chain;
    this.network = config.network;

    // payer secret (required)
    this.secretPath = normalizeFsPath(config.secretPath);
    if (!this.secretPath) {
      throw new Error(`Payer secret path is required`);
    }
    if (!fs.existsSync(this.secretPath)) {
      throw new Error(`Payer secret path does not exist`);
    }

    // Set environment variables for docker image
    this.envVariables = ISwitchboardOracle.parseEnvVariables(config);

    // payer keypair config
    this.envVariables["FS_PAYER_SECRET_PATH"] = this.secretPath;

    // log config
    this.switchboardDirectory =
      config.switchboardDirectory ?? path.join(process.cwd(), ".switchboard");
    if (!fs.existsSync(this.switchboardDirectory)) {
      fs.mkdirSync(this.switchboardDirectory, { recursive: true });
    }
    this.logFile = path.join(
      this.switchboardDirectory,
      `node.${this.imageTag}.${Math.floor(this.timestamp / 1000)}.log`
    );

    // callback config
    this.onDataCallback = (data) => {
      this.addLog(data.toString());
      if (!this.silent) {
        console.log(`\u001B[34m${data.toString()}\u001B[0m`);
      }
    };
    this.onErrorCallback = (error) => {
      this.addLog(error.toString());
      if (!this.silent) {
        console.error(`\u001B[31m${error.toString()}\u001B[0m`);
      }
    };
    this.onCloseCallback = (code, signal) => {
      this.addLog(`Exit code ${code} received`);
      this.saveLogs();
      if (!this.isActive) {
        return;
      }

      // if reboot from no RPC or if image already exists
      if (code && (code === 0 || code === 125)) {
        this.start();
      } else if (!this.silent) {
        console.error(`\u001B[31mNode exited with code ${code}\u001B[0m`);
        console.log(`\u001B[34m${"Restarting oracle ..."}\u001B[0m`);
        this.start();
      } else if (!code || (code !== 0 && code !== 1)) {
        console.error(`\u001B[31mNode exited with code ${code}\u001B[0m`);
      }
    };
  }

  getArgs(): string[] {
    return Object.entries(this.envVariables).map(
      ([key, value]) => `${key.toUpperCase()}=${value}`
    );
  }

  async start() {
    if (this.oracleProcess) {
      this.oracleProcess.removeAllListeners();
      this.oracleProcess.kill("SIGKILL");
    }
    this.oracleProcess = spawn(
      `${this.getArgs().join(" ")} ts-node ${this.sourcePath}`,
      {
        shell: true,
        env: process.env,
        stdio: this.silent ? undefined : ["inherit", "pipe", "pipe"],
      }
    );
    this.oracleProcess!.stdout!.on("data", this.onDataCallback);
    this.oracleProcess!.stderr!.on("data", this.onDataCallback);
    this.oracleProcess!.on("error", this.onErrorCallback);
    this.oracleProcess.on("close", this.onCloseCallback);
    this.oracleProcess.on("exit", this.onCloseCallback);
    this.oracleProcess.on("exit", () => {
      if (this.oracleProcess !== undefined) {
        this.oracleProcess.removeAllListeners();
        this.oracleProcess = undefined;
      }
    });
  }

  stop(): boolean {
    this.isActive = false;
    this.saveLogs();

    if (this.oracleProcess) {
      this.oracleProcess.removeAllListeners();
      const wasKilled = this.oracleProcess.kill();
      if (wasKilled) {
        this.oracleProcess = undefined;
      }

      return wasKilled;
    }

    return true;
  }

  kill(exitCode: number | NodeJS.Signals = "SIGINT") {
    if (this.oracleProcess) {
      this.oracleProcess.removeAllListeners();
      this.oracleProcess.kill(exitCode);
      this.oracleProcess = undefined;
    }
  }

  /**
   * @param timeout - the number of seconds to await for the oracle to start successfully heartbeating
   *
   * @throws if timeout is exceeded and oracle heartbeat was never detected
   */
  async awaitReady(timeout: number = 60): Promise<void> {
    const healthcheckPort = Number.parseInt(
      this.envVariables["HEALTH_CHECK_PORT"] ?? "8080"
    );

    let myError: any;
    let numRetries = timeout * 2;
    while (numRetries) {
      try {
        const response = await fetch(
          `http://0.0.0.0:${healthcheckPort}/healthz`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          return;
        }
      } catch (error) {
        myError = error;
        // console.error(error);
      }

      --numRetries;
      await sleep(500);
    }

    throw new Error(
      `Failed to start Switchboard oracle in ${timeout} seconds${
        myError ? ": " + myError : undefined
      }`
    );
  }
}
