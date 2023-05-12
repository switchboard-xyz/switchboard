type JsonType =
  | string
  | boolean
  | number
  | Array<string | boolean | number | undefined>
  | Record<string, string | boolean | number | undefined>;

export type ISwitchboardQueueConfig = {
  [key: string]: JsonType | Record<string, JsonType> | undefined;
  name: string;
  address: string;
  authority?: string;
  crankAddress: string;
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
  programId: string;
  authority: string;
  metadata: INetworkMetadata;
  queues: Array<ISwitchboardQueueConfig>;
};

export type IChainConfig = Record<string, IChainNetworkConfig>;
