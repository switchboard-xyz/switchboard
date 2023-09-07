import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Box, Grid, Typography } from "@mui/material";
import type { EvmChainType, IEvmNetworkConfig } from "@switchboard-xyz/common";
import {
  isSupportedEvmChain,
  SWITCHBOARD_EVM_NETWORKS,
} from "@switchboard-xyz/common/networks";
import React from "react";

import { capitalizeFirstLetterOfEachWord } from "../../utils";
import AddressButton from "../AddressButton";
import ComingSoon from "../ComingSoon";
import AvatarIcon from "./AvatarIcon";

function getChainRow(chain: EvmChainType) {
  const mainnet: IEvmNetworkConfig = SWITCHBOARD_EVM_NETWORKS[chain]
    .mainnet as unknown as IEvmNetworkConfig;

  return (
    <>
      <Grid
        item
        xs={12}
        container
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} md={2}>
          <AvatarIcon
            title={
              chain === "coredao"
                ? "Core"
                : capitalizeFirstLetterOfEachWord(chain)
            }
            image={`/img/icons/${chain}/logo.svg`}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          {mainnet.address ? (
            <>
              <div>
                <strong>Diamond Address</strong>:{" "}
                <AddressButton address={mainnet.address} trim={8} />
              </div>

              <div>
                <strong>Sb Push Oracle</strong>:{" "}
                <AddressButton address={mainnet.sbPushOracle} trim={8} />
              </div>

              <div>
                <strong>Public Attestation Queue</strong>:{" "}
                <AddressButton
                  address={mainnet.attestationQueues[0].address}
                  trim={8}
                />
              </div>

              <div style={{ minHeight: "10px" }} />
              <div>
                <Typography sx={{ fontWeight: 700 }}>
                  View supported feeds in the{" "}
                  <Link to={`https://app.switchboard.xyz/${chain}/mainnet`}>
                    Switchboard Explorer App
                  </Link>
                  !
                </Typography>
              </div>
            </>
          ) : (
            <ComingSoon />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default function EvmAddresses() {
  return (
    <Grid container spacing={1} justifyContent="flex-start" alignItems="center">
      {/* {getChainRow("ethereum")}
      <Grid item xs={12}>
        <hr />
      </Grid> */}
      {getChainRow("arbitrum")}
      <Grid item xs={12}>
        <hr />
      </Grid>
      {getChainRow("aurora")}
      {/* <Grid item xs={12}>
        <hr />
      </Grid>
      {getChainRow("base")} */}
      <Grid item xs={12}>
        <hr />
      </Grid>
      {getChainRow("coredao")}
      {/* <Grid item xs={12}>
        <hr />
      </Grid>
      {getChainRow("optimism")} */}
    </Grid>
  );
}
