import { useColorMode } from "@docusaurus/theme-common";
import { useLocation } from "react-router-dom";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography, Tooltip } from "@mui/material";

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

const SupportedChainsNavbarItem = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const { colorMode } = useColorMode();

  return (
    <StyledBox className="navbar__item" dark={colorMode === "dark" ? 1 : 0}>
      {isMobile ? <></> : <div>Chains</div>}
      <Tooltip title={<h4>Aptos</h4>}>
        <StyledLink
          isLinkActive={
            location.pathname.includes(useBaseUrl("/aptos")) ? true : false
          }
          dark={colorMode === "dark" ? 1 : 0}
          className="navbar__link header-aptos-link "
          to={useBaseUrl("/aptos")}
        />
      </Tooltip>
      <Tooltip title={<h4>NEAR</h4>}>
        <StyledLink
          isLinkActive={
            location.pathname.includes(useBaseUrl("/near")) ? true : false
          }
          dark={colorMode === "dark" ? 1 : 0}
          className="navbar__link header-near-link"
          to={useBaseUrl("/near")}
        />
      </Tooltip>
      <Tooltip title={<h4>Solana</h4>}>
        <StyledLink
          isLinkActive={
            location.pathname.startsWith(useBaseUrl("/solana")) ? true : false
          }
          dark={colorMode === "dark" ? 1 : 0}
          className="navbar__link header-solana-link"
          to={useBaseUrl("/solana")}
        />
      </Tooltip>
    </StyledBox>
  );
};

export default SupportedChainsNavbarItem;
