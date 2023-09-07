import Link from "@docusaurus/Link";
import { Grid, Typography } from "@mui/material";
import {
  SWITCHBOARD_SOLANA_DEVNET_CONFIG,
  SWITCHBOARD_SOLANA_MAINNET_CONFIG,
} from "@switchboard-xyz/common/networks";
import React from "react";

import AddressButton from "../AddressButton";
import AvatarIcon from "./AvatarIcon";

export default function SolanaAddresses(props?: {
  trim?: number;
  disableTestnet?: boolean;
}) {
  const mainnet = SWITCHBOARD_SOLANA_MAINNET_CONFIG;
  const devnet = SWITCHBOARD_SOLANA_DEVNET_CONFIG;
  const programAddress = mainnet.address;
  const attestationAddress = mainnet.attestationService;

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
            title="Deployment"
            image={`/img/icons/switchboard/logo.svg`}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <>
            <div>
              <strong>Program ID</strong>:{" "}
              <AddressButton address={programAddress} trim={12} />
            </div>

            <div>
              <strong>Attestation Program ID</strong>:{" "}
              <AddressButton address={attestationAddress} trim={12} />
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
          <AvatarIcon title="Mainnet" image={`/img/icons/solana/logo.svg`} />
        </Grid>
        <Grid item xs={12} md={10}>
          <>
            <div>
              <strong>Public Attestation Queue</strong>:{" "}
              <AddressButton
                address={mainnet.attestationQueues[0].address}
                trim={12}
              />
            </div>

            <div>
              <strong>Public Oracle Queue</strong>:{" "}
              <AddressButton address={mainnet.queues[0].address} trim={12} />
            </div>

            <div>
              <strong>Public Crank</strong>:{" "}
              <AddressButton
                address={mainnet.queues[0].crankAddress}
                trim={12}
              />
            </div>

            <div style={{ minHeight: "10px" }} />
            <div>
              <Typography sx={{ fontWeight: 700 }}>
                View our supported feeds in the{" "}
                <Link to="https://app.switchboard.xyz/solana/mainnet-beta">
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
              <AvatarIcon title="Devnet" image={`/img/icons/solana/logo.svg`} />
            </Grid>
            <Grid item xs={12} md={10}>
              <>
                <div>
                  <strong>Public Attestation Queue</strong>:{" "}
                  <AddressButton
                    address={devnet.attestationQueues[0].address}
                    trim={12}
                  />
                </div>

                <div>
                  <strong>Public Oracle Queue</strong>:{" "}
                  <AddressButton address={devnet.queues[0].address} trim={12} />
                </div>

                <div>
                  <strong>Public Crank</strong>:{" "}
                  <AddressButton
                    address={devnet.queues[0].crankAddress}
                    trim={12}
                  />
                </div>

                <div style={{ minHeight: "10px" }} />
                <div>
                  <Typography sx={{ fontWeight: 700 }}>
                    View our supported feeds in the{" "}
                    <Link to="https://app.switchboard.xyz/solana/devnet">
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
