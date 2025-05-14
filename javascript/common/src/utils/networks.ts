import SWITCHBOARD_NETWORKS from '../networks/index.js';
import { isSupportedChain } from '../networks/index.js';
import type {
  ChainConfig,
  ChainType,
  IChainConfig,
  IChainNetworkConfig,
  ISolanaConfig,
  IStarknetConfig,
} from '../networks/types.js';
import { SWITCHBOARD_CHAINS } from '../networks/types.js';

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
        "UnsupportedNetwork: network needs to be 'mainnet' or 'devnet'"
      );
    }
    return (chainConfig as ISolanaConfig)[_network];
  }

  if (chain === 'starknet') {
    const supported = new Set(['goerli', 'sepolia', 'mainnet']);
    if (supported.has(_network)) {
      const starknetNetwork = _network as keyof IStarknetConfig;
      return (chainConfig as IStarknetConfig)[starknetNetwork];
    }
    throw new Error(`UnsupportedNetwork: '${_network}'`);
  }

  if (
    _network !== 'mainnet' &&
    _network !== 'testnet' &&
    _network !== 'sepolia'
  ) {
    throw new Error(
      "UnsupportedNetwork: network needs to be 'mainnet', 'sepolia', or 'testnet'"
    );
  }

  return (chainConfig as IChainConfig)[_network]!;
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
      if (queue.address === _queue) return true;
    }
  } catch {} // eslint-disable-line no-empty
  return false;
};
