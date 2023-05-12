import { IChainConfig, IChainNetworkConfig } from './types.js';

export const SWITCHBOARD_COREDAO_MAINNET_CONFIG: IChainNetworkConfig = {
  programId: '0x73d6C66874e570f058834cAA666b2c352F1C792D',
  authority: '',
  metadata: {
    defaultRpcUrl: 'https://rpc.coredao.org',
    chainId: 1116,
  },
  queues: [
    {
      name: 'Permissioned Queue',
      address: '0x1e373Ac0a299E6CCfE6bd333025E5Ebef9Eca2Dd',
      authority: '',
      crankAddress: '',
      permissioned: true,
    },
    {
      name: 'Permissionless Queue',
      address: '0x628D9A4109FD1B94348b7866923A4b7aae3D61c6',
      authority: '',
      crankAddress: '',
      permissioned: false,
    },
  ],
};

export const SWITCHBOARD_COREDAO_TESTNET_CONFIG: IChainNetworkConfig = {
  programId: '0xe9F5Ecb00BC437F061DF59d899F00f260740dC48',
  authority: '',
  metadata: {
    defaultRpcUrl: 'https://rpc.test.btcs.network',
    chainId: 1115,
  },
  queues: [
    {
      name: 'Permissionless Queue',
      address: '',
      authority: '',
      crankAddress: '',
      permissioned: false,
    },
  ],
};

/**
@defaultValue the default CoreDAO configuration

```json
{
  "mainnet": {
    "programId": "0x73d6C66874e570f058834cAA666b2c352F1C792D",
    "authority": "",
    "metadata": {
      "defaultRpcUrl": "https://rpc.coredao.org",
      "chainId": 1116
    },
    "queues": [
      {
        "name": "Permissioned Queue",
        "address": "0x1e373Ac0a299E6CCfE6bd333025E5Ebef9Eca2Dd",
        "authority": "",
        "crankAddress": "",
        "permissioned": true
      },
      {
        "name": "Permissionless Queue",
        "address": "0x628D9A4109FD1B94348b7866923A4b7aae3D61c6",
        "authority": "",
        "crankAddress": "",
        "permissioned": false
      }
    ]
  },
  "testnet": {
    "programId": "0xe9F5Ecb00BC437F061DF59d899F00f260740dC48",
    "authority": "",
    "metadata": {
      "defaultRpcUrl": "https://rpc.test.btcs.network",
      "chainId": 1115
    },
    "queues": [
      {
        "name": "Permissionless Queue",
        "address": "",
        "authority": "",
        "crankAddress": "",
        "permissioned": false
      }
    ]
  }
}
```
 */
export const SWITCHBOARD_COREDAO_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_COREDAO_MAINNET_CONFIG,
  testnet: SWITCHBOARD_COREDAO_TESTNET_CONFIG,
};
