import React, { CSSProperties, ReactNode } from "react";
import Link from "@docusaurus/Link";
import { Typography, Box, Avatar, Grid, Tooltip, SxProps } from "@mui/material";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";

export interface IChainProps {
  title: string;
  to: string;
  image: string;
  imageDark?: string;
  comingSoon?: boolean;
  sx?: CSSProperties;
}

interface ChainComponentProps {
  hideTitle: boolean;
  sx?: CSSProperties;
}

export default function ChainComponent({ hideTitle, sx }: ChainComponentProps) {
  const { colorMode } = useColorMode();

  const items: Array<IChainProps> = [
    {
      to: "/aptos",
      title: "Aptos",
      image: useBaseUrl("/img/icons/aptos/logo.svg"),
      imageDark: useBaseUrl("/img/icons/aptos/dark.svg"),
    },
    {
      to: "/arbitrum",
      title: "Arbitrum",
      image: useBaseUrl("/img/icons/arbitrum/logo.svg"),
      imageDark: useBaseUrl("/img/icons/arbitrum/logo.svg"),
    },
    {
      to: "/coredao",
      title: "CoreDAO",
      image: useBaseUrl("/img/icons/coredao/logo.svg"),
      imageDark: useBaseUrl("/img/icons/coredao/dark.svg"),
    },
    {
      to: "/near",
      title: "Near",
      image: useBaseUrl("/img/icons/near/logo.svg"),
      imageDark: useBaseUrl("/img/icons/near/dark.svg"),
    },
    {
      to: "/solana",
      title: "Solana",
      image: useBaseUrl("/img/icons/solana/logo.svg"),
      imageDark: useBaseUrl("/img/icons/solana/logo.svg"),
    },
    {
      to: "/sui",
      title: "Sui",
      image: useBaseUrl("/img/icons/sui/logo.svg"),
      imageDark: useBaseUrl("/img/icons/sui/dark.svg"),
    },
    {
      to: "#",
      title: "StarkNet",
      image: useBaseUrl("/img/icons/starknet/logo.svg"),
      imageDark: useBaseUrl("/img/icons/starknet/dark.svg"),
      comingSoon: true,
    },
  ];

  return (
    <div
      style={{
        ...sx,
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 900,
        justifyContent: "space-between",
      }}
    >
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
              <Avatar
                variant="rounded"
                src={
                  colorMode === "dark" && item.imageDark
                    ? item.imageDark
                    : item.image
                }
                style={{ width: 48, height: 48, marginBottom: "8px" }}
              />
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
            <Avatar
              variant="rounded"
              src={
                colorMode === "dark" && item.imageDark
                  ? item.imageDark
                  : item.image
              }
              style={{ width: 48, height: 48, marginBottom: "8px" }}
            />
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
    </div>
  );
}
