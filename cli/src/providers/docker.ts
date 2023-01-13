import {
  SWITCHBOARD_DEVNET_ADDRESS,
  SWITCHBOARD_TESTNET_ADDRESS,
} from "@switchboard-xyz/aptos.js";
import { ChildProcessByStdio, execSync, spawn } from "child_process";
import fs from "fs";
import path from "path";
import internal from "stream";
import crypto from "crypto";
import chalk from "chalk";
import { promiseWithTimeout, sleep } from "@switchboard-xyz/common";

export interface IOracleConfig {
  chain: "aptos" | "near" | "solana";
  network: "localnet" | "devnet" | "testnet" | "mainnet" | "mainnet-beta";
  rpcUrl: string;
  oracleKey: string;
  secretPath: string;
  // optionals
  // Optional
  taskRunnerSolanaRpc?: string;
  // Optional, will use network to determine PID if not provided
  aptosPid?: string;
  // Required if chain is near
  nearNamedAccount?: string;
}

export class DockerOracle implements Required<IOracleConfig> {
  chain: "aptos" | "near" | "solana";
  network: "localnet" | "devnet" | "testnet" | "mainnet" | "mainnet-beta";
  rpcUrl: string;
  oracleKey: string;
  secretPath: string;
  // optionals
  // Required if chain is aptos or near, can revert to default RPCs
  taskRunnerSolanaRpc: string;
  // Optional, will use network to determine PID if not provided
  aptosPid: string;
  // Required if chain is near
  nearNamedAccount: string;

  ready = false;

  image: string;
  args: string[];
  allLogs: string[] = [];
  logs: string[] = [];
  dockerOracleProcess: ChildProcessByStdio<
    null,
    internal.Readable,
    internal.Readable
  >;
  isActive = true;
  timestamp: number = Date.now();

  onDataCallback: (data: any) => void;
  onErrorCallback: (error: Error) => void;
  onCloseCallback: (code: number) => void;

  constructor(
    readonly config: IOracleConfig,
    readonly nodeImage: string,
    readonly platform: "linux/arm64" | "linux/amd64" = "linux/amd64",
    readonly switchboardDirectory = path.join(process.cwd(), ".switchboard"),
    readonly silent = false
  ) {
    // set config
    this.chain = config.chain;
    this.network = config.network;
    this.rpcUrl = config.rpcUrl;
    this.oracleKey = config.oracleKey;
    this.secretPath = config.secretPath;
    this.taskRunnerSolanaRpc =
      config.taskRunnerSolanaRpc ?? "https://api.mainnet-beta.solana.com";
    this.aptosPid =
      config.aptosPid ?? this.chain !== "aptos"
        ? ""
        : this.network === "devnet"
        ? SWITCHBOARD_DEVNET_ADDRESS
        : this.network === "testnet"
        ? SWITCHBOARD_TESTNET_ADDRESS
        : "http://localhost:8080";
    this.nearNamedAccount = config.nearNamedAccount ?? "";
    if (this.chain === "near" && !this.nearNamedAccount) {
      throw new Error(
        `Need to provide 'nearNamedAccount' if chain is set to 'near'`
      );
    }

    // get image name
    const shaHash = crypto.createHash("sha256");
    shaHash.update(
      Buffer.from(
        [
          this.chain,
          this.network,
          this.rpcUrl,
          this.oracleKey,
          this.secretPath,
          this.taskRunnerSolanaRpc,
          this.aptosPid,
          this.platform,
          this.nodeImage,
        ].join(" ")
      )
    );
    const hash = shaHash.digest().toString("hex").slice(0, 16);

    this.image = `sbv2-${this.chain}-${this.network}-${this.nodeImage.replace(
      "dev-v2-",
      ""
    )}-${hash}`;

    // get image args
    this.args = this.getArgs();

    // set callbacks
    this.onDataCallback = (data) => {
      if (data.toString().includes("Using default performance monitoring")) {
        this.ready = true;
      }

      this.logs.push(data.toString());
      if (!this.silent) {
        console.log(`\u001B[34m${data.toString()}\u001B[0m`);
      }
    };

    this.onErrorCallback = (error) => {
      this.logs.push(error.toString());
      if (!this.silent) {
        console.error(`\u001B[31m${error.toString()}\u001B[0m`);
      }
    };

    this.onCloseCallback = (code) => {
      this.saveLogs(this.logs, this.nodeImage);
      if (!this.isActive) {
        return;
      }

      // if reboot from no RPC or if image already exists
      if (code === 0 || code === 125) {
        this.startOracle();
      } else if (!this.silent) {
        this.startOracle();
        console.error(chalk.red(`Docker image exited with code ${code}`));
      } else if (code !== 0 && code !== 1) {
        console.error(
          `\u001B[31mDocker image exited with code ${code}\u001B[0m`
        );
      }
    };
  }

  public static isDockerRunning() {
    // Check docker is running
    try {
      execSync(`docker ps`, { stdio: "pipe" });
    } catch (error) {
      throw new Error(`Is Docker running?`);
    }
  }

  start() {
    DockerOracle.isDockerRunning();

    // Kill all existing switchboard oracles
    try {
      execSync(
        `docker container stop $(docker ps | grep "switchboardlabs/node" | awk '{ print $1 }')`,
        { stdio: "pipe" }
      );
    } catch (error) {
      const errorString = `Failed to stop existing docker containers, ${error}`;
      if (
        !errorString.includes(
          `"docker container stop" requires at least 1 argument`
        )
      ) {
        console.error(errorString);
      }
    }

    // we always try to create the oracle first
    // if already exist, attach to it
    this.createOracle();
  }

  stop(exitCode = 1) {
    this.isActive = false;
    this.saveLogs(this.logs, this.nodeImage);
    try {
      execSync(`docker container stop ${this.image}`, { stdio: "pipe" });
      return true;
    } catch (error) {
      console.error(`Failed to stop docker oracle, ${error}`);
      return false;
    }
  }

  private getArgs(): string[] {
    if (this.chain === "aptos") {
      return [
        "run",
        `--network=host`,
        `--name ${this.image}`,
        `--platform=${this.platform}`,
        `-e CHAIN=aptos`,
        `-e ORACLE_KEY=${this.oracleKey}`,
        `-e APTOS_RPC_URL=${this.rpcUrl}`,
        `-e APTOS_PID=${this.aptosPid}`,
        `-e TASK_RUNNER_SOLANA_RPC=${this.taskRunnerSolanaRpc}`,
        `-e VERBOSE=1`,
        `-e APTOS_FS_PAYER_SECRET_PATH=/home/node/payer_secrets.json`,
        `--mount type=bind,source=${this.secretPath},target=/home/node/payer_secrets.json`,
        `--network host`,
        `switchboardlabs/node:${this.nodeImage}`,
      ].filter(Boolean);
    }

    if (this.chain === "near") {
      return [
        "run",
        `--network=host`,
        `--name ${this.image}`,
        `--platform=${this.platform}`,
        `-e CHAIN=near`,
        `-e ORACLE_KEY=${this.oracleKey}`,
        `-e NEAR_RPC_URL=${this.rpcUrl}`,
        `-e NEAR_NETWORK_ID=${this.network}`,
        `-e NEAR_NAMED_ACCOUNT=${this.nearNamedAccount}`,
        `-e TASK_RUNNER_SOLANA_RPC=${this.taskRunnerSolanaRpc}`,
        `-e VERBOSE=1`,
        `-e NEAR_FS_PAYER_SECRET_PATH=/home/node/payer_secrets.json`,
        `--mount type=bind,source=${this.secretPath},target=/home/node/payer_secrets.json`,
        `switchboardlabs/node:${this.nodeImage}`,
      ].filter(Boolean);
    }

    if (this.chain === "solana") {
      return [
        "run",
        `--network=host`,
        `--name ${this.image}`,
        `--platform=${this.platform}`,
        `-e CHAIN=solana`,
        `-e ORACLE_KEY=${this.oracleKey}`,
        `-e RPC_URL=${this.rpcUrl}`,
        `-e CLUSTER=${this.network}`,
        `-e TASK_RUNNER_SOLANA_RPC=${this.taskRunnerSolanaRpc}`,
        `-e VERBOSE=1`,
        `-e SOLANA_FS_PAYER_SECRET_PATH=/home/node/payer_secrets.json`,
        `--mount type=bind,source=${this.secretPath},target=/home/node/payer_secrets.json`,
        `switchboardlabs/node:${this.nodeImage}`,
      ].filter(Boolean);
    }
  }

  private createOracle() {
    this.ready = false;
    this.dockerOracleProcess = spawn("docker", this.args, {
      shell: true,
      env: process.env,
      stdio: this.silent ? undefined : ["inherit", "pipe", "pipe"],
    });

    this.dockerOracleProcess.stdout.on("data", this.onDataCallback);
    this.dockerOracleProcess.on("close", this.onCloseCallback);
    this.dockerOracleProcess.stderr.on("error", (error) => {
      if (
        !this.silent ||
        !error
          .toString()
          .includes(
            `The container name "/sbv2-${this.nodeImage}" is already in use by container`
          )
      ) {
        console.error(`\u001B[31m${error.toString()}\u001B[0m`);
        this.logs.push(error.toString());
      }
    });
  }

  private startOracle() {
    this.ready = false;
    this.dockerOracleProcess = spawn(
      "docker",
      ["start", "--attach", this.image],
      {
        shell: true,
        env: process.env,
        stdio: this.silent ? undefined : ["inherit", "pipe", "pipe"],
      }
    );
    this.dockerOracleProcess.stdout.on("data", this.onDataCallback);
    this.dockerOracleProcess.stderr.on("error", this.onErrorCallback);
    this.dockerOracleProcess.on("close", this.onCloseCallback);
  }

  saveLogs(logs: string[], nodeImage: string): string | null {
    if (!fs.existsSync(this.switchboardDirectory)) {
      fs.mkdirSync(this.switchboardDirectory);
    }

    const fileName = path.join(
      this.switchboardDirectory,
      `docker.${nodeImage}.${Math.floor(this.timestamp / 1000)}.log`
    );
    const filteredLogs = logs.filter((l) => Boolean);
    if (filteredLogs.length > 0) {
      fs.writeFileSync(fileName, filteredLogs.join(""));
      return fileName;
    }

    return undefined;
  }

  async awaitReadyOld(timeout = 60_000): Promise<void> {
    let n = Math.floor(timeout / 1000);

    const result = await promiseWithTimeout(
      timeout,
      new Promise(async (resolve: (value: boolean) => void, reject) => {
        while (n > 0) {
          if (this.ready) {
            n = 0;
            resolve(true);
          }
          n = n - 1;
          await sleep(1000);
        }
        reject(`Failed to await oracle readiness`);
      })
    );

    return;
  }

  async awaitReady(maxRetries: number = 60): Promise<void> {
    if (this.ready) {
      return;
    }

    let numRetries = maxRetries * 2;
    while (numRetries) {
      if (this.ready) {
        return;
      }
      --numRetries;
      await sleep(500);
    }

    throw new Error(
      `Failed to start Switchboard oracle in ${maxRetries} seconds`
    );
  }
}
