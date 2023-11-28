import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import type { ChainType } from "@switchboard-xyz/common";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import React from "react";

import AptosAddresses from "./AptosAddresses";
import ArbitrumAddresses from "./ArbitrumAddresses";
import AuroraAddresses from "./AuroraAddresses";
import BaseAddresses from "./BaseAddresses";
import CoreDaoAddresses from "./CoreDaoAddresses";
import EthereumAddresses from "./EthereumAddresses";
import OptimismAddresses from "./OptimismAddresses";
import SolanaAddresses from "./SolanaAddresses";
import SuiAddresses from "./SuiAddresses";

function getChainAddresses(chain: ChainType) {
  // const chainConfig = networks[chain];

  // const isEvm = isSupportedEvmChain(chain);

  // const metadataConfig = CONFIG_MAP.get(isEvm ? "evm" : chain);

  switch (chain) {
    case "aptos":
      return <AptosAddresses />;
    case "arbitrum":
      return <ArbitrumAddresses />;
    case "aurora":
      return <AuroraAddresses />;
    case "base":
      return <BaseAddresses />;
    case "coredao":
      return <CoreDaoAddresses />;
    case "ethereum":
      return <EthereumAddresses />;
    case "optimism":
      return <OptimismAddresses />;
    case "solana":
      return <SolanaAddresses />;
    case "sui":
      return <SuiAddresses />;

    default:
      return <Grid container></Grid>;
  }
}

export default function AddressesGroup() {
  return (
    <Tabs groupId="switchboard-supported-chains">
      <TabItem
        value="solana"
        label="&nbsp;Solana"
        attributes={{ className: "navbar_icon__solana" }}
      >
        {getChainAddresses("solana")}
      </TabItem>
      <TabItem
        value="ethereum"
        label="&nbsp;Ethereum"
        attributes={{ className: "navbar_icon__solidity" }}
      >
        {getChainAddresses("ethereum")}
      </TabItem>
      <TabItem
        value="coredao"
        label="&nbsp;Core"
        attributes={{ className: "navbar_icon__coredao" }}
      >
        {getChainAddresses("coredao")}
      </TabItem>
      <TabItem
        value="arbitrum"
        label="&nbsp;Arbitrum"
        attributes={{ className: "navbar_icon__arbitrum" }}
      >
        {getChainAddresses("arbitrum")}
      </TabItem>
      <TabItem
        value="optimism"
        label="&nbsp;Optimism"
        attributes={{ className: "navbar_icon__optimism" }}
      >
        {getChainAddresses("optimism")}
      </TabItem>
      <TabItem
        value="base"
        label="&nbsp;Base"
        attributes={{ className: "navbar_icon__base" }}
      >
        {getChainAddresses("base")}
      </TabItem>
      <TabItem
        value="aurora"
        label="&nbsp;Aurora"
        attributes={{ className: "navbar_icon__aurora" }}
      >
        {getChainAddresses("aurora")}
      </TabItem>
      <TabItem
        value="aptos"
        label="&nbsp;Aptos"
        attributes={{ className: "navbar_icon__aptos" }}
      >
        {getChainAddresses("aptos")}
      </TabItem>
      <TabItem
        value="sui"
        label="&nbsp;Sui"
        attributes={{ className: "navbar_icon__sui" }}
      >
        {getChainAddresses("sui")}
      </TabItem>
    </Tabs>
  );
}
