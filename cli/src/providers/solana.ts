import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { ChildProcess, execSync, spawn } from "child_process";
import os from "os";
import { promiseWithTimeout, sleep } from "@switchboard-xyz/common";

export interface ISolanaTestValidator {
  detached?: boolean;
  bindAddress?: string;
  port?: number;
  faucetPort?: number;
  quiet?: boolean;
  cloneUrl?: string;
  cloneJson?: Array<string>;
  cloneAccounts?: Array<string>;
  clonePrograms?: Array<string>;
  additionalArgs?: string;
}

export class SolanaTestValidator implements ISolanaTestValidator {
  localValidatorProcess?: ChildProcess = undefined;
  allLogs: string[] = [];
  logs: string[] = [];

  private isReady = false;

  detached: boolean;
  quiet: boolean;
  bindAddress: string;
  port: number;
  faucetPort: number;
  cloneUrl: string;
  cloneJson: Array<string>;
  cloneAccounts: Array<string>;
  clonePrograms: Array<string>;
  additionalArgs: string;

  readonly args: Array<string>;

  get pid() {
    return this.localValidatorProcess.pid;
  }

  constructor(config: ISolanaTestValidator) {
    this.detached = config.detached ?? true;
    this.quiet = config.quiet;
    this.bindAddress = config.bindAddress ?? "0.0.0.0";
    this.port = config.port ?? 8899;
    this.faucetPort = config.faucetPort ?? 9900;

    this.cloneUrl = config.cloneUrl ?? clusterApiUrl("devnet");
    this.cloneJson = config.cloneJson ?? [];
    this.cloneAccounts = config.cloneAccounts ?? [];
    this.clonePrograms = config.clonePrograms ?? [];
    this.additionalArgs = this.additionalArgs;

    this.args = [
      this.quiet ? "-q" : "",
      "-r",
      "--ledger .anchor/test-ledger",
      `--bind-address ${this.bindAddress}`,
      `--rpc-port ${this.port}`,
      `--faucet-port ${this.faucetPort}`,
      this.cloneJson.length > 0
        ? this.cloneJson.map((json) => `--account ${json}`).join(" ")
        : "",
      this.cloneAccounts.length > 0 || this.clonePrograms.length > 0
        ? `--url ${this.cloneUrl}`
        : "",
      this.cloneAccounts.length > 0
        ? this.cloneAccounts.map((pubkey) => `--clone ${pubkey}`).join(" ")
        : "",
      this.clonePrograms.length > 0
        ? this.clonePrograms
            .map((pubkey) => `--bpf-program ${pubkey}`)
            .join(" ")
        : "",
      this.additionalArgs,
    ].filter(Boolean);
  }

  kill() {
    try {
      if (os.platform() === "win32") {
        execSync(
          `netstat -ano | findstr :${this.port} | awk {'print $5'} | xargs -I {} taskkill /F /PID {} || exit 0`,
          {
            stdio: ["pipe", "pipe", "ignore"],
          }
        );
        execSync(
          `netstat -ano | findstr :${this.faucetPort} | awk {'print $5'} | xargs -I {} taskkill /F /PID {} || exit 0`,
          {
            stdio: ["pipe", "pipe", "ignore"],
          }
        );
      } else {
        execSync(`lsof -t -i :${this.port} | xargs kill -9 || exit 0`, {
          env: process.env,
          stdio: ["pipe", "pipe", "ignore"],
        });
        execSync(`lsof -t -i :${this.faucetPort} | xargs kill -9 || exit 0`, {
          env: process.env,
          stdio: ["pipe", "pipe", "ignore"],
        });
      }
    } catch {}
  }

  static init(config: ISolanaTestValidator): SolanaTestValidator {
    const validator = new SolanaTestValidator(config);
    validator.start();
    return validator;
  }

  start() {
    this.kill();
    this.localValidatorProcess = spawn("solana-test-validator", this.args, {
      shell: true,
      cwd: process.cwd(),
      env: process.env,
      stdio: "inherit",
      detached: this.detached,
    });
  }

  stop(exitCode = 0): boolean {
    if (this.localValidatorProcess) {
      const killed = this.localValidatorProcess.kill(exitCode);
      if (killed) {
        this.localValidatorProcess = undefined;
        this.isReady = false;
        return true;
      }
    }

    return false;
  }

  async awaitReady(rpcUrl = "http://localhost:8899", maxRetries: number = 30) {
    if (this.isReady) {
      return;
    }

    const localnetConnection = new Connection(
      rpcUrl === "http://host.docker.internal:8899"
        ? "http://localhost:8899"
        : rpcUrl
    );

    let numRetries = maxRetries * 2;
    while (numRetries) {
      try {
        const blockHeight = await localnetConnection.getBlockHeight();
        if (blockHeight > 0) {
          return true;
        }
      } catch {}
      --numRetries;
      await sleep(500);
    }

    throw new Error(
      `Failed to start Solana validator in ${maxRetries} seconds`
    );
  }
}
