import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";
import React from "react";

// TODO: Add another component that will go into the Sidebar and hide the Navbar component
// For some reason we cant manually remove this element from the Navbar

const StyledBox = styled(Box)<{ dark: number }>(({ theme, dark }) => ({
  minWidth: "160px",
  fontSize: "inherit",
  color: "var(--ifm-navbar-link-color)",
  fontWeight: "var(--ifm-font-weight-semibold)",
  textAlign: "center",
  display: "block",
  [theme.breakpoints.down(996)]: {
    marginRight: "2.5rem",
  },
}));

const StyledLink = styled(Link)<{ dark: number; isLinkActive: boolean }>(
  ({ theme, dark, isLinkActive }) => ({
    padding:
      "var(--ifm-navbar-item-padding-vertical) var(--ifm-navbar-item-padding-horizontal)",
    minWidth: "40px",
    border: isLinkActive
      ? "1px solid var(--ifm-color-primary-dark)"
      : undefined,
    boxShadow: isLinkActive
      ? "2px 2px 5px var(--ifm-color-primary-dark)"
      : undefined,
    borderRadius: isLinkActive ? "5px" : undefined,
    // fontSize: isLinkActive ? "1.5rem" : undefined,
    [theme.breakpoints.down(996)]: {
      padding: "2rem 0.5rem",
    },
  })
);

const chains = [
  { label: "Aptos", path: "/aptos", className: "heading_icon__aptos" },
  { label: "Core", path: "/core", className: "heading_icon__coredao" },
  { label: "NEAR", path: "/near", className: "heading_icon__near" },
  { label: "Solana", path: "/solana", className: "heading_icon__solana" },
  { label: "StarkNet", path: "/starknet", className: "heading_icon__starknet" },
  { label: "Sui", path: "/sui", className: "heading_icon__sui" },
];

const SupportedChainsNavbarItem = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const { colorMode } = useColorMode();

  return (
    <>
      <div className="navbar__logo">
        <Link to="/">
          <img src="/img/logo.svg" />
        </Link>
      </div>
      <StyledBox className="navbar__item" dark={colorMode === "dark" ? 1 : 0}>
        <Grid
          container
          rowSpacing={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ maxWidth: "30vw", minWidth: "10vw" }}
          xs={10}
        >
          {chains.map(({ label, path, className }) => (
            <Grid item xs={3}>
              <StyledLink
                isLinkActive={
                  location.pathname.includes(useBaseUrl(path)) ? true : false
                }
                dark={colorMode === "dark" ? 1 : 0}
                className={`navbar__link ${className}`}
                to={useBaseUrl(path)}
              />
            </Grid>
          ))}
        </Grid>
      </StyledBox>
    </>
  );
};

export default SupportedChainsNavbarItem;
