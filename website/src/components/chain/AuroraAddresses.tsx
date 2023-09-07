import Link from "@docusaurus/Link";
import { Grid, Typography } from "@mui/material";
import {
  SWITCHBOARD_AURORA_MAINNET_CONFIG,
  SWITCHBOARD_AURORA_TESTNET_CONFIG,
} from "@switchboard-xyz/common/networks";
import React from "react";

import AddressButton from "../AddressButton";
import AvatarIcon from "./AvatarIcon";

export default function AuroraAddresses() {
  const mainnet = SWITCHBOARD_AURORA_MAINNET_CONFIG;
  const testnet = SWITCHBOARD_AURORA_TESTNET_CONFIG;

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
          <AvatarIcon title="Mainnet" image={`/img/icons/aurora/logo.svg`} />
        </Grid>
        <Grid item xs={12} md={10}>
          <>
            <div>
              <strong>Diamond Address</strong>:{" "}
              <AddressButton address={mainnet.address} trim={12} />
            </div>

            <div>
              <strong>Sb Push Oracle</strong>:{" "}
              <AddressButton address={mainnet.sbPushOracle} trim={12} />
            </div>

            <div>
              <strong>Public Attestation Queue</strong>:{" "}
              <AddressButton
                address={mainnet.attestationQueues[0].address}
                trim={12}
              />
            </div>

            <div style={{ minHeight: "10px" }} />
            <div>
              <Typography sx={{ fontWeight: 700 }}>
                View supported feeds in the{" "}
                <Link to="https://app.switchboard.xyz/aurora/mainnet">
                  Switchboard Explorer App
                </Link>
                !
              </Typography>
            </div>
          </>
        </Grid>
      </Grid>
      <hr />
      <Grid
        item
        xs={12}
        container
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} md={2}>
          <AvatarIcon title="Testnet" image={`/img/icons/aurora/logo.svg`} />
        </Grid>
        <Grid item xs={12} md={10}>
          <>
            <div>
              <strong>Diamond Address</strong>:{" "}
              <AddressButton address={testnet.address} trim={12} />
            </div>

            <div>
              <strong>Sb Push Oracle</strong>:{" "}
              <AddressButton address={testnet.sbPushOracle} trim={12} />
            </div>

            <div>
              <strong>Public Attestation Queue</strong>:{" "}
              <AddressButton
                address={testnet.attestationQueues[0].address}
                trim={12}
              />
            </div>

            <div style={{ minHeight: "10px" }} />
            <div>
              <Typography sx={{ fontWeight: 700 }}>
                View supported feeds in the{" "}
                <Link to="https://app.switchboard.xyz/aurora/testnet">
                  Switchboard Explorer App
                </Link>
                !
              </Typography>
            </div>
          </>
        </Grid>
      </Grid>
    </>
  );
}
