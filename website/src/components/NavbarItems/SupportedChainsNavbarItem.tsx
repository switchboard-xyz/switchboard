import { useColorMode } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";

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

const StyledLink = styled(Link)<{ dark: number }>(({ theme, dark }) => ({
  padding:
    "var(--ifm-navbar-item-padding-vertical) var(--ifm-navbar-item-padding-horizontal)",
  minWidth: "40px",
  [theme.breakpoints.down(996)]: {
    padding: "2rem 0.5rem",
  },
}));

const SupportedChainsNavbarItem = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const { colorMode } = useColorMode();

  return (
    <StyledBox className="navbar__item" dark={colorMode === "dark" ? 1 : 0}>
      {isMobile ? <></> : <div>Chains</div>}
      <StyledLink
        dark={colorMode === "dark" ? 1 : 0}
        className="navbar__link header-aptos-link "
        to={useBaseUrl("/aptos")}
      />
      <StyledLink
        dark={colorMode === "dark" ? 1 : 0}
        className="navbar__link header-near-link"
        to={useBaseUrl("/near")}
      />
      <StyledLink
        dark={colorMode === "dark" ? 1 : 0}
        className="navbar__link header-solana-link"
        to={useBaseUrl("/solana")}
      />
    </StyledBox>
  );
};

export default SupportedChainsNavbarItem;
