import type { IChainConfig, IEvmNetworkConfig } from './types.js';

export const SWITCHBOARD_OPTIMISM_MAINNET_CONFIG: IEvmNetworkConfig = {
  chain: 'optimism',
  chainId: 10,
  networkName: 'Mainnet',
  address: '',
  sbPushOracle: '',
  metadata: {
    defaultRpcUrl: 'https://mainnet.optimism.io',
    defaultExplorer: 'https://explorer.optimism.io',
  },
  queues: [],
  attestationQueues: [
    {
      name: 'SwitchboardLabs Attestation Queue',
      address: '',
    },
  ],
};

export const SWITCHBOARD_OPTIMISM_TESTNET_CONFIG: IEvmNetworkConfig = {
  chain: 'optimism',
  chainId: 420,
  networkName: 'Goerli',
  address: '0x7d05d5745499D8cc68FA4Eb5dbd45df53E9c3f1f',
  sbPushOracle: '0xc9d804F1e904cA0912D46E0C02600f75563A4988',
  metadata: {
    defaultRpcUrl: 'https://goerli.optimism.io',
    defaultExplorer: 'https://goerli-explorer.optimism.io',
  },
  queues: [],
  attestationQueues: [
    {
      name: 'SwitchboardLabs Attestation Queue',
      address: '0x455c706AF00af9fCFDA04746Be34c3051aAAD1d4',
    },
  ],
};

/**
@defaultValue the default Optimism configuration

```json
{
  "mainnet": {
    "chain": "optimism",
    "chainId": 10,
    "networkName": "Mainnet",
    "address": "",
    "sbPushOracle": "",
    "metadata": {
      "defaultRpcUrl": "https://mainnet.optimism.io",
      "defaultExplorer": "https://explorer.optimism.io"
    },
    "queues": [],
    "attestationQueues": [
      {
        "name": "SwitchboardLabs Attestation Queue",
        "address": ""
      }
    ]
  },
  "testnet": {
    "chain": "optimism",
    "chainId": 420,
    "networkName": "Goerli",
    "address": "0x7d05d5745499D8cc68FA4Eb5dbd45df53E9c3f1f",
    "sbPushOracle": "0xc9d804F1e904cA0912D46E0C02600f75563A4988",
    "metadata": {
      "defaultRpcUrl": "https://goerli.optimism.io",
      "defaultExplorer": "https://goerli-explorer.optimism.io"
    },
    "queues": [],
    "attestationQueues": [
      {
        "name": "SwitchboardLabs Attestation Queue",
        "address": "0x455c706AF00af9fCFDA04746Be34c3051aAAD1d4"
      }
    ]
  }
}
```
 */
export const SWITCHBOARD_OPTIMISM_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_OPTIMISM_MAINNET_CONFIG,
  testnet: SWITCHBOARD_OPTIMISM_TESTNET_CONFIG,
};
