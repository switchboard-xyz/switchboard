import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import PublicKeyButton from "../PublicKeyButton";
// import networks from "./const";

import { type IChainNetworkConfig, networks } from "@switchboard-xyz/common";

import type { SupportedChain } from "./types";

export interface IQueues {
  chain: SupportedChain;
}

export function getNetworkTable(
  chain: SupportedChain,
  network: string
): [string, string, JSX.Element] {
  const networkConfig: IChainNetworkConfig = networks[chain][network];
  const networkName = networkConfig.networkName ?? capitalizeWords(network);
  const addresses: Array<[string, string]> = [];
  addresses.push(["Program ID", networkConfig.programId]);
  if (networkConfig.authority) {
    addresses.push(["Program Authority", networkConfig.authority]);
  }
  const ignoreKeys = [
    "networkName",
    "programId",
    "authority",
    "queues",
    "metadata",
  ];
  const restOfKeys = Object.keys(networkConfig).filter(
    (key) => !ignoreKeys.includes(key)
  );
  restOfKeys.forEach((key) =>
    addresses.push([capitalizeWords(key), networkConfig[key] as string])
  );

  const table = (
    <>
      <h3>Program Deployment</h3>
      <p>
        Below are the <i>{network}</i> {capitalizeWords(chain)} addresses
        associated with the Switchboard deployment.
      </p>
      <table>
        <tr>
          <th>Account</th>
          <th>Address</th>
        </tr>
        {addresses.map(([label, address]) => {
          return (
            <tr key={label}>
              <td>{capitalizeWords(label)}</td>
              <td>
                <PublicKeyButton publicKey={address} />
              </td>
            </tr>
          );
        })}
      </table>

      <h3>Queues</h3>

      <table>
        <tr>
          <th>Queue</th>
          <th>Address</th>
        </tr>

        {networkConfig.queues.map((queueConfig) => {
          return (
            <tr>
              <td>{queueConfig.name}</td>
              <td>
                <PublicKeyButton publicKey={queueConfig.address} /> <br />
                {queueConfig.permissioned ? (
                  <p>
                    The permissioned queue requires aggregators to have{" "}
                    <code>PERMIT_ORACLE_QUEUE_USAGE</code> permissions before
                    using the queue's resources.
                  </p>
                ) : (
                  <p>
                    The permissionless queue does not require aggregators to
                    have <code>PERMIT_ORACLE_QUEUE_USAGE</code> permissions
                    before using a queue's resources. This is the default queue
                    when building feeds in the publisher.
                  </p>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );

  return [network, networkName, table];
}

export default function Networks({ chain }: IQueues) {
  const networkTables: [string, string, JSX.Element][] = Object.keys(
    networks[chain]
  ).map((network) => getNetworkTable(chain, network));

  return (
    <>
      <Tabs defaultValue="mainnet" className="networks_tabs ">
        {networkTables.map(([label, displayName, table]) => {
          return (
            <TabItem value={label} label={displayName}>
              {table}
            </TabItem>
          );
        })}
      </Tabs>
    </>
  );
}

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
