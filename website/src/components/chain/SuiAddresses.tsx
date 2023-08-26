import Link from "@docusaurus/Link";
import { Grid, Typography } from "@mui/material";
import {
  SWITCHBOARD_SUI_MAINNET_CONFIG,
  SWITCHBOARD_SUI_TESTNET_CONFIG,
} from "@switchboard-xyz/common/networks";
import React from "react";

import AddressButton from "../AddressButton";
import AvatarIcon from "./AvatarIcon";
import { CONFIG_MAP } from "./config";

export default function SuiAddresses(props?: {
  trim?: number;
  disableTestnet?: boolean;
}) {
  const mainnet = SWITCHBOARD_SUI_MAINNET_CONFIG;
  const testnet = SWITCHBOARD_SUI_TESTNET_CONFIG;

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
          <AvatarIcon title="Mainnet" image={`/img/icons/sui/logo.svg`} />
        </Grid>
        <Grid item xs={12} md={10}>
          <>
            <div>
              <strong>Contract Address</strong>:{" "}
              <AddressButton address={mainnet.address} trim={24} />
            </div>

            <div>
              <strong>Sb Standard Library</strong>:{" "}
              <AddressButton address={mainnet.switchboardStdLib} trim={24} />
            </div>

            <div>
              <strong>Public Oracle Queue</strong>:{" "}
              <AddressButton address={mainnet.queues[1].address} trim={24} />
            </div>

            <div style={{ minHeight: "10px" }} />
            <div>
              <Typography sx={{ fontWeight: 700 }}>
                View supported feeds in the{" "}
                <Link to="https://app.switchboard.xyz/sui/mainnet">
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
              <AvatarIcon title="Testnet" image={`/img/icons/sui/logo.svg`} />
            </Grid>
            <Grid item xs={12} md={10}>
              <>
                <div>
                  <strong>Contract Address</strong>:{" "}
                  <AddressButton address={testnet.address} trim={24} />
                </div>

                <div>
                  <strong>Sb Standard Library</strong>:{" "}
                  <AddressButton
                    address={testnet.switchboardStdLib}
                    trim={24}
                  />
                </div>

                <div>
                  <strong>Public Oracle Queue</strong>:{" "}
                  <AddressButton
                    address={testnet.queues[0].address}
                    trim={24}
                  />
                </div>

                <div style={{ minHeight: "10px" }} />
                <div>
                  <Typography sx={{ fontWeight: 700 }}>
                    View supported feeds in the{" "}
                    <Link to="https://app.switchboard.xyz/sui/testnet">
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
