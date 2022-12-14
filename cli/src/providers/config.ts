import fs from "fs";
import path from "path";
import chalk from "chalk";

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
  | "aptos-devnet-default-account"
  | "aptos-testnet-rpc"
  | "aptos-testnet-default-account"
  | "aptos-mainnet-rpc"
  | "aptos-mainnet-default-account";

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
  testnet?: IAptosNetworkConfig;
  mainnet?: IAptosNetworkConfig;
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

export const DEFAULT_SOLANA_DEVNET_RPC = "https://api.devnet.solana.com";
export const DEFAULT_SOLANA_MAINNET_RPC = "https://api.mainnet-beta.solana.com";

export const DEFAULT_NEAR_BETANET_RPC = "https://rpc.betanet.near.org";
export const DEFAULT_NEAR_TESTNET_RPC = "https://rpc.testnet.near.org";
export const DEFAULT_NEAR_MAINNET_RPC = "https://rpc.mainnet.near.org";

export const DEFAULT_APTOS_DEVNET_RPC =
  "https://fullnode.devnet.aptoslabs.com/v1";
export const DEFAULT_APTOS_TESTNET_RPC =
  "https://fullnode.testnet.aptoslabs.com/v1";
export const DEFAULT_APTOS_MAINNET_RPC =
  "https://fullnode.mainnet.aptoslabs.com/v1";

export const LATEST_CONFIG_VERSION = 1;

export class ConfigProvider {
  public configDirectory: string;
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

  aptosTestnetRpc = DEFAULT_APTOS_TESTNET_RPC;
  aptosTestnetDefaultAccount?: string;

  aptosMainnetRpc = DEFAULT_APTOS_MAINNET_RPC;
  aptosMainnetDefaultAccount?: string;

  constructor(configDirectory: string) {
    this.configDirectory = configDirectory;
    const configPath = path.join(configDirectory, "config.json");

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
    if (config.solana?.devnet?.rpcUrl) {
      this.solanaDevnetRpc = config.solana.devnet.rpcUrl;
    }

    if (config.solana?.devnet?.defaultAccount) {
      this.solanaDevnetDefaultAccount = config.solana.devnet.defaultAccount;
    }

    if (config.solana?.mainnet?.rpcUrl) {
      this.solanaMainnetRpc = config.solana.mainnet.rpcUrl;
    }

    if (config.solana?.mainnet?.defaultAccount) {
      this.solanaMainnetDefaultAccount = config.solana.mainnet.defaultAccount;
    }

    // near
    if (config.near?.betanet?.rpcUrl) {
      this.nearBetanetRpc = config.near.betanet.rpcUrl;
    }

    if (config.near?.betanet?.defaultAccount) {
      this.nearBetanetDefaultAccount = config.near.betanet.defaultAccount;
    }

    if (config.near?.testnet?.rpcUrl) {
      this.nearTestnetRpc = config.near.testnet.rpcUrl;
    }

    if (config.near?.testnet?.defaultAccount) {
      this.nearTestnetDefaultAccount = config.near.testnet.defaultAccount;
    }

    if (config.near?.mainnet?.rpcUrl) {
      this.nearMainnetRpc = config.near.mainnet.rpcUrl;
    }

    if (config.near?.mainnet?.defaultAccount) {
      this.nearMainnetDefaultAccount = config.near.mainnet.defaultAccount;
    }

    // aptos
    if (config.aptos?.devnet?.rpcUrl) {
      this.aptosDevnetRpc = config.aptos.devnet.rpcUrl;
    }

    if (config.aptos?.devnet?.defaultAccount) {
      this.aptosDevnetDefaultAccount = config.aptos.devnet.defaultAccount;
    }

    if (config.aptos?.testnet?.rpcUrl) {
      this.aptosTestnetRpc = config.aptos.testnet.rpcUrl;
    }

    if (config.aptos?.testnet?.defaultAccount) {
      this.aptosTestnetDefaultAccount = config.aptos.testnet.defaultAccount;
    }

    if (config.aptos?.mainnet?.rpcUrl) {
      this.aptosMainnetRpc = config.aptos.mainnet.rpcUrl;
    }

    if (config.aptos?.mainnet?.defaultAccount) {
      this.aptosMainnetDefaultAccount = config.aptos.mainnet.defaultAccount;
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

  get aptosTestnet(): IAptosNetworkConfig {
    return {
      rpcUrl: this.aptosTestnetRpc,
      defaultAccount: this.aptosTestnetDefaultAccount,
    };
  }

  get aptosMainnet(): IAptosNetworkConfig {
    return {
      rpcUrl: this.aptosMainnetRpc,
      defaultAccount: this.aptosMainnetDefaultAccount,
    };
  }

  get aptos(): IAptosConfig {
    return {
      devnet: this.aptosDevnet,
      testnet: this.aptosTestnet,
      mainnet: this.aptosMainnet,
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
    return path.join(this.configDirectory, "config.json");
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
          case "mainnet-beta":
          case "mainnet":
            return this.solanaMainnetRpc;

          case "localnet":
            return "http://localhost:8899";
        }

        break;
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

        break;
      }

      case "aptos": {
        switch (network) {
          case "devnet":
            return this.aptosDevnetRpc;
          case "testnet":
            return this.aptosTestnetRpc;
          case "mainnet":
            return this.aptosMainnetRpc;
        }

        break;
      }
    }

    return "";
  }

  getDefaultAccount(
    chain: "solana" | "near" | "aptos",
    network: string
  ): string | undefined {
    switch (chain) {
      case "solana": {
        switch (network) {
          case "devnet":
            return this.solanaDevnetDefaultAccount;
          case "mainnet":
            return this.solanaMainnetDefaultAccount;
        }

        break;
      }

      case "near": {
        switch (network) {
          case "betanet":
            return this.nearBetanetDefaultAccount;
          case "testnet":
            return this.nearTestnetDefaultAccount;
          case "mainnet":
            return this.nearMainnetDefaultAccount;
        }

        break;
      }

      case "aptos": {
        switch (network) {
          case "devnet":
            return this.aptosDevnetDefaultAccount;
          case "testnet":
            return this.aptosTestnetDefaultAccount;
          case "mainnet":
            return this.aptosMainnetDefaultAccount;
        }

        break;
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

        break;
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

        break;
      }

      case "aptos": {
        switch (network) {
          case "devnet":
            this.aptosDevnetRpc = value || DEFAULT_APTOS_DEVNET_RPC;
            this.save();
            return;
          case "testnet":
            this.aptosTestnetRpc = value || DEFAULT_APTOS_TESTNET_RPC;
            this.save();
            return;
          case "mainnet":
            this.aptosMainnetRpc = value || DEFAULT_APTOS_MAINNET_RPC;
            this.save();
            return;
        }

        break;
      }
    }

    throw new Error(
      `Failed to set config parameter for chain ${chain} and network ${network}`
    );
  }

  setDefaultAccount(
    chain: "solana" | "near" | "aptos",
    network: string,
    value: string | undefined
  ) {
    switch (chain) {
      case "solana": {
        switch (network) {
          case "devnet":
            this.solanaDevnetDefaultAccount = value || "";
            this.save();
            return;
          case "mainnet":
            this.solanaMainnetDefaultAccount = value || "";
            this.save();
            return;
        }

        break;
      }

      case "near": {
        switch (network) {
          case "betanet":
            this.nearBetanetDefaultAccount = value || "";
            this.save();
            return;
          case "testnet":
            this.nearTestnetDefaultAccount = value || "";
            this.save();
            return;
          case "mainnet":
            this.nearMainnetDefaultAccount = value || "";
            this.save();
            return;
        }

        break;
      }

      case "aptos": {
        switch (network) {
          case "devnet":
            this.aptosDevnetDefaultAccount = value || "";
            this.save();
            return;
          case "testnet":
            this.aptosTestnetDefaultAccount = value || "";
            this.save();
            return;
          case "mainnet":
            this.aptosMainnetDefaultAccount = value || "";
            this.save();
            return;
        }

        break;
      }
    }

    throw new Error(
      `Failed to set config parameter for chain ${chain} and network ${network}`
    );
  }
}
