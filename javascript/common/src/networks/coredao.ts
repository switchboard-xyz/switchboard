import type { IChainConfig, IEvmNetworkConfig } from "./types.js";

export const SWITCHBOARD_COREDAO_MAINNET_CONFIG: IEvmNetworkConfig = {
  chain: "coredao",
  chainId: 1116,
  networkName: "Mainnet",
  address: "0xE30582eBD4A678065a61975Da113bD2e7aE38679",
  sbPushOracle: "0xC29aAabf235c1E71633fb7365E95772B97F425d7",
  metadata: {
    defaultRpcUrl: "https://rpc.coredao.org",
    defaultExplorer: "https://scan.coredao.org",
  },
  queues: [],
  attestationQueues: [
    {
      name: "SwitchboardLabs Attestation Queue",
      address: "0x929b24A47F87819Be9f210F667C0CF655622453d",
    },
  ],
};

export const SWITCHBOARD_COREDAO_TESTNET_CONFIG: IEvmNetworkConfig = {
  chain: "coredao",
  chainId: 1115,
  networkName: "Testnet",
  address: "0xf9BD4FA5152b029576F33565Afb676da98Dd0563",
  sbPushOracle: "0x4D06F949eb1057EB86446532eDf1cF323e787a8f",
  metadata: {
    defaultRpcUrl: "https://rpc.test.btcs.network",
    defaultExplorer: "https://scan.test.btcs.network",
  },
  queues: [],
  attestationQueues: [
    {
      name: "SwitchboardLabs Attestation Queue",
      address: "0x928e9c71007514393bFff60b58D072dEb1309328",
    },
  ],
};

/**
@defaultValue the default CoreDAO configuration

```json
{
  "mainnet": {
    "chain": "coredao",
    "chainId": 1116
    "networkName": "Mainnet",
    "address": "0xE30582eBD4A678065a61975Da113bD2e7aE38679",
    "sbPushOracle": "0xC29aAabf235c1E71633fb7365E95772B97F425d7",
    "metadata": {
      "defaultRpcUrl": "https://rpc.coredao.org",
      "defaultExplorer": "https://scan.coredao.org"
    },
    "queues": [],
    "attestationQueues": [
      {
        "name": "SwitchboardLabs Attestation Queue",
        "address": "0x929b24A47F87819Be9f210F667C0CF655622453d"
      }
    ]
  },
  "testnet": {
    "chain": "coredao",
    "chainId": 1115,
    "networkName": "Testnet",
    "address": "0xf9BD4FA5152b029576F33565Afb676da98Dd0563",
    "sbPushOracle": "0x4D06F949eb1057EB86446532eDf1cF323e787a8f",
    "metadata": {
      "defaultRpcUrl": "https://rpc.test.btcs.network",
      "defaultExplorer": "https://scan.test.btcs.network"
    },
    "queues": [],
    "attestationQueues": [
      {
        "name": "SwitchboardLabs Attestation Queue",
        "address": "0x928e9c71007514393bFff60b58D072dEb1309328"
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
