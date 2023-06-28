import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { SupportedChain } from "./Networks/types";
import NetworkTable, { getNetworkTable } from "./Networks/Networks";

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

const SupportedNetworks = () => {
  const [selectedChain, setSelectedChain] = useState<SupportedChain>("solana");
  const [selectedNetwork, setSelectedNetwork] = useState<string>("mainnet");
  const [tableElement, setTableElement] = useState<JSX.Element>(
    getNetworkTable(selectedChain, selectedNetwork)[2]
  );

  const handleChainChange = (event) => {
    setSelectedChain(event.target.value);
    setSelectedNetwork("mainnet");
  };

  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
  };

  useEffect(() => {
    setTableElement(getNetworkTable(selectedChain, selectedNetwork)[2]);
  }, [selectedChain, selectedNetwork]);

  return (
    <div>
      <div>
        <FormControl>
          <FormLabel>Chain</FormLabel>
          <RadioGroup
            row
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
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel>Network</FormLabel>
          <RadioGroup
            row
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
      {tableElement}
    </div>
  );
};

export default SupportedNetworks;
