import type { IChainConfig, IEvmNetworkConfig } from "./types.js";

export const SWITCHBOARD_ARBITRUM_MAINNET_CONFIG: IEvmNetworkConfig = {
  chain: "arbitrum",
  chainId: 42161,
  networkName: "Mainnet",
  address: "0xd54579539E1334E856b983745DA26BEc3efB3C4D",
  sbPushReceiver: "",
  metadata: {
    defaultRpcUrl: "https://arb1.arbitrum.io/rpc",
    defaultExplorer: "https://arbiscan.io",
  },
  queues: [],
  attestationQueues: [],
};

export const SWITCHBOARD_ARBITRUM_TESTNET_CONFIG: IEvmNetworkConfig = {
  chain: "arbitrum",
  chainId: 421613,
  networkName: "Goerli",
  address: "0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
  sbPushReceiver: "",
  metadata: {
    defaultRpcUrl: "https://goerli-rollup.arbitrum.io/rpc",
    defaultExplorer: "https://goerli.arbiscan.io",
  },
  queues: [],
  attestationQueues: [],
};

/**
@defaultValue the default Arbitrum configuration

```json
{
  "mainnet": {
    "chain": "arbitrum",
    "chainId": 42161,
    "networkName": "Mainnet",
    "address": "0xd54579539E1334E856b983745DA26BEc3efB3C4D",
    "metadata": {
      "defaultRpcUrl": "https://arb1.arbitrum.io/rpc",
      "defaultExplorer": "https://arbiscan.io"
    },
    "queues": [],
    "attestationQueues": []
  },
  "testnet": {
    "chain": "arbitrum",
    "chainId": 421613,
    "networkName": "Goerli",
    "address": "0x2802f459D1515257b73fAaa6dD9512E7cDE04592",
    "metadata": {
      "defaultRpcUrl": "https://goerli-rollup.arbitrum.io/rpc",
      "defaultExplorer": "https://goerli.arbiscan.io"
    },
    "queues": [],
    "attestationQueues": []
  }
}
```
 */
export const SWITCHBOARD_ARBITRUM_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_ARBITRUM_MAINNET_CONFIG,
  testnet: SWITCHBOARD_ARBITRUM_TESTNET_CONFIG,
};
