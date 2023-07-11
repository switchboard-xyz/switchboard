import type { IChainConfig, IChainNetworkConfig } from "./types.js";

export const SWITCHBOARD_COREDAO_MAINNET_CONFIG: IChainNetworkConfig = {
  networkName: "Mainnet",
  programId: "0x73d6C66874e570f058834cAA666b2c352F1C792D",
  authority: "",
  metadata: {
    defaultRpcUrl: "https://rpc.coredao.org",
    defaultExplorer: "https://scan.coredao.org",
    chainId: 1116,
  },
  queues: [
    {
      name: "Permissioned Queue",
      address: "0x1e373Ac0a299E6CCfE6bd333025E5Ebef9Eca2Dd",
      authority: "",
      crankAddress: "",
      permissioned: true,
    },
    {
      name: "Permissionless Queue",
      address: "0x628D9A4109FD1B94348b7866923A4b7aae3D61c6",
      authority: "",
      crankAddress: "",
      permissioned: false,
    },
  ],
};

export const SWITCHBOARD_COREDAO_TESTNET_CONFIG: IChainNetworkConfig = {
  networkName: "Testnet",
  programId: "0x1bAB46734e02d25D9dF5EE725c0646b39C0c5224",
  authority: "0xB76E3A368dA2B6E6E5F5F686046C7cb0a3e1Bd1A",
  metadata: {
    defaultRpcUrl: "https://rpc.test.btcs.network",
    defaultExplorer: "https://scan.test.btcs.network",
    chainId: 1115,
  },
  queues: [
    {
      name: "Permissionless Queue",
      address: "0x934eb1F9D0f59695050f761DC64e443E5030A569",
      attestationQueue: "0x83Fb069B10426056Ef8Ca54750cB9bB552a59e7D",
      authority: "0xB76E3A368dA2B6E6E5F5F686046C7cb0a3e1Bd1A",
      crankAddress: "",
      permissioned: false,
    },
  ],
};

/**
@defaultValue the default CoreDAO configuration

```json
{
  "mainnet": {
    "networkName": "Mainnet",
    "programId": "0x73d6C66874e570f058834cAA666b2c352F1C792D",
    "authority": "",
    "metadata": {
      "defaultRpcUrl": "https://rpc.coredao.org",
      "defaultExplorer": "https://scan.coredao.org",
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
    "networkName": "Testnet",
    "programId": "0x1bAB46734e02d25D9dF5EE725c0646b39C0c5224",
    "authority": "0xB76E3A368dA2B6E6E5F5F686046C7cb0a3e1Bd1A",
    "metadata": {
      "defaultRpcUrl": "https://rpc.test.btcs.network",
      "defaultExplorer": "https://scan.test.btcs.network",
      "chainId": 1115
    },
    "queues": [
      {
        "name": "Permissionless Queue",
        "address": "0x934eb1F9D0f59695050f761DC64e443E5030A569",
        "attestationQueue": "0x83Fb069B10426056Ef8Ca54750cB9bB552a59e7D",
        "authority": "0xB76E3A368dA2B6E6E5F5F686046C7cb0a3e1Bd1A",
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
