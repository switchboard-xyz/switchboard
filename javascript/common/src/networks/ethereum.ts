import type { IChainConfig, IEvmNetworkConfig } from './types.js';

export const SWITCHBOARD_ETHEREUM_MAINNET_CONFIG: IEvmNetworkConfig = {
  chain: 'ethereum',
  chainId: 1,
  networkName: 'Mainnet',
  address: '',
  sbPushOracle: '',
  metadata: {
    defaultRpcUrl: 'https://ethereum.publicnode.com',
    defaultExplorer: 'https://etherscan.io',
  },
  queues: [],
  attestationQueues: [
    {
      name: 'SwitchboardLabs Attestation Queue',
      address: '',
    },
  ],
};

export const SWITCHBOARD_ETHEREUM_TESTNET_CONFIG: IEvmNetworkConfig = {
  chain: 'ethereum',
  chainId: 5,
  networkName: 'Goerli',
  address: '',
  sbPushOracle: '',
  metadata: {
    defaultRpcUrl: 'https://ethereum-goerli.publicnode.com',
    defaultExplorer: 'https://goerli.etherscan.io',
  },
  queues: [],
  attestationQueues: [
    {
      name: 'SwitchboardLabs Attestation Queue',
      address: '',
    },
  ],
};

/**
@defaultValue the default Aurora configuration

```json
{
  "mainnet": {
    "chain": "ethereum",
    "chainId": 1,
    "networkName": "Mainnet",
    "address": "",
    "sbPushOracle": "",
    "metadata": {
      "defaultRpcUrl": "https://ethereum.publicnode.com",
      "defaultExplorer": "https://etherscan.io"
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
    "chain": "ethereum",
    "chainId": 5,
    "networkName": "Goerli",
    "address": "",
    "sbPushOracle": "",
    "metadata": {
      "defaultRpcUrl": "https://ethereum-goerli.publicnode.com",
      "defaultExplorer": "https://goerli.etherscan.io"
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
export const SWITCHBOARD_ETHEREUM_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_ETHEREUM_MAINNET_CONFIG,
  testnet: SWITCHBOARD_ETHEREUM_TESTNET_CONFIG,
};
