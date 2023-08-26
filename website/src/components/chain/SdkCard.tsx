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

export default function SdkCard(props: { sdk: SdkType }) {
  const { colorMode } = useColorMode();
  const { sdk } = props;
  const config = CONFIG_MAP.get(sdk);

  return (
    <>
      <StyledCard dark={Number(colorMode === "dark")}>
        <Grid
          container
          spacing={1}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <AvatarIcon sx={{ p: 1 }} title="" image={config.icon.light} />
          </Grid>
          <Grid itemScope>
            <h3 className="landing_page" style={{ padding: "10px" }}>
              {capitalizeFirstLetterOfEachWord(sdk) + " SDK"}
            </h3>
          </Grid>
          <Grid container item flex={2}>
            <Link to={config.sdk.js.link} style={{ marginLeft: "auto" }}>
              <IconButton sx={{ color: "#4C6FFF" }}>
                <JavascriptIcon fontSize="large" />
              </IconButton>
            </Link>
            <Link to={config.git} style={{ marginLeft: "0px" }}>
              <IconButton sx={{ color: "#4C6FFF" }}>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <AvatarIcon title="" image={config.icon.light} />
          <h3 className="landing_page">
            {capitalizeFirstLetterOfEachWord(sdk) + " SDK"}
          </h3>
          <Link to={config.git} style={{ marginLeft: "auto" }}>
            <IconButton sx={{ color: "#4C6FFF" }}>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Link>
        </div> */}
        <Grid container>
          <Grid item xs={12} md={3}>
            <Typography>Quick Links</Typography>
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
            </ul>
            {config.links.map((l) => {
              return (
                <li>
                  <Link to={l.link}>{l.label}</Link>
                </li>
              );
            })}
            <Typography>Libraries</Typography>
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
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>{`Clone the Switchboard x ${capitalizeFirstLetterOfEachWord(
              sdk
            )} SDK to get started:`}</Typography>
            <CodeBlock language="bash">{`git clone ${config.git}`}</CodeBlock>
            <Typography>Examples</Typography>
            <ul>
              {config.examples.map((e) => {
                return (
                  <li key={e.label}>
                    <Link to={e.link}>{e.label}</Link>
                  </li>
                );
              })}
            </ul>
          </Grid>
        </Grid>
      </StyledCard>
    </>
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
