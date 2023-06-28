import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";
import { SupportedChain } from "./types";
import PublicKeyButton from "../PublicKeyButton";
import NetworkTable from "./Networks";

// Assuming the data is imported from a JSON file.
import { type IChainNetworkConfig, networks } from "@switchboard-xyz/common";

function capitalizeFirstLetterOfEachWord(str: string): string {
  const titleCase = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  if (titleCase.endsWith("dao")) {
    return titleCase.slice(0, titleCase.length - 3) + "DAO";
  }
  return titleCase;
}

export function getNetworkTable(
  chain: SupportedChain,
  network: string
): JSX.Element {
  const networkConfig: IChainNetworkConfig = networks[chain][network];
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
    addresses.push([
      capitalizeFirstLetterOfEachWord(key),
      networkConfig[key] as string,
    ])
  );

  const table = (
    <>
      <h3>Program Deployment</h3>
      <p>
        Below are the <i>{network}</i> {capitalizeFirstLetterOfEachWord(chain)}{" "}
        addresses associated with the Switchboard deployment.
      </p>
      <table>
        <tr>
          <th>Account</th>
          <th>Address</th>
        </tr>
        {addresses.map(([label, address]) => {
          return (
            <tr key={label}>
              <td>{capitalizeFirstLetterOfEachWord(label)}</td>
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

  return table;
}

const SupportedNetworks = () => {
  const [selectedChain, setSelectedChain] = useState<SupportedChain>("solana");
  const [selectedNetwork, setSelectedNetwork] = useState<string>("mainnet");
  const [tableElement, setTableElement] = useState<JSX.Element>(
    getNetworkTable(selectedChain, selectedNetwork)
  );

  const handleChainChange = (event) => {
    setSelectedChain(event.target.value);
    setSelectedNetwork("mainnet");
  };

  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
  };

  useEffect(() => {
    setTableElement(getNetworkTable(selectedChain, selectedNetwork));
  }, [selectedChain, selectedNetwork]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={2} xs={5}>
          <div>
            <FormControl>
              <FormLabel>Network</FormLabel>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                onChange={handleNetworkChange}
                defaultValue="mainnet"
              >
                {Object.keys(networks[selectedChain]).map((network) => (
                  <FormControlLabel
                    value={network}
                    control={<Radio />}
                    label={capitalizeFirstLetterOfEachWord(network)}
                    checked={selectedNetwork === network}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </Grid>
        <Grid item sm={2} xs={7}>
          <div>
            <FormControl>
              <FormLabel>Chain</FormLabel>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                onChange={handleChainChange}
                defaultValue="solana"
              >
                {Object.keys(networks).map((chain) => (
                  <FormControlLabel
                    value={chain}
                    control={<Radio />}
                    label={capitalizeFirstLetterOfEachWord(chain)}
                    checked={selectedChain === chain}
                    className={`navbar_icon__${chain}`}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          {tableElement}
        </Grid>
      </Grid>
    </div>
  );
};

export default SupportedNetworks;
