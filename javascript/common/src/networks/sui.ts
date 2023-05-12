import { IChainConfig, IChainNetworkConfig } from './types.js';

export const SWITCHBOARD_SUI_MAINNET_CONFIG: IChainNetworkConfig = {
  programId:
    '0xfd2e0f4383df3ec9106326dcd9a20510cdce72146754296deed15403fcd3df8b',
  authority:
    '0xcf2d51b3ca8c23e0ba312392d213b1293a3121f691fa8e120f1a968fc2ad1c8b',
  switchboardStdLib:
    '0x08d79f4d920b03d88faca1e421af023a87fbb1e4a6fd200248e6e9998d09e470',
  metadata: {
    defaultRpcUrl: 'https://fullnode.mainnet.sui.io:443',
  },
  queues: [
    {
      name: 'Permissioned Queue',
      address:
        '0xea802bde1319363a27134a72a9d2f45e110fd60ef32ab2e10cdb06c973d6c64f',
      authority:
        '0xcf2d51b3ca8c23e0ba312392d213b1293a3121f691fa8e120f1a968fc2ad1c8b',
      crankAddress: '',
      permissioned: true,
    },
    {
      name: 'Permissionless Queue',
      address:
        '0xe9324b82374f18d17de601ae5a19cd72e8c9f57f54661bf9e41a76f8948e80b5',
      authority:
        '0xcf2d51b3ca8c23e0ba312392d213b1293a3121f691fa8e120f1a968fc2ad1c8b',
      crankAddress: '',
      permissioned: false,
    },
  ],
};

export const SWITCHBOARD_SUI_TESTNET_CONFIG: IChainNetworkConfig = {
  programId:
    '0x4247e72df58552701456293027e75237fe85a214cd050b6e0358dc5047a3fb17',
  authority:
    '0xc9c8e0d738d7f090144847b38a8283fbe8050923875771b8c315a461721c04a4',
  switchboardStdLib:
    '0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e',
  metadata: {
    defaultRpcUrl: 'https://fullnode.testnet.sui.io:443',
  },
  queues: [
    {
      name: 'Permissionless Queue',
      address:
        '0x955e87b8bf01e8f8a739e07c7556956108fa93aa02dae0b017083bfbe99cbd34',
      authority:
        '0xc9c8e0d738d7f090144847b38a8283fbe8050923875771b8c315a461721c04a4',
      crankAddress: '',
      permissioned: false,
    },
  ],
};

/**
@defaultValue the default Sui configuration

```json
{
  "mainnet": {
    "programId": "0xfd2e0f4383df3ec9106326dcd9a20510cdce72146754296deed15403fcd3df8b",
    "authority": "0xcf2d51b3ca8c23e0ba312392d213b1293a3121f691fa8e120f1a968fc2ad1c8b",
    "switchboardStdLib": "0x08d79f4d920b03d88faca1e421af023a87fbb1e4a6fd200248e6e9998d09e470",
    "metadata": {
      "defaultRpcUrl": "https://fullnode.mainnet.sui.io:443"
    },
    "queues": [
      {
        "name": "Permissioned Queue",
        "address": "0xea802bde1319363a27134a72a9d2f45e110fd60ef32ab2e10cdb06c973d6c64f",
        "authority": "0xcf2d51b3ca8c23e0ba312392d213b1293a3121f691fa8e120f1a968fc2ad1c8b",
        "crankAddress": "",
        "permissioned": true
      },
      {
        "name": "Permissionless Queue",
        "address": "0xe9324b82374f18d17de601ae5a19cd72e8c9f57f54661bf9e41a76f8948e80b5",
        "authority": "0xcf2d51b3ca8c23e0ba312392d213b1293a3121f691fa8e120f1a968fc2ad1c8b",
        "crankAddress": "",
        "permissioned": false
      }
    ]
  },
  "testnet": {
    "programId": "0x4247e72df58552701456293027e75237fe85a214cd050b6e0358dc5047a3fb17",
    "authority": "0xc9c8e0d738d7f090144847b38a8283fbe8050923875771b8c315a461721c04a4",
    "switchboardStdLib": "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e",
    "metadata": {
      "defaultRpcUrl": "https://fullnode.testnet.sui.io:443"
    },
    "queues": [
      {
        "name": "Permissionless Queue",
        "address": "0x955e87b8bf01e8f8a739e07c7556956108fa93aa02dae0b017083bfbe99cbd34",
        "authority": "0xc9c8e0d738d7f090144847b38a8283fbe8050923875771b8c315a461721c04a4",
        "crankAddress": "",
        "permissioned": false
      }
    ]
  }
}
```
 */
export const SWITCHBOARD_SUI_CONFIG: IChainConfig = {
  mainnet: SWITCHBOARD_SUI_MAINNET_CONFIG,
  testnet: SWITCHBOARD_SUI_TESTNET_CONFIG,
};
