import Link from "@docusaurus/Link";
import { Grid, Typography } from "@mui/material";
import {
  SWITCHBOARD_APTOS_MAINNET_CONFIG,
  SWITCHBOARD_APTOS_TESTNET_CONFIG,
} from "@switchboard-xyz/common/networks";
import React from "react";

import AddressButton from "../AddressButton";
import AvatarIcon from "./AvatarIcon";
import { CONFIG_MAP } from "./config";

export default function AptosAddresses(props?: {
  trim?: number;
  disableTestnet?: boolean;
}) {
  const mainnet = SWITCHBOARD_APTOS_MAINNET_CONFIG;
  const testnet = SWITCHBOARD_APTOS_TESTNET_CONFIG;

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
          <AvatarIcon title="Mainnet" image={`/img/icons/aptos/logo.svg`} />
        </Grid>
        <Grid item xs={12} md={10}>
          <>
            <div>
              <strong>Contract Address</strong>:{" "}
              <AddressButton address={mainnet.address} trim={24} />
            </div>

            <div>
              <strong>Public Oracle Queue</strong>:{" "}
              <AddressButton address={mainnet.queues[1].address} trim={24} />
            </div>

            <div>
              <strong>Public Crank</strong>:{" "}
              <AddressButton
                address={mainnet.queues[1].crankAddress}
                trim={24}
              />
            </div>

            <div style={{ minHeight: "10px" }} />
            <div>
              <Typography sx={{ fontWeight: 700 }}>
                View supported feeds in the{" "}
                <Link to="https://app.switchboard.xyz/aptos/mainnet">
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
          {" "}
          <hr />
          <Grid
            item
            xs={12}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} md={2}>
              <AvatarIcon title="Testnet" image={`/img/icons/aptos/logo.svg`} />
            </Grid>
            <Grid item xs={12} md={10}>
              <>
                <div>
                  <strong>Contract Address</strong>:{" "}
                  <AddressButton address={testnet.address} trim={24} />
                </div>

                <div>
                  <strong>Public Oracle Queue</strong>:{" "}
                  <AddressButton
                    address={testnet.queues[0].address}
                    trim={24}
                  />
                </div>

                <div>
                  <strong>Public Crank</strong>:{" "}
                  <AddressButton
                    address={testnet.queues[0].crankAddress}
                    trim={24}
                  />
                </div>

                <div style={{ minHeight: "10px" }} />
                <div>
                  <Typography sx={{ fontWeight: 700 }}>
                    View supported feeds in the{" "}
                    <Link to="https://app.switchboard.xyz/aptos/testnet">
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
