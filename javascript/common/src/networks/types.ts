export const SUPPPORTED_NETWORKS = ['mainnet', 'testnet', 'devnet'] as const;
export type NetworkType = (typeof SUPPPORTED_NETWORKS)[number];

/** The current chains Switchboard is currently deployed on. */
export const SWITCHBOARD_CHAINS = [
  'arbitrum',
  'aptos',
  'coredao',
  'near',
  'solana',
  'sui',
] as const;

/** The current chains Switchboard is currently deployed on. */
export type ChainType = (typeof SWITCHBOARD_CHAINS)[number];

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

export type ISwitchboardQueueConfig = {
  [key: string]: JsonType | Record<string, JsonType> | undefined;
  name: string;
  address: string;
  attestationQueue?: string;
  authority?: string;
  crankAddress?: string;
  permissioned: boolean;
  settings?: Record<string, JsonType>;
};

export type INetworkMetadata = {
  [key: string]: JsonType | undefined;
  defaultRpcUrl: string;
};

export type IChainNetworkConfig = {
  [key: string]:
    | JsonType
    | Array<ISwitchboardQueueConfig>
    | INetworkMetadata
    | undefined;
  networkName: string;
  programId: string;
  attestationService?: string;
  authority: string;
  metadata: INetworkMetadata;
  queues: Array<ISwitchboardQueueConfig>;
};

export type IChainConfig = {
  mainnet: IChainNetworkConfig;
  testnet: IChainNetworkConfig;
};

export type ISolanaConfig = Rename<IChainConfig, 'testnet', 'devnet'>;

export type ChainConfig = IChainConfig | ISolanaConfig;

export type ChainConfigs = {
  aptos: IChainConfig;
  arbitrum: IChainConfig;
  coredao: IChainConfig;
  near: IChainConfig;
  solana: ISolanaConfig;
  sui: IChainConfig;
};

export type SwitchboardNetworks = {
  [K in ChainType]: ChainConfigs[K];
};
