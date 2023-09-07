import Link from "@docusaurus/Link";
import { Grid, Typography } from "@mui/material";
import {
  SWITCHBOARD_NEAR_MAINNET_CONFIG,
  SWITCHBOARD_NEAR_TESTNET_CONFIG,
} from "@switchboard-xyz/common/networks";
import React from "react";

import AddressButton from "../AddressButton";
import AvatarIcon from "./AvatarIcon";

export default function NearAddresses(props?: {
  trim?: number;
  disableTestnet?: boolean;
}) {
  const mainnet = SWITCHBOARD_NEAR_MAINNET_CONFIG;
  const testnet = SWITCHBOARD_NEAR_TESTNET_CONFIG;

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
          <AvatarIcon title="Mainnet" image={`/img/icons/near/logo.svg`} />
        </Grid>
        <Grid item xs={12} md={10}>
          <>
            <div>
              <strong>Contract Address</strong>:{" "}
              <AddressButton address={mainnet.address} />
            </div>

            <div>
              <strong>Public Oracle Queue</strong>:{" "}
              <AddressButton address={mainnet.queues[0].address} />
            </div>

            <div>
              <strong>Public Crank</strong>:{" "}
              <AddressButton address={mainnet.queues[0].crankAddress} />
            </div>

            <div style={{ minHeight: "10px" }} />
            <div>
              <Typography sx={{ fontWeight: 700 }}>
                View supported feeds in the{" "}
                <Link to="https://app.switchboard.xyz/near/mainnet">
                  Switchboard Explorer App
                </Link>
                !
              </Typography>
            </div>
          </>
        </Grid>
      </Grid>

      {!props || !props.disableTestnet ? (
        <>
          <hr />
          <Grid
            item
            xs={12}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} md={2}>
              <AvatarIcon title="Testnet" image={`/img/icons/near/logo.svg`} />
            </Grid>
            <Grid item xs={12} md={10}>
              <>
                <div>
                  <strong>Contract Address</strong>:{" "}
                  <AddressButton address={testnet.address} />
                </div>

                <div>
                  <strong>Public Oracle Queue</strong>:{" "}
                  <AddressButton address={testnet.queues[0].address} />
                </div>

                <div>
                  <strong>Public Crank</strong>:{" "}
                  <AddressButton address={testnet.queues[0].crankAddress} />
                </div>

                <div style={{ minHeight: "10px" }} />
                <div>
                  <Typography sx={{ fontWeight: 700 }}>
                    View supported feeds in the{" "}
                    <Link to="https://app.switchboard.xyz/near/testnet">
                      Switchboard Explorer App
                    </Link>
                    !
                  </Typography>
                </div>
              </>
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
