import fs from "fs";
import path from "path";
import chalk from "chalk";

export type SolanaConfigParameter = "solana-devnet-rpc" | "solana-mainnet-rpc";

export type NearConfigParameter =
  | "near-testnet-rpc"
  | "near-mainnet-rpc"
  | "near-betanet-rpc";

export type AptosConfigParameter = "aptos-devnet-rpc";

export type ConfigParameter =
  | SolanaConfigParameter
  | NearConfigParameter
  | AptosConfigParameter;

export interface ISolanaClusterConfig {
  rpcUrl: string;
}

export interface ISolanaConfig {
  devnet?: ISolanaClusterConfig;
  mainnet?: ISolanaClusterConfig;
}

export interface INearClusterConfig {
  rpcUrl: string;
}

export interface INearConfig {
  testnet?: INearClusterConfig;
  mainnet?: INearClusterConfig;
  betanet?: INearClusterConfig;
  local?: INearClusterConfig;
}
export interface IAptosNetworkConfig {
  rpcUrl: string;
}

export interface IAptosConfig {
  devnet?: IAptosNetworkConfig;
}

export interface INetworkConfigs {
  solana: ISolanaConfig;
  near: INearConfig;
  aptos: IAptosConfig;
}

export const DEFAULT_CONFIG: INetworkConfigs = {
  solana: {
    devnet: {
      rpcUrl: "https://devnet.genesysgo.net",
    },
    mainnet: {
      rpcUrl: "https://ssc-dao.genesysgo.net/",
    },
  },
  near: {
    testnet: {
      rpcUrl: "https://rpc.testnet.near.org",
    },
    mainnet: {
      rpcUrl: "https://rpc.mainnet.near.org",
    },
    betanet: {
      rpcUrl: "https://rpc.betanet.near.org",
    },
  },
  aptos: {
    devnet: {
      rpcUrl: "https://fullnode.devnet.aptoslabs.com/v1",
    },
  },
};

export interface IConfig {
  version: number;
  data: INetworkConfigs;
}

export const DEFAULT_CONFIG_V1: IConfig = {
  version: 1,
  data: DEFAULT_CONFIG,
};

export const LATEST_CONFIG_VERSION: number = 1;

export class ConfigProvider {
  public configDir: string;
  private _config: INetworkConfigs;

  constructor(configDir: string) {
    this.configDir = configDir;
    const configPath = path.join(configDir, "config.json");

    let config: INetworkConfigs = DEFAULT_CONFIG;
    try {
      if (fs.existsSync(configPath)) {
        const userConfig: IConfig = JSON.parse(
          fs.readFileSync(configPath, "utf-8")
        );
        if ("data" in userConfig) {
          config = userConfig.data;
        }
      }
    } catch (error) {}
    ConfigProvider.write(config, configPath);
    this._config = config;
  }

  get config(): INetworkConfigs {
    return this._config;
  }

  get configPath(): string {
    return path.join(this.configDir, "config.json");
  }

  get solana(): ISolanaConfig {
    return this._config.solana;
  }

  private static write(config: INetworkConfigs, configPath: string) {
    fs.writeFileSync(
      configPath,
      JSON.stringify(
        {
          version: LATEST_CONFIG_VERSION,
          data: config,
        },
        undefined,
        2
      )
    );
  }

  save(config = this.config) {
    ConfigProvider.write(config, this.configPath);

    console.info(chalk.green("Saved Config: ") + this.configPath);
  }

  private toConfigParameter(
    chain: "solana" | "near" | "aptos",
    network: string,
    param: string
  ): ConfigParameter {
    return `${chain}-${network}-${param}` as ConfigParameter; // TODO: Validation
  }

  getRpcUrl(chain: "solana" | "near" | "aptos", network: string) {
    return this.get(this.toConfigParameter(chain, network, "rpc"));
  }

  get(parameter: ConfigParameter) {
    switch (parameter) {
      case "solana-devnet-rpc": {
        return (
          this.config.solana.devnet.rpcUrl ||
          DEFAULT_CONFIG.solana.devnet.rpcUrl
        );
      }
      case "solana-mainnet-rpc": {
        return (
          this.config.solana.mainnet.rpcUrl ||
          DEFAULT_CONFIG.solana.mainnet.rpcUrl
        );
      }
      case "near-testnet-rpc": {
        return (
          this.config.near.testnet.rpcUrl || DEFAULT_CONFIG.near.testnet.rpcUrl
        );
      }
      case "near-mainnet-rpc": {
        return (
          this.config.near.mainnet.rpcUrl || DEFAULT_CONFIG.near.mainnet.rpcUrl
        );
      }
      case "near-betanet-rpc": {
        return (
          this.config.near.betanet.rpcUrl || DEFAULT_CONFIG.near.betanet.rpcUrl
        );
      }
      case "aptos-devnet-rpc": {
        return (
          this.config.aptos.devnet.rpcUrl || DEFAULT_CONFIG.aptos.devnet.rpcUrl
        );
      }
    }
  }

  set(parameter: ConfigParameter, value?: string) {
    switch (parameter) {
      case "solana-devnet-rpc": {
        const newConfig = {
          ...this.config,
          solana: {
            ...(this.config.near || DEFAULT_CONFIG.solana),
            devnet: {
              ...(this.config.solana?.devnet || DEFAULT_CONFIG.solana.devnet),
              rpcUrl: value || DEFAULT_CONFIG.solana.devnet.rpcUrl,
            },
          },
        };
        this.save(newConfig);
        break;
      }

      case "solana-mainnet-rpc": {
        const newConfig = {
          ...this.config,
          solana: {
            ...(this.config.near || DEFAULT_CONFIG.solana),
            mainnet: {
              ...(this.config.solana?.mainnet || DEFAULT_CONFIG.solana.mainnet),
              rpcUrl: value || DEFAULT_CONFIG.solana.mainnet.rpcUrl,
            },
          },
        };
        this.save(newConfig);
        break;
      }

      case "near-testnet-rpc": {
        const newConfig = {
          ...this.config,
          near: {
            ...(this.config.near || DEFAULT_CONFIG.near),
            testnet: {
              ...(this.config.near?.testnet || DEFAULT_CONFIG.near.testnet),
              rpcUrl: value || DEFAULT_CONFIG.near.testnet.rpcUrl,
            },
          },
        };
        this.save(newConfig);
        break;
      }

      case "near-mainnet-rpc": {
        const newConfig = {
          ...this.config,
          near: {
            ...(this.config.near || DEFAULT_CONFIG.near),
            mainnet: {
              ...(this.config.near?.mainnet || DEFAULT_CONFIG.near.mainnet),
              rpcUrl: value || DEFAULT_CONFIG.near.mainnet.rpcUrl,
            },
          },
        };
        this.save(newConfig);
        break;
      }

      case "near-betanet-rpc": {
        const newConfig = {
          ...this.config,
          near: {
            ...(this.config.near || DEFAULT_CONFIG.near),
            betanet: {
              ...(this.config.near?.betanet || DEFAULT_CONFIG.near.betanet),
              rpcUrl: value || DEFAULT_CONFIG.near.betanet.rpcUrl,
            },
          },
        };
        this.save(newConfig);
        break;
      }

      case "aptos-devnet-rpc": {
        const newConfig = {
          ...this.config,
          aptos: {
            ...(this.config.aptos || DEFAULT_CONFIG.aptos),
            devnet: {
              ...(this.config.aptos?.devnet || DEFAULT_CONFIG.aptos.devnet),
              rpcUrl: value || DEFAULT_CONFIG.aptos.devnet.rpcUrl,
            },
          },
        };
        this.save(newConfig);
        break;
      }

      default: {
        console.warn(`CLI config parameter ${parameter} not implemented yet`);
      }
    }
  }
}
