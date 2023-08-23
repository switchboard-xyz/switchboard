import type { IChainConfig, IEvmNetworkConfig } from "./types.js";

export const SWITCHBOARD_ARBITRUM_MAINNET_CONFIG: IEvmNetworkConfig = {
  chain: "arbitrum",
  chainId: 42161,
  networkName: "Mainnet",
  address: "0xE30582eBD4A678065a61975Da113bD2e7aE38679",
  sbPushOracle: "0xD33F9a409bF48f9aFb8f5c70C949AF8E8E11449F",
  metadata: {
    defaultRpcUrl: "https://arb1.arbitrum.io/rpc",
    defaultExplorer: "https://arbiscan.io",
  },
  queues: [],
  attestationQueues: [
    {
      name: "SwitchboardLabs Attestation Queue",
      address: "0x2D3385BFF20b3EEBA91caEA535569F2dc55c2980",
    },
  ],
};

export const SWITCHBOARD_ARBITRUM_TESTNET_CONFIG: IEvmNetworkConfig = {
  chain: "arbitrum",
  chainId: 421613,
  networkName: "Goerli",
  address: "0xA3c9F9F6E40282e1366bdC01C1D30F7F7F58888e",
  sbPushOracle: "0xDf8bed962Af2EA8E61F57B35294436dCc3eF80dd",
  metadata: {
    defaultRpcUrl: "https://goerli-rollup.arbitrum.io/rpc",
    defaultExplorer: "https://goerli.arbiscan.io",
  },
  queues: [],
  attestationQueues: [
    {
      name: "SwitchboardLabs Attestation Queue",
      address: "0x54f8A91bE5baAD3E2368b00A11bF4012EA6b031F",
    },
  ],
};

/**
@defaultValue the default Arbitrum configuration

```json
{
  "mainnet": {
    "chain": "arbitrum",
    "chainId": 42161,
    "networkName": "Mainnet",
    "address": "0xE30582eBD4A678065a61975Da113bD2e7aE38679",
    "sbPushOracle": "0xD33F9a409bF48f9aFb8f5c70C949AF8E8E11449F",
    "metadata": {
      "defaultRpcUrl": "https://arb1.arbitrum.io/rpc",
      "defaultExplorer": "https://arbiscan.io"
    },
    "queues": [],
    "attestationQueues": [
      {
        "name": "SwitchboardLabs Attestation Queue",
        "address": "0x2D3385BFF20b3EEBA91caEA535569F2dc55c2980"
      }
    ]
  },
  "testnet": {
    "chain": "arbitrum",
    "chainId": 421613,
    "networkName": "Goerli",
    "address": "0xA3c9F9F6E40282e1366bdC01C1D30F7F7F58888e",
    "sbPushOracle": "0xDf8bed962Af2EA8E61F57B35294436dCc3eF80dd",
    "metadata": {
      "defaultRpcUrl": "https://goerli-rollup.arbitrum.io/rpc",
      "defaultExplorer": "https://goerli.arbiscan.io"
    },
    "queues": [],
    "attestationQueues": [
      {
        "name": "SwitchboardLabs Attestation Queue",
        "address": "0x54f8A91bE5baAD3E2368b00A11bF4012EA6b031F"
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
