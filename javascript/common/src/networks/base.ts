import type { IChainConfig, IEvmNetworkConfig } from './types.js';

export const SWITCHBOARD_BASE_MAINNET_CONFIG: IEvmNetworkConfig = {
  chain: 'base',
  chainId: 8453,
  networkName: 'Mainnet',
  address: '',
  sbPushOracle: '',
  metadata: {
    defaultRpcUrl: 'https://mainnet.base.org',
    defaultExplorer: 'https://basescan.org',
  },
  queues: [],
  attestationQueues: [
    {
      name: 'SwitchboardLabs Attestation Queue',
      address: '',
    },
  ],
};

export const SWITCHBOARD_BASE_TESTNET_CONFIG: IEvmNetworkConfig = {
  chain: 'base',
  chainId: 84531,
  networkName: 'Goerli',
  address: '0x9640b33Ef3CB1a8b1f943Fb20FB6ff70d5F4DE96',
  sbPushOracle: '0xC29aAabf235c1E71633fb7365E95772B97F425d7',
  metadata: {
    defaultRpcUrl: 'https://goerli.base.org',
    defaultExplorer: 'https://goerli.basescan.org',
  },
  queues: [],
  attestationQueues: [
    {
      name: 'SwitchboardLabs Attestation Queue',
      address: '0x80391284b2C81a2E11696EFb8825412c8D0d2a4d',
    },
  ],
};

/**
@defaultValue the default Base configuration

```json
{
  "mainnet": {
    "chain": "base",
    "chainId": 8453,
    "networkName": "Mainnet",
    "address": "",
    "sbPushOracle": "",
    "metadata": {
      "defaultRpcUrl": "",
      "defaultExplorer": "https://basescan.org"
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
    "chain": "base",
    "chainId": 84531,
    "networkName": "Goerli",
    "address": "",
    "sbPushOracle": "",
    "metadata": {
      "defaultRpcUrl": "",
      "defaultExplorer": ""
    },
    "queues": [],
    "attestationQueues": [
      {
        "name": "SwitchboardLabs Attestation Queue",
        "address": ""
      }
    ]
  }
}
```
 */
export const SWITCHBOARD_BASE_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_BASE_MAINNET_CONFIG,
  testnet: SWITCHBOARD_BASE_TESTNET_CONFIG,
};
