export type Chain =
  | "aptos"
  | "coredao"
  | "near"
  | "solana"
  | "starknet"
  | "sui";
export type Network = "localnet" | "devnet" | "testnet" | "mainnet" | "mainnet";

export type ReleaseChannel = "testnet" | "mainnet" | "latest";

export type ReleaseChannelVersion = {
  // Release channel for the oracle version to run
  releaseChannel: ReleaseChannel;
};
export type OracleTagVersion = {
  imageTag: string;
};
export type Version = ReleaseChannelVersion | OracleTagVersion;

export type IOracleConfig = {
  // The output directory to save logs
  switchboardDirectory?: string;
  // Whether to suppress logging to the console
  silent?: boolean;

  // The chain to run an oracle on
  chain: Chain;
  network: Network;
  rpcUrl: string;
  oracleKey: string;
  secretPath: string;
  // task runner config
  taskRunnerSolanaRpc?: string;
  // extra env vars
  envVariables?: Record<string, string>;
};

export interface IDockerConfig {
  arch?: "linux/arm64" | "linux/amd64";
  // extra flags to pass to docker run
  dockerRunFlags?: Array<string>;
}

export type IDockerOracleConfig = IOracleConfig & IDockerConfig;
