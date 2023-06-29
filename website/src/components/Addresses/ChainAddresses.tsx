import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { type IChainNetworkConfig, networks } from "@switchboard-xyz/common";
import type { SupportedChain } from "./types";
import { capitalizeFirstLetterOfEachWord, getNetworkTable } from "./utils";

export interface IQueues {
  chain: SupportedChain;
}

interface INetworkTable {
  chain: string;
  network: string;
  networkName: string;
  table: JSX.Element;
}

export default function ChainAddresses({ chain }: IQueues) {
  const ALL_NETWORKS = Object.keys(networks[chain]);

  const data: INetworkTable[] = ALL_NETWORKS.map((n) => {
    const config: IChainNetworkConfig = networks[chain][n];
    const displayName =
      config.networkName ?? capitalizeFirstLetterOfEachWord(n);
    const table = getNetworkTable(chain, n);

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
