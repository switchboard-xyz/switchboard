import { ISwitchboardOracle } from './SwitchboardOracle';
import {
  Chain,
  IOracleConfig,
  Network,
  OracleTagVersion,
  ReleaseChannel,
  ReleaseChannelVersion,
} from './types';
import {
  downloadReleaseArtifact,
  getNodeImage,
  normalizeFsPath,
  sleep,
} from './utils';

import { ChildProcess, spawn } from 'child_process';
import detect from 'detect-port';
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

/**
 * NodeOracle class downloads the latest version of the Switchboard oracle for a given {@link ReleaseChannel}.
 * The oracle is a NodeJS bundle that can be run in CI.
 *
 * Usage example:
 *
 * ```ts
 * import { NodeOracle } from '@switchboard-xyz/oracle';
 *
 * const oracle = await NodeOracle.fromReleaseChannel({
 *     chain: "solana",
 *     releaseChannel: "testnet",
 *     network: "localnet",
 *     rpcUrl: switchboardProgram.connection.rpcEndpoint,
 *     oracleKey: oracleAccount.publicKey.toBase58(),
 *     secretPath: switchboard.walletPath,
 *     silent: false,
 *     envVariables: {
 *       VERBOSE: "1",
 *       DEBUG: "1",
 *       DISABLE_NONCE_QUEUE: "1",
 *       DISABLE_METRICS: "1",
 *     },
 *   });
 * ```
 */
export class NodeOracle extends ISwitchboardOracle {
  readonly imageTag: string;

  readonly switchboardDirectory: string;
  readonly silent: boolean;

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

  constructor(readonly config: IOracleConfig & OracleTagVersion) {
    super();
    // set config
    this.chain = config.chain;
    this.network = config.network;
    this.imageTag = config.imageTag;
    this.silent = config.silent ?? false;

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
    this.envVariables['FS_PAYER_SECRET_PATH'] = this.secretPath;

    // log config
    this.switchboardDirectory =
      config.switchboardDirectory ?? path.join(process.cwd(), '.switchboard');
    if (!fs.existsSync(this.switchboardDirectory)) {
      fs.mkdirSync(this.switchboardDirectory, { recursive: true });
    }
    this.logFile = path.join(
      this.switchboardDirectory,
      `node.${this.imageTag}.${Math.floor(this.timestamp / 1000)}.log`
    );

    // callback config
    this.onDataCallback = data => {
      this.addLog(data.toString());
      if (!this.silent) {
        console.log(`\u001B[34m${data.toString()}\u001B[0m`);
      }
    };
    this.onErrorCallback = error => {
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
        console.log(`\u001B[34m${'Restarting oracle ...'}\u001B[0m`);
        this.start();
      } else if (!code || (code !== 0 && code !== 1)) {
        console.error(`\u001B[31mNode exited with code ${code}\u001B[0m`);
      }
    };
  }

  public static async fromReleaseChannel(
    config: IOracleConfig & ReleaseChannelVersion
  ): Promise<NodeOracle> {
    try {
      const nodeImage = await getNodeImage(config.releaseChannel);
      return new NodeOracle({
        ...config,
        imageTag: nodeImage,
      });
    } catch (error) {
      throw new Error(
        `Failed to find oracle version for release channel ${config.releaseChannel}, ${error}`
      );
    }
  }

  async fetchImage(): Promise<string> {
    return await downloadReleaseArtifact(this.imageTag);
  }

  getArgs(): string[] {
    return Object.entries(this.envVariables).map(
      ([key, value]) => `${key.toUpperCase()}=${value}`
    );
  }

  async start() {
    const imageLocation = await this.fetchImage();
    // check if health check port is in use
    let healthcheckPort = Number.parseInt(
      this.envVariables.HEALTH_CHECK_PORT ?? '8080'
    );
    healthcheckPort = await detect(healthcheckPort)
      .then(_port => {
        if (healthcheckPort === _port) {
          return healthcheckPort;
        } else {
          return _port;
        }
      })
      .catch(err => {
        return healthcheckPort;
      });
    this.envVariables['HEALTH_CHECK_PORT'] = healthcheckPort.toString();

    // check if metrics port is in use
    let metricsPort = Number.parseInt(
      this.envVariables.METRICS_EXPORTER_PORT ?? '9090'
    );
    metricsPort = await detect(metricsPort)
      .then(_port => {
        if (metricsPort === _port) {
          return metricsPort;
        } else {
          return _port;
        }
      })
      .catch(err => {
        return metricsPort;
      });
    this.envVariables['METRICS_EXPORTER_PORT'] = metricsPort.toString();

    if (this.oracleProcess) {
      this.oracleProcess.removeAllListeners();
      this.oracleProcess.kill('SIGKILL');
    }

    this.oracleProcess = spawn(
      `${this.getArgs().join(' ')} node ${imageLocation}`,
      {
        shell: true,
        env: process.env,
        stdio: this.silent ? undefined : ['inherit', 'pipe', 'pipe'],
      }
    );
    this.oracleProcess!.stdout!.on('data', this.onDataCallback);
    this.oracleProcess!.stderr!.on('data', this.onDataCallback);
    this.oracleProcess!.on('error', this.onErrorCallback);
    this.oracleProcess.on('close', this.onCloseCallback);
    this.oracleProcess.on('exit', this.onCloseCallback);

    const killProcessCallback = () => {
      if (this.isActive) {
        this.isActive = false;
        this.saveLogs();
      }

      if (this.oracleProcess !== undefined) {
        this.oracleProcess.removeAllListeners();
        const wasKilled = this.oracleProcess.kill();
        if (wasKilled) {
          this.oracleProcess = undefined;
        }
      }
    };
    this.oracleProcess.on('exit', killProcessCallback);
    process.on('exit', killProcessCallback);
  }

  /** Stop the oracle sub process
   *
   * @returns {boolean} returns a boolean dictating whether the oracle was successfully stopped
   */
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

  /** Force kill the oracle sub process */
  kill(exitCode: number | NodeJS.Signals = 'SIGINT') {
    if (this.oracleProcess) {
      this.oracleProcess.removeAllListeners();
      this.oracleProcess.kill(exitCode);
      this.oracleProcess = undefined;
    }
  }

  /**
   * Start the oracle process and await for the oracle to start heartbeating on-chain.
   *
   * @param {number} timeout - the number of seconds to await for the oracle to start successfully heartbeating
   *
   * @throws if timeout is exceeded and oracle heartbeat was never detected
   */
  async awaitReady(timeout: number = 60): Promise<void> {
    const healthcheckPort = Number.parseInt(
      this.envVariables['HEALTH_CHECK_PORT'] ?? '8080'
    );

    let myError: any;
    let numRetries = timeout * 2;
    while (numRetries) {
      try {
        const response = await fetch(
          `http://0.0.0.0:${healthcheckPort}/healthz`,
          {
            method: 'GET',
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
        myError ? ': ' + myError : undefined
      }`
    );
  }
}
