import { IChainConfig, IChainNetworkConfig } from './types.js';

export const SWITCHBOARD_ARBITRUM_MAINNET_CONFIG: IChainNetworkConfig = {
  networkName: 'Mainnet',
  programId: '0xd54579539E1334E856b983745DA26BEc3efB3C4D',
  attestationService: '0x316fBe540C719970E6427ccD8590d7E0a2814C5D',
  authority: '0x127f24013CaADF770F4b514c86344dD4f38d80c2',
  metadata: {
    defaultRpcUrl: 'https://arb1.arbitrum.io/rpc',
    defaultExplorer: 'https://arbiscan.io',
    chainId: 42161,
  },
  queues: [
    {
      name: 'Permissionless Queue',
      address: '0x74f44B7e43319931ff9ae8CFCDCba09dc7F89f95',
      attestationQueue: '0xf0A09d8D44942AE0aD9Ac35B07D8b3e5Af693EE6',
      authority: '0x127f24013CaADF770F4b514c86344dD4f38d80c2',
      permissioned: false,
    },
  ],
};

export const SWITCHBOARD_ARBITRUM_TESTNET_CONFIG: IChainNetworkConfig = {
  networkName: 'Goerli',
  programId: '0x2802f459D1515257b73fAaa6dD9512E7cDE04592',
  attestationService: '0xFC8e90254194B038F2e233129202f096a8507e80',
  authority: '0xB76E3A368dA2B6E6E5F5F686046C7cb0a3e1Bd1A',
  metadata: {
    defaultRpcUrl: 'https://goerli-rollup.arbitrum.io/rpc',
    defaultExplorer: 'https://goerli.arbiscan.io',
    chainId: 421613,
  },
  queues: [
    {
      name: 'Permissionless Queue',
      address: '0x3E1A13b2d6E0665A32d8638eA216A16953E8a9aF',
      attestationQueue: '0x5ca20bE5d53A033Bcb5834d2CC897d2E905712eD',
      authority: '0xB76E3A368dA2B6E6E5F5F686046C7cb0a3e1Bd1A',
      permissioned: false,
    },
  ],
};

/**
@defaultValue the default Arbitrum configuration

```json
{
  "mainnet": {
    "networkName": "Mainnet",
    "programId": "0xd54579539E1334E856b983745DA26BEc3efB3C4D",
    "attestationService": "0x316fBe540C719970E6427ccD8590d7E0a2814C5D",
    "authority": "0x127f24013CaADF770F4b514c86344dD4f38d80c2",
    "metadata": {
      "defaultRpcUrl": "https://arb1.arbitrum.io/rpc",
      "defaultExplorer": "https://arbiscan.io",
      "chainId": 42161
    },
    "queues": [
      {
        "name": "Permissionless Queue",
        "address": "0x74f44B7e43319931ff9ae8CFCDCba09dc7F89f95",
        "attestationQueue": "0xf0A09d8D44942AE0aD9Ac35B07D8b3e5Af693EE6",
        "authority": "0x127f24013CaADF770F4b514c86344dD4f38d80c2",
        "permissioned": false
      }
    ]
  },
  "testnet": {
    "networkName": "Goerli",
    "programId": "0x2802f459D1515257b73fAaa6dD9512E7cDE04592",
    "attestationService": "0xFC8e90254194B038F2e233129202f096a8507e80",
    "authority": "0xB76E3A368dA2B6E6E5F5F686046C7cb0a3e1Bd1A",
    "metadata": {
      "defaultRpcUrl": "https://goerli-rollup.arbitrum.io/rpc",
      "defaultExplorer": "https://goerli.arbiscan.io",
      "chainId": 421613
    },
    "queues": [
      {
        "name": "Permissionless Queue",
        "address": "0x3E1A13b2d6E0665A32d8638eA216A16953E8a9aF",
        "attestationQueue": "0x5ca20bE5d53A033Bcb5834d2CC897d2E905712eD",
        "authority": "0xB76E3A368dA2B6E6E5F5F686046C7cb0a3e1Bd1A",
        "permissioned": false
      }
    ]
  }
}
```
 */
export const SWITCHBOARD_ARBITRUM_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_ARBITRUM_MAINNET_CONFIG,
  testnet: SWITCHBOARD_ARBITRUM_TESTNET_CONFIG,
};
