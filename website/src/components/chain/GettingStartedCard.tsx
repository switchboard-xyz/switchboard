import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Grid, IconButton, styled, Typography } from "@mui/material";
import type { IChainNetworkConfig } from "@switchboard-xyz/common";
import React from "react";

import { capitalizeFirstLetterOfEachWord } from "../../utils";
import type { SdkType } from "./config";
import { CONFIG_MAP } from "./config";

interface GettingStartedProps {
  chain: SdkType;
}

function GettingStartedCard(props: GettingStartedProps) {
  const { chain } = props;

  const githubRepo = `https://github.com/switchboard-xyz/${chain}-sdk`;
  const config = CONFIG_MAP.get(chain)!;
  const icons = config.icon;

  return (
    <Grid item key={chain}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledIconContainer dark={0}>
          <img src={icons.light} height={20} width={20} />
        </StyledIconContainer>
        <h3 className="landing_page">
          {capitalizeFirstLetterOfEachWord(chain)}
        </h3>
      </div>
      <Typography sx={{ fontSize: "18px", fontFamily: "Source Sans Pro" }}>
        TBD
      </Typography>
    </Grid>
  );
}

const StyledCard = styled("div")<{ dark: number }>(({ dark }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  padding: "32px",
  gap: "16px",
  border: "solid 1px #E8E8E8",
  borderRadius: "16px",
  flexDirection: "column",
  boxShadow: "0 11px 15px 0 rgba(164, 164, 164, 0.21)",
}));

const StyledIconContainer = styled("div")<{ dark?: number }>(({ dark }) => ({
  minHeight: 36,
  minWidth: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: dark ? "#1B1B1D" : "#F9FBFD",
  border: `solid 1px ${dark ? "#FFFFFF26" : "#EAEEF3"}`,
  marginRight: "16px",
}));

export default GettingStartedCard;
