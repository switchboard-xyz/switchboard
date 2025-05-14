import type { IStarknetConfig, IStarknetNetworkConfig } from './types.js';

export const SWITCHBOARD_STARKNET_GOERLI_CONFIG: IStarknetNetworkConfig = {
  chain: 'starknet',
  networkName: 'Goerli',
  address: '0x026183fd8df673e4b2a007eec9d70bc38eb8a0df960dd5b0c57a9250ae2e63ac',
  metadata: {
    defaultRpcUrl: 'https://alpha4.starknet.io',
    defaultExplorer: 'https://testnet.starkscan.co/',
  },
  chainId: '0x534e5f474f45524c49',
  queues: [],
  attestationQueues: [{ name: 'Permissionless', address: '0x1' }],
};

export const SWITCHBOARD_STARKNET_SEPOLIA_CONFIG: IStarknetNetworkConfig = {
  chain: 'starknet',
  networkName: 'Sepolia',
  address: '',
  metadata: {
    defaultRpcUrl: '',
    defaultExplorer: 'https://sepolia.starkscan.co/',
  },
  chainId: '',
  queues: [],
  attestationQueues: [{ name: 'Permissionless', address: '' }],
};

export const SWITCHBOARD_STARKNET_MAINNET_CONFIG: IStarknetNetworkConfig = {
  chain: 'starknet',
  networkName: 'Mainnet',
  address: '0x0728d32b3d508dbe5989824dd0edb1e03b8a319d561b9ec6507dff245a95c52f',
  metadata: {
    defaultRpcUrl: 'https://alpha-mainnet.starknet.io',
    defaultExplorer: 'https://starkscan.co/',
  },
  chainId: '0x534e5f4d41494e',
  queues: [],
  attestationQueues: [{ name: 'Permissionless', address: '0x1' }],
};

export const SWITCHBOARD_STARKNET_CONFIG: IStarknetConfig = {
  goerli: SWITCHBOARD_STARKNET_GOERLI_CONFIG,
  sepolia: SWITCHBOARD_STARKNET_SEPOLIA_CONFIG,
  mainnet: SWITCHBOARD_STARKNET_MAINNET_CONFIG,
};
