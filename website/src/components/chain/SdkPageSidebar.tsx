import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { Box, Grid, IconButton, styled, Typography } from "@mui/material";
import { capitalizeFirstLetterOfEachWord } from "@site/src/utils";
import CodeBlock from "@theme/CodeBlock";
import React from "react";

import AvatarIcon from "./AvatarIcon";
import type { SdkType } from "./config";
import { CONFIG_MAP } from "./config";

export default function SdkCard(props: {
  sdk: SdkType;
  children: React.ReactNode;
}) {
  const { colorMode } = useColorMode();
  const { sdk } = props;
  const config = CONFIG_MAP.get(sdk);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item md={9} xs={12}>
        {props.children}
      </Grid>
      <Grid item md={3} xs={12}>
        <h2 className="landing_page">SDKs</h2>
        <ul>
          <li>
            <Link to={config.sdk.js.link}>{config.sdk.js.label}</Link>
          </li>
          {config.sdk.rust ? (
            <li>
              <Link to={config.sdk.rust.link}>{config.sdk.rust.label}</Link>
            </li>
          ) : (
            <></>
          )}
          {config.sdk.move ? (
            <li>
              <Link to={config.sdk.move.link}>{config.sdk.move.label}</Link>
            </li>
          ) : (
            <></>
          )}
          <li>
            <Link to="/api/cli">Sb Cli</Link>
          </li>
          {config.sdk.solidity ? (
            config.sdk.solidity.map((s) => {
              return (
                <li key={s.label}>
                  <Link to={s.link}>{s.label}</Link>
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ul>
        <h2 className="landing_page">Quick Links</h2>
        <ul>
          <li>
            <Link to={`/${sdk}`}>Getting Started</Link>
          </li>
          <li>
            <Link to={`/${sdk}/dev`}>Developer Resources</Link>
          </li>
          <li>
            <Link to={config.git}>Github SDK</Link>
          </li>
          {config.links.map((l) => {
            return (
              <li>
                <Link to={l.link}>{l.label}</Link>
              </li>
            );
          })}
        </ul>
        <p>
          For support, ask a question in Discord{" "}
          <Link to={config.discord}>{`#dev-${sdk}`}</Link>
        </p>
      </Grid>
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
