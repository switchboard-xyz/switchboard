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

/**
 * Determines whether a given chain is supported by the Switchboard network
 * @param _chain - the target chain
 */
export const isSupportedChain = (_chain: string): _chain is ChainType => {
  return SWITCHBOARD_CHAINS.includes(_chain as ChainType);
};

/**
 * Type assertion for whether the given chain is supported. Throws an error if Switchboard is not deployed on the target chain.
 * @param _chain - the target chain
 */
export const validateSupportedChain = (_chain: string): ChainType => {
  if (!isSupportedChain(_chain)) {
    const supportedChainsString = `'${SWITCHBOARD_CHAINS.slice(0, -1).join(
      "', '"
    )}', or '${SWITCHBOARD_CHAINS[SWITCHBOARD_CHAINS.length - 1]}'`;
    throw new Error(
      `chain ${_chain} is not supported, the currently supported chains are ${supportedChainsString}`
    );
  }
  return _chain;
};

/**
 * Return the chain config for a Switchboard implementation. Throws an error if Switchboard is not deployed on the target chain.
 * @param _chain - the target chain
 */
export const getSupportedChain = (_chain: string): ChainConfig => {
  const chain: ChainType = validateSupportedChain(_chain);
  return SWITCHBOARD_NETWORKS[chain];
};

/**
 * Type assertion for whether the given network is valid.
 * @param _network - the target network
 */
export const isSupportedNetwork = (
  _network: string
): _network is NetworkType => {
  return SUPPPORTED_NETWORKS.includes(_network as NetworkType);
};

/**
 * Return the network config for a Switchboard deployment. Throws an error if Switchboard is not deployed on the target chain.
 * @param _chain - the target chain
 * @param _network - the target network
 */
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

/**
 * Determines whether a given chain, network, and queue is managed by SwitchboardLabs
 * @param _chain - the target chain of the queue (Ex. solana or arbitrum)
 * @param _network - the target network of the queue (Ex. mainnet or testnet)
 * @param _queue - the address of the queue
 * @returns a boolean indicating whether the queue is operated by SwitchboardLabs
 */
export const isSwitchboardLabsQueue = (
  _chain: string,
  _network: string,
  _queue: string
): boolean => {
  try {
    const networkConfig = getSupportedNetwork(_chain, _network);
    for (const queue of networkConfig.queues) {
      if (queue.address === _queue) {
        return true;
      }
    }
  } catch {}
  return false;
};
