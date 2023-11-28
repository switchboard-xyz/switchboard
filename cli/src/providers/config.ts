import { chalkString } from "../utils";

import type { ChainConfig } from "@switchboard-xyz/common";
import {
  getSupportedChain,
  getSupportedNetwork,
  networks,
} from "@switchboard-xyz/common";
import chalk from "chalk";
import fs from "fs";
import path from "path";

export const LATEST_CONFIG_VERSION = 2;

export interface INetworkConfig {
  rpcUrl: string;
  defaultAccount?: string;
}

export interface IChainConfig {
  [network: string]: INetworkConfig;
}

export interface IConfig {
  [chain: string]: IChainConfig;
}

export type VersionedConfig = {
  version: number;
  config: IConfig;
};

export class ConfigProvider {
  private config: IConfig;

  private defaults: IConfig = {
    aptos: {
      mainnet: { rpcUrl: networks.aptos.mainnet.metadata.defaultRpcUrl },
      testnet: { rpcUrl: networks.aptos.testnet.metadata.defaultRpcUrl },
    },
    coredao: {
      mainnet: { rpcUrl: networks.coredao.mainnet.metadata.defaultRpcUrl },
      testnet: { rpcUrl: networks.coredao.testnet.metadata.defaultRpcUrl },
    },
    solana: {
      mainnet: { rpcUrl: networks.solana.mainnet.metadata.defaultRpcUrl },
      devnet: { rpcUrl: networks.solana.devnet.metadata.defaultRpcUrl },
    },
    sui: {
      mainnet: { rpcUrl: networks.sui.mainnet.metadata.defaultRpcUrl },
      testnet: { rpcUrl: networks.sui.testnet.metadata.defaultRpcUrl },
    },
  };

  getDefaultConfig(chain: string, network: string): INetworkConfig | undefined {
    if (!(chain in this.defaults)) {
      return;
    }

    const chainConfig = this.defaults[chain];
    if (!(network in chainConfig)) {
      return;
    }

    return chainConfig[network];
  }

  constructor(private configDirectory: string) {
    const configPath = path.join(configDirectory, "config.json");

    if (fs.existsSync(configPath)) {
      const savedConfig: VersionedConfig = JSON.parse(
        fs.readFileSync(configPath, "utf-8")
      );
      this.config = { ...savedConfig.config };
    } else {
      this.config = {};
    }
  }

  getConfig(chain: string, network: string): INetworkConfig | undefined {
    return this.config[chain]?.[network];
  }

  getRpcUrl(chain: string, network: string): string {
    const configRpcUrl = this.getConfig(chain, network)?.rpcUrl;
    if (configRpcUrl) {
      return configRpcUrl;
    }

    const defaultConfig = getSupportedNetwork(chain, network);
    const defaultRpcUrl = defaultConfig.metadata?.defaultRpcUrl;
    if (defaultRpcUrl) {
      return defaultRpcUrl;
    }

    return "";
  }

  getDefaultAccount(chain: string, network: string): string | undefined {
    return this.getConfig(chain, network)?.defaultAccount;
  }

  getChain(chain: string): ChainConfig {
    return getSupportedChain(chain);
  }

  getProgramId(chain: string, network: string): string {
    return getSupportedNetwork(chain, network).address;
  }

  getAttestationProgramId(chain: string, network: string): string {
    return getSupportedNetwork(chain, network).attestationService!;
  }

  setRpcUrl(chain: string, network: string, value: string | undefined) {
    if (!this.config[chain]) {
      this.config[chain] = {};
    }

    if (!this.config[chain][network]) {
      this.config[chain][network] = { rpcUrl: "" };
    }

    this.config[chain][network].rpcUrl =
      value || this.defaults[chain]?.[network]?.rpcUrl || "";

    this.save();
  }

  setDefaultAccount(chain: string, network: string, value: string | undefined) {
    if (!this.config[chain]) {
      this.config[chain] = {};
    }

    if (!this.config[chain][network]) {
      this.config[chain][network] = { rpcUrl: "", defaultAccount: "" };
    }

    this.config[chain][network].defaultAccount =
      value || this.defaults[chain]?.[network]?.defaultAccount || undefined;

    this.save();
  }

  get configPath(): string {
    return path.join(this.configDirectory, "config.json");
  }

  save() {
    fs.writeFileSync(
      this.configPath,
      JSON.stringify(this.toJSON(), undefined, 2)
    );
    console.info(chalk.green("Saved Config: ") + this.configPath);
  }

  toJSON(): VersionedConfig {
    return {
      version: LATEST_CONFIG_VERSION,
      config: this.config,
    };
  }

  toPrettyString(PADDING = 24): string {
    const outputLines: string[] = [];

    for (const chain of Object.keys(this.config)) {
      const chainConfig = this.config[chain];

      for (const network of Object.keys(this.config[chain])) {
        // write the header
        // outputLines.push(
        chalk.underline(
          chalk.blue(
            `## ${toTitleCase(chain)} ${toTitleCase(network)}`.padEnd(PADDING)
          )
        );
        // );
        // write the values
        const networkConfig = chainConfig[network];
        const defaultConfig = this.getDefaultConfig(chain, network);

        const rpcUrl =
          networkConfig.rpcUrl ?? defaultConfig?.rpcUrl ?? undefined;
        if (rpcUrl) {
          outputLines.push(
            chalkString(
              [chain, network, "rpc"].join("-").padEnd(PADDING, " "),
              rpcUrl
            )
          );
        }

        const defaultAccount =
          networkConfig.defaultAccount ??
          defaultConfig?.defaultAccount ??
          undefined;
        if (defaultAccount) {
          outputLines.push(
            chalkString(
              [chain, network, "default-account"]
                .join("-")
                .padEnd(PADDING, " "),
              defaultAccount
            )
          );
        }
      }
    }

    return outputLines.join("\n");
  }
}

const toTitleCase = (input: string): string => {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
