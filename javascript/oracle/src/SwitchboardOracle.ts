import fs from "fs";
import fetch from "node-fetch";
import { IOracleConfig, Chain, Network, ReleaseChannel } from "./types";

type ParsedRelease = {
  imageName: string;
  releaseChannel: "mainnet" | "testnet" | undefined;
  name: string;
  tag_name: string;
  published: number;
};

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

  public static async getNodeImage(
    releaseChannel: ReleaseChannel
  ): Promise<string> {
    const response = await fetch(
      `https://api.github.com/repos/switchboard-xyz/sbv2-oracle-operators/releases`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const releases: Array<ParsedRelease> = (await response.json()).map(
      (release: {
        tag_name: string;
        name: string;
        html_url: string;
        published_at: string;
      }) => {
        const imageName = release.tag_name.startsWith("oracle/")
          ? release.tag_name.slice(7)
          : release.tag_name;
        const releaseChannel = imageName.startsWith("mainnet-")
          ? "mainnet"
          : imageName.startsWith("testnet-")
          ? "testnet"
          : undefined;
        const myRelease: ParsedRelease = {
          imageName,
          releaseChannel,
          name: release.name,
          tag_name: release.tag_name,
          published: Date.parse(release.published_at),
        };
        return myRelease;
      }
    );

    if (releases.length === 0) {
      throw new Error(`Failed to fetch any releases`);
    }

    const sortedReleases = releases.sort((a, b) => a.published - b.published);

    if (releaseChannel === "latest") {
      return sortedReleases[0].imageName;
    }

    let highestMajor = 0;
    let highestMinor = 0;
    let highestPatch = 0;

    for (const release of sortedReleases) {
      if (release.releaseChannel !== releaseChannel) {
        continue;
      }

      const version = release.imageName.split("-", 2)[1];
      const [major, minor, patch] = version.split(".", 3).map(Number);

      if (major > highestMajor) {
        highestMajor = major;
        highestMinor = 0;
        highestPatch = 0;
      }

      if (minor > highestMinor) {
        highestMinor = minor;
        highestPatch = patch;
      }

      if (patch > highestPatch) {
        highestPatch = patch;
      }
    }

    if (highestMajor === 0 && highestMinor === 0 && highestPatch === 0) {
      throw new Error(
        `Failed to find the latest release for channel ${releaseChannel}`
      );
    }

    const nodeImage = `${releaseChannel}-${highestMajor}.${highestMinor}.${highestPatch}`;
    return nodeImage;
  }
}
