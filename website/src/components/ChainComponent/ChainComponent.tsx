import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Avatar, Box, styled, Tooltip, Typography } from "@mui/material";
import type { CSSProperties } from "react";
import React, { ReactNode } from "react";

export interface IChainProps {
  title: string;
  to: string;
  image: string;
  comingSoon?: boolean;
  sx?: CSSProperties;
}

interface ChainComponentProps {
  hideTitle: boolean;
  sx?: CSSProperties;
}
const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: 900,
  justifyContent: "space-between",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    border: "solid 1px #E8E8E8",
    borderRadius: "16px",
    justifyContent: "flex-start",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  marginBottom: "8px",
  backgroundColor: "white",
  boxShadow: "0px 1px 3px 0px rgba(33, 27, 78, 0.15)",
  [theme.breakpoints.down("md")]: {
    width: 32,
    height: 32,
  },
  "& .MuiAvatar-img": {
    width: 24,
    height: 24,
    [theme.breakpoints.down("md")]: {
      width: 16,
      height: 16,
    },
  },
}));

export default function ChainComponent({ hideTitle, sx }: ChainComponentProps) {
  const { colorMode } = useColorMode();

  const items: Array<IChainProps> = [
    {
      to: "/aptos",
      title: "Aptos",
      image: useBaseUrl("/img/icons/aptos/logo.svg"),
    },
    {
      to: "/evm",
      title: "Arbitrum",
      image: useBaseUrl("/img/icons/arbitrum/logo.svg"),
    },
    {
      to: "/evm",
      title: "Core",
      image: useBaseUrl("/img/icons/coredao/logo.svg"),
    },
    {
      to: "/near",
      title: "Near",
      image: useBaseUrl("/img/icons/near/logo.svg"),
    },
    {
      to: "/solana",
      title: "Solana",
      image: useBaseUrl("/img/icons/solana/logo.svg"),
    },
    {
      to: "/sui",
      title: "Sui",
      image: useBaseUrl("/img/icons/sui/logo.svg"),
    },
    {
      to: "#",
      title: "StarkNet",
      image: useBaseUrl("/img/icons/starknet/logo.svg"),
      comingSoon: true,
    },
  ];

  return (
    <StyledContainer sx={sx}>
      {hideTitle ?? (
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: "1.5rem",
            color:
              colorMode === "dark"
                ? "var(--ifm-navbar-link-color)"
                : "var(--ifm-navbar-link-color)",
            fontWeight: "var(--ifm-font-weight-bold)",
          }}
        >
          Integrate Switchboard Today!
        </Typography>
      )}

      {items.map((item, index) => {
        return item.comingSoon ? (
          <Tooltip key={item.title + "Chain"} title="Coming Soon!">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              component={Link}
              href={item.to}
              style={{ textDecoration: "none" }}
              sx={{
                p: 2,
                opacity: "0.5",
              }}
            >
              <StyledAvatar src={item.image} style={{}} />
              <Typography
                align="center"
                sx={{
                  fontFamily: "Source Sans Pro",
                  fontSize: 16,
                  fontWeight: 600,
                  color: colorMode === "dark" ? "white" : "#172B4D", // fontWeight: "var(--ifm-font-weight-semibold)",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Tooltip>
        ) : (
          <Box
            key={item.title + "Chain"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            component={Link}
            href={item.to}
            style={{ textDecoration: "none" }}
            sx={{
              p: 2,
              transition: "transform 0.15s ease-in-out",
              "&&&:hover": {
                transform: "scale3d(1.25, 1.25, 1)",
              },
            }}
          >
            <StyledAvatar src={item.image} />
            <Typography
              align="center"
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: 16,
                fontWeight: 600,
                color: colorMode === "dark" ? "white" : "#172B4D",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        );
      })}
    </StyledContainer>
  );
}
