import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { capitalizeFirstLetterOfEachWord } from "@site/src/utils";
import type { ChainType, NetworkType } from "@switchboard-xyz/common";
import { networks } from "@switchboard-xyz/common";
import React, { useEffect, useState } from "react";

import { getNetworkTable } from "./utils";

export default function AddressesGroup() {
  const [selectedChain, setSelectedChain] = useState<ChainType>("solana");
  const [selectedNetwork, setSelectedNetwork] =
    useState<NetworkType>("mainnet");
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

  const networkSelector = (
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
  );

  const chainSelector = (
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
  );

  // return (
  //   <div>
  //     <Grid container spacing={2}>
  //       <Grid container item xl={2} lg={2} md={5}>
  //         <Grid item xl={2} lg={2} md={5}>
  //           {networkSelector}
  //         </Grid>
  //         <Grid item xl={2} lg={2} md={7}>
  //           {chainSelector}
  //         </Grid>
  //       </Grid>

  //       <Grid item xl={8} lg={8} md={12}>
  //         {tableElement}
  //       </Grid>
  //     </Grid>
  //   </div>
  // );

  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="space-around"
      spacing={1}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        item
        xl={1}
        lg={2}
        sm={12}
        spacing={2}
      >
        <Grid item sm={4}>
          {networkSelector}
        </Grid>
        <Grid item sm={4}>
          {chainSelector}
        </Grid>
      </Grid>
      <Grid item xl={10} lg={9} sm={12}>
        {tableElement}
      </Grid>
    </Grid>
  );
}
