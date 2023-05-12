import { SWITCHBOARD_APTOS_CONFIG } from './aptos.js';
import { SWITCHBOARD_COREDAO_CONFIG } from './coredao.js';
import { SWITCHBOARD_NEAR_CONFIG } from './near.js';
import { SWITCHBOARD_SOLANA_CONFIG } from './solana.js';
import { SWITCHBOARD_SUI_CONFIG } from './sui.js';
import { SwitchboardNetworks } from './types.js';

/**
The default network configurations for each supported chain.

```json
{
  "aptos": {
    "mainnet": {},
    "testnet": {}
  },
  "coredao": {
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
  }
}
```
 */
export const SWITCHBOARD_NETWORKS: SwitchboardNetworks = {
  aptos: SWITCHBOARD_APTOS_CONFIG,
  coredao: SWITCHBOARD_COREDAO_CONFIG,
  near: SWITCHBOARD_NEAR_CONFIG,
  solana: SWITCHBOARD_SOLANA_CONFIG,
  sui: SWITCHBOARD_SUI_CONFIG,
};

export { SWITCHBOARD_APTOS_CONFIG as aptos } from './aptos.js';
export { SWITCHBOARD_COREDAO_CONFIG as coredao } from './coredao.js';
export { SWITCHBOARD_NEAR_CONFIG as near } from './near.js';
export { SWITCHBOARD_SOLANA_CONFIG as solana } from './solana.js';
export { SWITCHBOARD_SUI_CONFIG as sui } from './sui.js';
export * from './types.js';

export default SWITCHBOARD_NETWORKS;
