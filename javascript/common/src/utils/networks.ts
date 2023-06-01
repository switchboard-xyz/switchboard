import SWITCHBOARD_NETWORKS from '../networks/index.js';
import {
  ChainConfig,
  ChainType,
  IChainConfig,
  IChainNetworkConfig,
  ISolanaConfig,
  NetworkType,
  SUPPPORTED_NETWORKS,
  SWITCHBOARD_CHAINS,
} from '../networks/types.js';

export const isSupportedChain = (chain: string): chain is ChainType => {
  return SWITCHBOARD_CHAINS.includes(chain as ChainType);
};

export const validateSupportedChain = (chain: string): ChainType => {
  if (!isSupportedChain(chain)) {
    const supportedChainsString = `'${SWITCHBOARD_CHAINS.slice(0, -1).join(
      "', '"
    )}', or '${SWITCHBOARD_CHAINS[SWITCHBOARD_CHAINS.length - 1]}'`;
    throw new Error(
      `chain ${chain} is not supported, the currently supported chains are ${supportedChainsString}`
    );
  }
  return chain;
};

export const getSupportedChain = (_chain: string): ChainConfig => {
  const chain: ChainType = validateSupportedChain(_chain);
  return SWITCHBOARD_NETWORKS[chain];
};

export const isSupportedNetwork = (network: string): network is NetworkType => {
  return SUPPPORTED_NETWORKS.includes(network as NetworkType);
};

export const getSupportedNetwork = (
  _chain: string,
  _network: string
): IChainNetworkConfig => {
  const chain: ChainType = validateSupportedChain(_chain);
  const chainConfig: ChainConfig = SWITCHBOARD_NETWORKS[chain];

  if (chain === 'solana') {
    if (_network !== 'mainnet' && _network !== 'devnet') {
      throw new Error(
        `UnsupportedNetwork: network needs to be 'mainnet' or 'devnet'`
      );
    }
    return (chainConfig as ISolanaConfig)[_network];
  }

  if (_network !== 'mainnet' && _network !== 'testnet') {
    throw new Error(
      `UnsupportedNetwork: network needs to be 'mainnet' or 'testnet'`
    );
  }

  return (chainConfig as IChainConfig)[_network];
};
