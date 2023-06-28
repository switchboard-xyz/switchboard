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
import { networks } from "@switchboard-xyz/common";
import { getNetworkTable, capitalizeFirstLetterOfEachWord } from "./utils";

const NetworksGroup = () => {
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

export default NetworksGroup;
