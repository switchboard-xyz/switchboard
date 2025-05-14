import type { IChainConfig, IEvmNetworkConfig } from './types.js';

export const SWITCHBOARD_AURORA_MAINNET_CONFIG: IEvmNetworkConfig = {
  chain: 'aurora',
  chainId: 1313161554,
  networkName: 'Mainnet',
  address: '0x6E7dabEF37A8Da80b111344dB41b223F24eAA903',
  sbPushOracle: '0x49a19751978F36c133D9cE26e61fab9795b5826B',
  metadata: {
    defaultRpcUrl: 'https://mainnet.aurora.dev',
    defaultExplorer: 'https://aurorascan.dev',
  },
  queues: [],
  attestationQueues: [
    {
      name: 'SwitchboardLabs Attestation Queue',
      address: '',
    },
  ],
};

export const SWITCHBOARD_AURORA_TESTNET_CONFIG: IEvmNetworkConfig = {
  chain: 'aurora',
  chainId: 1313161555,
  networkName: 'Testnet',
  address: '0x7d05d5745499D8cc68FA4Eb5dbd45df53E9c3f1f',
  sbPushOracle: '0xc9d804F1e904cA0912D46E0C02600f75563A4988',
  metadata: {
    defaultRpcUrl: 'https://testnet.aurora.dev',
    defaultExplorer: 'https://testnet.aurorascan.dev',
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
@defaultValue the default Aurora configuration

```json
{
  "mainnet": {
    "chain": "aurora",
    "chainId": 1313161554,
    "networkName": "Mainnet",
    "address": "0x6E7dabEF37A8Da80b111344dB41b223F24eAA903",
    "sbPushOracle": "0x49a19751978F36c133D9cE26e61fab9795b5826B",
    "metadata": {
      "defaultRpcUrl": "https://mainnet.aurora.dev",
      "defaultExplorer": "https://aurorascan.dev"
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
    "chain": "aurora",
    "chainId": 1313161555,
    "networkName": "Testnet",
    "address": "0x7d05d5745499D8cc68FA4Eb5dbd45df53E9c3f1f",
    "sbPushOracle": "0xc9d804F1e904cA0912D46E0C02600f75563A4988",
    "metadata": {
      "defaultRpcUrl": "https://testnet.aurora.dev",
      "defaultExplorer": "https://testnet.aurorascan.dev"
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
export const SWITCHBOARD_AURORA_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_AURORA_MAINNET_CONFIG,
  testnet: SWITCHBOARD_AURORA_TESTNET_CONFIG,
};
