type JsonType =
  | string
  | boolean
  | number
  | Array<string | boolean | number | undefined>
  | Record<string, string | boolean | number | undefined>;

// Utility type to remove a property from a type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Utility type to rename a property in a type
type Rename<T, K extends keyof T, N extends string> = Omit<T, K> & {
  [P in N]: T[K];
};

///////////////////////////////////////////////////////////////////////////////
/////////////// Supported Chains///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/** The current EVM chains Switchboard is currently deployed on. */
export const SWITCHBOARD_EVM_CHAINS = [
  'arbitrum',
  'base',
  'coredao',
  'ethereum',
  'optimism',
  'aurora',
] as const;
/** The current EVM chains Switchboard is currently deployed on. */
export type EvmChainType = (typeof SWITCHBOARD_EVM_CHAINS)[number];

/** The current chains Switchboard is currently deployed on. */
export const SWITCHBOARD_CHAINS = [
  'aptos',
  'near',
  'solana',
  'starknet',
  'sui',
  ...SWITCHBOARD_EVM_CHAINS,
] as const;
/** The current chains Switchboard is currently deployed on. */
export type ChainType = (typeof SWITCHBOARD_CHAINS)[number];

///////////////////////////////////////////////////////////////////////////////
/////////////// Supported Chain IDs ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
export const SUPPORTED_EVM_CHAIN_IDS = [
  // arbitrum
  42161, 421613, 421614,
  // base
  8453, 84531,
  // core
  1116, 1114,
  // ethereum
  1, 5,
  // optimism
  10, 420,
  // aurora
  1313161554, 1313161555,
] as const;
export type EvmChainIds = (typeof SUPPORTED_EVM_CHAIN_IDS)[number];
/** Type assertion for whether a given EVM chainID is supported on the Switchboard Network. */

///////////////////////////////////////////////////////////////////////////////
/////////////// Queue Configs /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
type IBaseQueueConfig = {
  name: string;
  address: string;
  settings?: Record<string, JsonType>;
};

type ISwitchboardAttestationQueueConfig = IBaseQueueConfig;

type ISwitchboardQueueConfig = IBaseQueueConfig & {
  crankAddress?: string;
  permissioned: boolean;
};

///////////////////////////////////////////////////////////////////////////////
/////////////// Supported Networks ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
const EVM_SUPPPORTED_NETWORKS = ['mainnet', 'testnet'] as const;
export type EvmNetworkType = (typeof EVM_SUPPPORTED_NETWORKS)[number];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SUPPPORTED_NETWORKS = [...EVM_SUPPPORTED_NETWORKS, 'devnet'] as const;
export type NetworkType = (typeof SUPPPORTED_NETWORKS)[number];

type INetworkMetadata = {
  [key: string]: JsonType | undefined;
  defaultRpcUrl: string;
};

type IBaseNetworkConfig = {
  chain: ChainType;
  networkName: string;
  address: string;
  metadata: INetworkMetadata;
};

export type IEvmNetworkConfig = IBaseNetworkConfig & {
  sbPushOracle: string;
  chainId: number;
  queues: Array<ISwitchboardQueueConfig>;
  attestationQueues: Array<ISwitchboardAttestationQueueConfig>;
};

export type IStarknetNetworkConfig = IBaseNetworkConfig & {
  chainId: string;
  queues: Array<ISwitchboardQueueConfig>;
  attestationQueues: Array<ISwitchboardAttestationQueueConfig>;
};

export type IChainNetworkConfig = IBaseNetworkConfig & {
  attestationService?: string;
  queues: Array<ISwitchboardQueueConfig>;
  attestationQueues: Array<ISwitchboardAttestationQueueConfig>;
};

export type ISolanaNetworkConfig = IChainNetworkConfig & {
  attestationService: string;
  idlAddress: string;
  attestationIdlAddress: string;
};

export type IMoveNetworkConfig = IChainNetworkConfig & {
  switchboardStdLib: string;
};

export type INetworkConfig =
  | IEvmNetworkConfig
  | IChainNetworkConfig
  | ISolanaNetworkConfig
  | IStarknetNetworkConfig
  | IMoveNetworkConfig;

///////////////////////////////////////////////////////////////////////////////
/////////////// Chain Configs /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
export type IChainConfig = {
  mainnet: IChainNetworkConfig;
  testnet: IChainNetworkConfig;
  sepolia?: IChainNetworkConfig;
};

export type ISolanaConfig = Rename<IChainConfig, 'testnet', 'devnet'>;

export type IStarknetConfig = {
  mainnet: IChainNetworkConfig;
  sepolia: IChainNetworkConfig;
  goerli: IChainNetworkConfig;
};

export type ChainConfig = IChainConfig | ISolanaConfig | IStarknetConfig;

export type EvmChainConfigs = {
  arbitrum: IChainConfig;
  base: IChainConfig;
  coredao: IChainConfig;
  ethereum: IChainConfig;
  optimism: IChainConfig;
  aurora: IChainConfig;
};

export type ChainConfigs = EvmChainConfigs & {
  aptos: IChainConfig;
  near: IChainConfig;
  solana: ISolanaConfig;
  starknet: IStarknetConfig;
  sui: IChainConfig;
};

export type SwitchboardEvmNetworks = {
  [K in EvmChainType]: EvmChainConfigs[K];
};

export type SwitchboardNetworks = SwitchboardEvmNetworks & {
  [K in ChainType]: ChainConfigs[K];
};
