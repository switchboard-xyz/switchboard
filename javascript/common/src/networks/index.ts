import { SWITCHBOARD_APTOS_CONFIG } from "./aptos.js";
import {
  SWITCHBOARD_ARBITRUM_CONFIG,
  SWITCHBOARD_ARBITRUM_MAINNET_CONFIG,
  SWITCHBOARD_ARBITRUM_TESTNET_CONFIG,
} from "./arbitrum.js";
import {
  SWITCHBOARD_COREDAO_CONFIG,
  SWITCHBOARD_COREDAO_MAINNET_CONFIG,
  SWITCHBOARD_COREDAO_TESTNET_CONFIG,
} from "./coredao.js";
import { SWITCHBOARD_NEAR_CONFIG } from "./near.js";
import { SWITCHBOARD_SOLANA_CONFIG } from "./solana.js";
import { SWITCHBOARD_SUI_CONFIG } from "./sui.js";
import type {
  ChainConfig,
  ChainType,
  EvmChainIds,
  EvmChainType,
  IChainConfig,
  IEvmNetworkConfig,
} from "./types.js";
import {
  SUPPORTED_EVM_CHAIN_IDS,
  SWITCHBOARD_CHAINS,
  SWITCHBOARD_EVM_CHAINS,
  type SwitchboardEvmNetworks,
  type SwitchboardNetworks,
} from "./types.js";

/**
The default network configurations for each supported EVM chain.

```json
{
  "arbitrum": {
    "mainnet": {},
    "testnet": {}
  },
  "coredao": {
    "mainnet": {},
    "testnet": {}
  },
}
```
 */
export const SWITCHBOARD_EVM_NETWORKS: SwitchboardEvmNetworks = {
  arbitrum: SWITCHBOARD_ARBITRUM_CONFIG,
  coredao: SWITCHBOARD_COREDAO_CONFIG,
};

/** Type assertion for whether a given EVM chain is supported on the Switchboard Network. */
export function isSupportedEvmChain(chain: string): chain is EvmChainType {
  return (SWITCHBOARD_EVM_CHAINS as readonly string[]).includes(chain);
}

export function getSupportedEvmChain(chain: string): IChainConfig {
  if (!isSupportedEvmChain(chain)) {
    throw new Error(
      `The provided chain '${chain}' is not yet supported by the Switchboard network. Available chains are: [${SWITCHBOARD_EVM_CHAINS.map(
        (c) => "'" + c + "'"
      ).join(", ")}]`
    );
  }
  return SWITCHBOARD_EVM_NETWORKS[chain];
}

/**
The default network configurations for each supported EVM chain.

```json
{
  42161: {
    "networkName": "Mainnet",
    "programId": "0xd54579539E1334E856b983745DA26BEc3efB3C4D",
    "attestationService": "0x316fBe540C719970E6427ccD8590d7E0a2814C5D",
    "authority": "0x127f24013CaADF770F4b514c86344dD4f38d80c2",
    "metadata": {
      "defaultRpcUrl": "https://arb1.arbitrum.io/rpc",
      "defaultExplorer": "https://arbiscan.io",
      "chainId": 42161
    },
  421613: {},
  1116: {},
  1115: {},
}
```
 */
export const SWITCHBOARD_EVM_CHAIN_IDS: Record<EvmChainIds, IEvmNetworkConfig> =
  {
    42161: SWITCHBOARD_ARBITRUM_MAINNET_CONFIG,
    421613: SWITCHBOARD_ARBITRUM_TESTNET_CONFIG,
    1116: SWITCHBOARD_COREDAO_MAINNET_CONFIG,
    1115: SWITCHBOARD_COREDAO_TESTNET_CONFIG,
  };

export function isSupportedChainId(chainId: number): chainId is EvmChainIds {
  return (SUPPORTED_EVM_CHAIN_IDS as readonly number[]).includes(chainId);
}

export function getSupportedEvmChainId(chainId: number): IEvmNetworkConfig {
  if (!isSupportedChainId(chainId)) {
    throw new Error(
      `The provided chainID '${chainId}' is not yet supported by the Switchboard network. Available chainID's are: [${SUPPORTED_EVM_CHAIN_IDS.map(
        (c) => "'" + c + "'"
      ).join(", ")}]`
    );
  }
  return SWITCHBOARD_EVM_CHAIN_IDS[chainId];
}

/**
The default network configurations for each supported chain.

```json
{
  "aptos": {
    "mainnet": {},
    "testnet": {}
  },
  "near": {
    "mainnet": {},
    "testnet": {}
  },
  "solana": {
    "mainnet": {},
    "devnet": {}
  },
  "sui": {
    "mainnet": {},
    "testnet": {}
  },
  "arbitrum": {
    "mainnet": {},
    "testnet": {}
  },
  "coredao": {
    "mainnet": {},
    "testnet": {}
  },
}
```
 */
export const SWITCHBOARD_NETWORKS: SwitchboardNetworks = {
  aptos: SWITCHBOARD_APTOS_CONFIG,
  near: SWITCHBOARD_NEAR_CONFIG,
  solana: SWITCHBOARD_SOLANA_CONFIG,
  sui: SWITCHBOARD_SUI_CONFIG,
  ...SWITCHBOARD_EVM_NETWORKS,
};

/** Type assertion for whether a given chain is supported on the Switchboard Network. */
export function isSupportedChain(chain: string): chain is ChainType {
  return (SWITCHBOARD_CHAINS as readonly string[]).includes(chain);
}

export function getSupportedChain(chain: string): ChainConfig {
  if (!isSupportedChain(chain)) {
    throw new Error(
      `The provided chain '${chain}' is not yet supported by the Switchboard network. Available chains are: [${SWITCHBOARD_CHAINS.map(
        (c) => "'" + c + "'"
      ).join(", ")}]`
    );
  }
  return SWITCHBOARD_NETWORKS[chain];
}

export { SWITCHBOARD_APTOS_CONFIG as aptos } from "./aptos.js";
export { SWITCHBOARD_ARBITRUM_CONFIG as arbitrum } from "./arbitrum.js";
export { SWITCHBOARD_COREDAO_CONFIG as coredao } from "./coredao.js";
export { SWITCHBOARD_NEAR_CONFIG as near } from "./near.js";
export { SWITCHBOARD_SOLANA_CONFIG as solana } from "./solana.js";
export { SWITCHBOARD_SUI_CONFIG as sui } from "./sui.js";
export * from "./types.js";

export default SWITCHBOARD_NETWORKS;
