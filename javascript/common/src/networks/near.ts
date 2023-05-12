import { IChainConfig, IChainNetworkConfig } from './types.js';

export const SWITCHBOARD_NEAR_MAINNET_CONFIG: IChainNetworkConfig = {
  programId: 'switchboard-v2.near',
  authority: 'sbv2-authority.near',
  metadata: {
    defaultRpcUrl: 'https://rpc.mainnet.near.org',
  },
  queues: [
    {
      name: 'Permissionless Queue',
      address: 'Ztup1aJ8WTe81RZHx7nUP9zxUMrDe9r2TyTCzRzpRoY',
      authority: 'sbv2-authority.near',
      crankAddress: 'HeS3xrDqHA2CSHTmN9osstz8vbXfgh2mmcGixJ1v9NFx',
      permissioned: false,
    },
  ],
};

export const SWITCHBOARD_NEAR_TESTNET_CONFIG: IChainNetworkConfig = {
  programId: 'switchboard-v2.testnet',
  authority: 'sbv2-authority.testnet',
  metadata: {
    defaultRpcUrl: 'https://rpc.testnet.near.org',
  },
  queues: [
    {
      name: 'Permissionless Queue',
      address: 'HFSJrvA1w2uhciLGLUfE4sADGwGBpUiAjxZPgeFSs61M',
      authority: 'sbv2-authority.testnet',
      crankAddress: '9Vzzu1Z74oPLctxwjRHwkKSd5H32AiQe32iMesuQwKnQ',
      permissioned: false,
    },
  ],
};

/**
@defaultValue the default near configuration

```json
{
  "mainnet": {
    "programId": "switchboard-v2.near",
    "authority": "sbv2-authority.near",
    "metadata": {
      "defaultRpcUrl": "https://rpc.mainnet.near.org"
    },
    "queues": [
      {
        "name": "Permissionless Queue",
        "address": "Ztup1aJ8WTe81RZHx7nUP9zxUMrDe9r2TyTCzRzpRoY",
        "authority": "sbv2-authority.near",
        "crankAddress": "HeS3xrDqHA2CSHTmN9osstz8vbXfgh2mmcGixJ1v9NFx",
        "permissioned": true
      }
    ]
  },
  "testnet": {
    "programId": "switchboard-v2.testnet",
    "authority": "sbv2-authority.testnet",
    "metadata": {
      "defaultRpcUrl": "https://rpc.testnet.near.org"
    },
    "queues": [
      {
        "name": "Permissionless Queue",
        "address": "HFSJrvA1w2uhciLGLUfE4sADGwGBpUiAjxZPgeFSs61M",
        "authority": "sbv2-authority.testnet",
        "crankAddress": "9Vzzu1Z74oPLctxwjRHwkKSd5H32AiQe32iMesuQwKnQ",
        "permissioned": false
      }
    ]
  }
}
```
 */
export const SWITCHBOARD_NEAR_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_NEAR_MAINNET_CONFIG,
  testnet: SWITCHBOARD_NEAR_TESTNET_CONFIG,
};
