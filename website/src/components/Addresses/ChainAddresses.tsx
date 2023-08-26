import type { ChainType } from "@switchboard-xyz/common";
import { type IChainNetworkConfig, networks } from "@switchboard-xyz/common";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import React from "react";

import { capitalizeFirstLetterOfEachWord } from "../../utils";
import { getNetworkTable } from "./utils";

export interface IQueues {
  chain: ChainType;
  hideQueues?: boolean;
}

interface INetworkTable {
  chain: string;
  network: string;
  networkName: string;
  table: JSX.Element;
}

export default function ChainAddresses({ chain, hideQueues }: IQueues) {
  const ALL_NETWORKS = Object.keys(networks[chain]);

  const data: INetworkTable[] = ALL_NETWORKS.map((n) => {
    const config: IChainNetworkConfig = networks[chain][n];
    const displayName =
      config.networkName ?? capitalizeFirstLetterOfEachWord(n);
    const table = getNetworkTable(chain, n, hideQueues);

    return {
      chain: chain,
      network: n,
      networkName: displayName,
      table,
    };
  });

  return (
    <>
      <Tabs defaultValue="mainnet" className="networks_tabs">
        {data.map(({ network, networkName, table }) => {
          return (
            <TabItem value={network} label={networkName}>
              {table}
            </TabItem>
          );
        })}
      </Tabs>
    </>
  );
}
