import fs from "fs";
import path from "path";
import chalk from "chalk";
import { string } from "@oclif/core/lib/parser";

export type SolanaConfigParameter =
  | "solana-devnet-rpc"
  | "solana-mainnet-rpc"
  | "solana-devnet-default-account"
  | "solana-mainnet-default-account";

export type NearConfigParameter =
  | "near-testnet-rpc"
  | "near-mainnet-rpc"
  | "near-betanet-rpc"
  | "near-testnet-default-account"
  | "near-mainnet-default-account"
  | "near-betanet-default-account";

export type AptosConfigParameter =
  | "aptos-devnet-rpc"
  | "aptos-devnet-default-account";

export type ConfigParameter =
  | SolanaConfigParameter
  | NearConfigParameter
  | AptosConfigParameter;

export interface ISolanaClusterConfig {
  rpcUrl: string;
  defaultAccount?: string;
}

export interface ISolanaConfig {
  devnet?: ISolanaClusterConfig;
  mainnet?: ISolanaClusterConfig;
}

export interface INearClusterConfig {
  rpcUrl: string;
  defaultAccount?: string;
}

export interface INearConfig {
  testnet?: INearClusterConfig;
  mainnet?: INearClusterConfig;
  betanet?: INearClusterConfig;
  local?: INearClusterConfig;
}
export interface IAptosNetworkConfig {
  rpcUrl: string;
  defaultAccount?: string;
}

export interface IAptosConfig {
  devnet?: IAptosNetworkConfig;
}

export interface IChainConfigs {
  solana: ISolanaConfig;
  near: INearConfig;
  aptos: IAptosConfig;
}

export interface IConfig {
  version: number;
  config: IChainConfigs;
}

export const DEFAULT_SOLANA_DEVNET_RPC = "https://devnet.genesysgo.net";
export const DEFAULT_SOLANA_MAINNET_RPC = "https://ssc-dao.genesysgo.net/";

export const DEFAULT_NEAR_BETANET_RPC = "https://rpc.betanet.near.org";
export const DEFAULT_NEAR_TESTNET_RPC = "https://rpc.testnet.near.org";
export const DEFAULT_NEAR_MAINNET_RPC = "https://rpc.mainnet.near.org";

export const DEFAULT_APTOS_DEVNET_RPC =
  "https://fullnode.devnet.aptoslabs.com/v1";

export const LATEST_CONFIG_VERSION: number = 1;

export class ConfigProvider {
  public configDir: string;
  // private _config: INetworkConfigs;

  // solana
  solanaDevnetRpc = DEFAULT_SOLANA_DEVNET_RPC;
  solanaDevnetDefaultAccount?: string;

  solanaMainnetRpc = DEFAULT_SOLANA_MAINNET_RPC;
  solanaMainnetDefaultAccount?: string;

  // near
  nearBetanetRpc = DEFAULT_NEAR_BETANET_RPC;
  nearBetanetDefaultAccount?: string;

  nearTestnetRpc = DEFAULT_NEAR_TESTNET_RPC;
  nearTestnetDefaultAccount?: string;

  nearMainnetRpc = DEFAULT_NEAR_MAINNET_RPC;
  nearMainnetDefaultAccount?: string;

  // aptos
  aptosDevnetRpc = DEFAULT_APTOS_DEVNET_RPC;
  aptosDevnetDefaultAccount?: string;

  constructor(configDir: string) {
    this.configDir = configDir;
    const configPath = path.join(configDir, "config.json");

    if (
      !fs.existsSync(configPath) ||
      !("config" in JSON.parse(fs.readFileSync(configPath, "utf-8")))
    ) {
      // write default here
      return;
    }
    const config: IChainConfigs = JSON.parse(
      fs.readFileSync(configPath, "utf-8")
    ).config;

    // solana
    if (config.solana.devnet.rpcUrl) {
      this.solanaDevnetRpc = config.solana.devnet.rpcUrl;
    }
    if (config.solana.devnet.defaultAccount) {
      this.solanaDevnetDefaultAccount = config.solana.devnet.defaultAccount;
    }
    if (config.solana.mainnet.rpcUrl) {
      this.solanaMainnetRpc = config.solana.mainnet.rpcUrl;
    }
    if (config.solana.mainnet.defaultAccount) {
      this.solanaMainnetDefaultAccount = config.solana.mainnet.defaultAccount;
    }

    // near
    if (config.near.betanet.rpcUrl) {
      this.nearBetanetRpc = config.near.betanet.rpcUrl;
    }
    if (config.near.betanet.defaultAccount) {
      this.nearBetanetDefaultAccount = config.near.betanet.defaultAccount;
    }
    if (config.near.testnet.rpcUrl) {
      this.nearTestnetRpc = config.near.testnet.rpcUrl;
    }
    if (config.near.testnet.defaultAccount) {
      this.nearTestnetDefaultAccount = config.near.testnet.defaultAccount;
    }
    if (config.near.mainnet.rpcUrl) {
      this.nearMainnetRpc = config.near.mainnet.rpcUrl;
    }
    if (config.near.mainnet.defaultAccount) {
      this.nearMainnetDefaultAccount = config.near.mainnet.defaultAccount;
    }

    // aptos
    if (config.aptos.devnet.rpcUrl) {
      this.aptosDevnetRpc = config.aptos.devnet.rpcUrl;
    }
    if (config.aptos.devnet.defaultAccount) {
      this.aptosDevnetDefaultAccount = config.aptos.devnet.defaultAccount;
    }
    // ConfigProvider.write(config, configPath);
  }

  get solanaDevnet(): ISolanaClusterConfig {
    return {
      rpcUrl: this.solanaDevnetRpc,
      defaultAccount: this.solanaDevnetDefaultAccount,
    };
  }

  get solanaMainnet(): ISolanaClusterConfig {
    return {
      rpcUrl: this.solanaMainnetRpc,
      defaultAccount: this.solanaMainnetDefaultAccount,
    };
  }

  get solana(): ISolanaConfig {
    return {
      devnet: this.solanaDevnet,
      mainnet: this.solanaMainnet,
    };
  }

  get nearBetanet(): INearClusterConfig {
    return {
      rpcUrl: this.nearBetanetRpc,
      defaultAccount: this.nearBetanetDefaultAccount,
    };
  }

  get nearTestnet(): INearClusterConfig {
    return {
      rpcUrl: this.nearTestnetRpc,
      defaultAccount: this.nearTestnetDefaultAccount,
    };
  }

  get nearMainnet(): INearClusterConfig {
    return {
      rpcUrl: this.nearMainnetRpc,
      defaultAccount: this.nearMainnetDefaultAccount,
    };
  }

  get near(): INearConfig {
    return {
      betanet: this.nearBetanet,
      testnet: this.nearTestnet,
      mainnet: this.nearMainnet,
    };
  }

  get aptosDevnet(): IAptosNetworkConfig {
    return {
      rpcUrl: this.aptosDevnetRpc,
      defaultAccount: this.aptosDevnetDefaultAccount,
    };
  }

  get aptos(): IAptosConfig {
    return {
      devnet: this.aptosDevnet,
    };
  }

  toJSON(): IConfig {
    return {
      version: LATEST_CONFIG_VERSION,
      config: {
        solana: this.solana,
        near: this.near,
        aptos: this.aptos,
      },
    };
  }

  get configPath(): string {
    return path.join(this.configDir, "config.json");
  }

  write() {
    fs.writeFileSync(
      this.configPath,
      JSON.stringify(this.toJSON(), undefined, 2)
    );
  }

  save() {
    this.write();
    console.info(chalk.green("Saved Config: ") + this.configPath);
  }

  getRpcUrl(chain: "solana" | "near" | "aptos", network: string): string {
    switch (chain) {
      case "solana": {
        switch (network) {
          case "devnet":
            return this.solanaDevnetRpc;
          case "mainnet":
            return this.solanaMainnetRpc;
        }
      }
      case "near": {
        switch (network) {
          case "betanet":
            return this.nearBetanetRpc;
          case "testnet":
            return this.nearTestnetRpc;
          case "mainnet":
            return this.nearMainnetRpc;
        }
      }
      case "aptos": {
        switch (network) {
          case "devnet":
            return this.aptosDevnetRpc;
        }
      }
    }

    return "";
  }

  setRpcUrl(
    chain: "solana" | "near" | "aptos",
    network: string,
    value: string | undefined
  ) {
    switch (chain) {
      case "solana": {
        switch (network) {
          case "devnet":
            this.solanaDevnetRpc = value || DEFAULT_SOLANA_DEVNET_RPC;
            this.save();
            return;
          case "mainnet":
            this.solanaMainnetRpc = value || DEFAULT_SOLANA_MAINNET_RPC;
            this.save();
            return;
        }
      }
      case "near": {
        switch (network) {
          case "betanet":
            this.nearBetanetRpc = value || DEFAULT_NEAR_BETANET_RPC;
            this.save();
            return;
          case "testnet":
            this.nearTestnetRpc = value || DEFAULT_NEAR_TESTNET_RPC;
            this.save();
            return;
          case "mainnet":
            this.nearMainnetRpc = value || DEFAULT_NEAR_MAINNET_RPC;
            this.save();
            return;
        }
      }
      case "aptos": {
        switch (network) {
          case "devnet":
            this.aptosDevnetRpc = value || DEFAULT_APTOS_DEVNET_RPC;
            this.save();
            return;
        }
      }
    }

    throw new Error(
      `Failed to set config parameter for chain ${chain} and network ${network}`
    );
  }
}
