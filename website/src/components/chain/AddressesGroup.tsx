import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import type { ChainType } from "@switchboard-xyz/common";
import {
  type IChainNetworkConfig,
  isSupportedEvmChain,
  networks,
} from "@switchboard-xyz/common";
import {
  SWITCHBOARD_ARBITRUM_MAINNET_CONFIG,
  SWITCHBOARD_ARBITRUM_TESTNET_CONFIG,
  SWITCHBOARD_SOLANA_DEVNET_CONFIG,
  SWITCHBOARD_SOLANA_MAINNET_CONFIG,
} from "@switchboard-xyz/common/networks";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import React from "react";

import { capitalizeFirstLetterOfEachWord } from "../../utils";
import AddressButton from "../AddressButton";
import AptosAddresses from "./AptosAddresses";
import ArbitrumAddresses from "./ArbitrumAddresses";
import { CONFIG_MAP } from "./config";
import CoreDaoAddresses from "./CoreDaoAddresses";
import NearAddresses from "./NearAddresses";
import SolanaAddresses from "./SolanaAddresses";
import SuiAddresses from "./SuiAddresses";

function getChainAddresses(chain: ChainType) {
  const chainConfig = networks[chain];

  const isEvm = isSupportedEvmChain(chain);

  const metadataConfig = CONFIG_MAP.get(isEvm ? "evm" : chain);

  switch (chain) {
    case "solana":
      return <SolanaAddresses />;
    case "coredao":
      return <CoreDaoAddresses />;
    case "arbitrum":
      return <ArbitrumAddresses />;
    case "aptos":
      return <AptosAddresses />;
    case "sui":
      return <SuiAddresses />;
    case "near":
      return <NearAddresses />;
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
      <TabItem
        value="near"
        label="&nbsp;NEAR"
        attributes={{ className: "navbar_icon__near" }}
      >
        {getChainAddresses("near")}
      </TabItem>
    </Tabs>
  );
}
