import { ChildProcess, spawn } from "child_process";
import fs from "fs";
import os from "os";
import fetch from "node-fetch";
import path from "path";
import { IOracleConfig, ISwitchboardOracle } from "./types";
import { getCacheDir, normalizeFsPath, sleep } from "./utils";
import { downloadRelease } from "@terascope/fetch-github-release";

/** Downloads a github release and stores in the current working directory */
async function downloadReleaseArtifact(oracleVersion: string) {
  const cacheDir = getCacheDir() ?? process.cwd();
  const outputLocation = path.join(cacheDir, "sbv2-oracle", oracleVersion);
  fs.mkdirSync(outputLocation, { recursive: true });
  if (
    fs.existsSync(outputLocation) &&
    fs.existsSync(path.join(outputLocation, "index.js"))
  ) {
    return outputLocation;
  }
  const result = await downloadRelease(
    "switchboard-xyz",
    "sbv2-oracle-operators",
    outputLocation,
    (release) => release.name === `Sbv2 Oracle ${oracleVersion}`,
    (asset) => asset.name === "sbv2-oracle.zip",
    false,
    false
  );

  if (
    !fs.existsSync(outputLocation) ||
    !fs.existsSync(path.join(outputLocation, "index.js"))
  ) {
    throw new Error(`Failed to fetch the sbv2-oracle`);
  }

  return outputLocation;
}

export class NodeOracle extends ISwitchboardOracle {
  readonly chain: "aptos" | "near" | "solana";
  readonly network:
    | "localnet"
    | "devnet"
    | "testnet"
    | "mainnet"
    | "mainnet-beta";
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

  constructor(
    readonly nodeImage: string,
    readonly config: IOracleConfig,
    readonly switchboardDirectory = path.join(process.cwd(), ".switchboard"),
    readonly silent = false
  ) {
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
    if (!fs.existsSync(this.switchboardDirectory)) {
      fs.mkdirSync(this.switchboardDirectory, { recursive: true });
    }
    this.logFile = path.join(
      this.switchboardDirectory,
      `node.${this.VERSION}.${Math.floor(this.timestamp / 1000)}.log`
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

  async fetchImage(): Promise<string> {
    return await downloadReleaseArtifact(this.nodeImage);
  }

  getArgs(): string[] {
    return Object.entries(this.envVariables).map(
      ([key, value]) => `${key.toUpperCase()}=${value}`
    );
  }

  async start() {
    const imageLocation = await this.fetchImage();
    if (this.oracleProcess) {
      this.oracleProcess.removeAllListeners();
      this.oracleProcess.kill("SIGKILL");
    }
    this.oracleProcess = spawn(
      `${this.getArgs().join(" ")} node ${imageLocation}`,
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
