import { IChainConfig, IChainNetworkConfig } from './types.js';

export const SWITCHBOARD_APTOS_MAINNET_CONFIG: IChainNetworkConfig = {
  networkName: 'Mainnet',
  programId:
    '0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8',
  authority:
    '0xca62eccbbdb22b5de18165d0bdf2d7127569b91498f0a7f6944028793cef8137',
  stateAddress:
    '0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8',
  metadata: {
    defaultRpcUrl: 'https://fullnode.mainnet.aptoslabs.com/v1',
    defaultExplorer: 'https://explorer.aptoslabs.com/?network=mainnet',
    chainId: 1,
  },
  queues: [
    {
      name: 'Permissioned Queue',
      address:
        '0x11fbd91e4a718066891f37958f0b68d10e720f2edf8d57854fb20c299a119a8c',
      authority:
        '0xca62eccbbdb22b5de18165d0bdf2d7127569b91498f0a7f6944028793cef8137',
      crankAddress:
        '0xbc9576fedda51d33e8129b5f122ef4707c2079dfb11cd836e86adcb168cbd473',
      permissioned: true,
    },
    {
      name: 'Permissionless Queue',
      address:
        '0xc887072e37f17f9cc7afc0a00e2b283775d703c610acca3997cb26e74bc53f3b',
      authority:
        '0xca62eccbbdb22b5de18165d0bdf2d7127569b91498f0a7f6944028793cef8137',
      crankAddress:
        '0x7d5ced8797f212c2eeb36486d5e5f30c1043530a340fe9debf4fc958559f3ec4',
      permissioned: false,
    },
  ],
};

export const SWITCHBOARD_APTOS_TESTNET_CONFIG: IChainNetworkConfig = {
  networkName: 'testnet',
  programId:
    '0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271',
  authority:
    '0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271',
  stateAddress:
    '0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271',
  metadata: {
    defaultRpcUrl: 'https://fullnode.testnet.aptoslabs.com/v1',
    defaultExplorer: 'https://explorer.aptoslabs.com/?network=testnet',
    chainId: 2,
  },
  queues: [
    {
      name: 'Permissionless Queue',
      address:
        '0x9190d0fad0520ef650caa1ef8bd89da660d6eb617feabd618039b9c6bf11e802',
      authority:
        '0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271',
      crankAddress:
        '0xd08a5107feb5f2df15c913702b0969ae4e22b3653a98c14fcd5e9e00cf8a039d',
      permissioned: false,
    },
  ],
};

/**
@defaultValue the default Aptos configuration

```json
{
  "mainnet": {
    "networkName": "Mainnet",
    "programId": "0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8",
    "authority": "0xca62eccbbdb22b5de18165d0bdf2d7127569b91498f0a7f6944028793cef8137",
    "stateAddress": "0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8",
    "metadata": {
      "defaultRpcUrl": "https://fullnode.mainnet.aptoslabs.com/v1",
      "defaultExplorer": "https://explorer.aptoslabs.com/?network=mainnet",
      "chainId": 1
    },
    "queues": [
      {
        "name": "Permissioned Queue",
        "address": "0x11fbd91e4a718066891f37958f0b68d10e720f2edf8d57854fb20c299a119a8c",
        "authority": "0xca62eccbbdb22b5de18165d0bdf2d7127569b91498f0a7f6944028793cef8137",
        "crankAddress": "0xbc9576fedda51d33e8129b5f122ef4707c2079dfb11cd836e86adcb168cbd473",
        "permissioned": true
      },
      {
        "name": "Permissionless Queue",
        "address": "0xc887072e37f17f9cc7afc0a00e2b283775d703c610acca3997cb26e74bc53f3b",
        "authority": "0xca62eccbbdb22b5de18165d0bdf2d7127569b91498f0a7f6944028793cef8137",
        "crankAddress": "0x7d5ced8797f212c2eeb36486d5e5f30c1043530a340fe9debf4fc958559f3ec4",
        "permissioned": false
      }
    ]
  },
  "testnet": {
    "networkName": "Testnet",
    "programId": "0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",
    "authority": "0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",
    "stateAddress": "0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",
    "metadata": {
      "defaultRpcUrl": "https://fullnode.testnet.aptoslabs.com/v1",
      "defaultExplorer": "https://explorer.aptoslabs.com/?network=testnet",
      "chainId": 2
    },
    "queues": [
      {
        "name": "Permissionless Queue",
        "address": "0x9190d0fad0520ef650caa1ef8bd89da660d6eb617feabd618039b9c6bf11e802",
        "authority": "0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",
        "crankAddress": "0xd08a5107feb5f2df15c913702b0969ae4e22b3653a98c14fcd5e9e00cf8a039d",
        "permissioned": false
      }
    ]
  }
}
```
 */
export const SWITCHBOARD_APTOS_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_APTOS_MAINNET_CONFIG,
  testnet: SWITCHBOARD_APTOS_TESTNET_CONFIG,
};
