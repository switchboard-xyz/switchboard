import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Avatar, Box, styled, Tooltip, Typography } from "@mui/material";
import type { CSSProperties } from "react";
import React, { ReactNode } from "react";

interface IChainProps {
  title: string;
  to: string;
  image: string;
  comingSoon?: boolean;
  sx?: CSSProperties;
}

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

export default function ChainIcon({
  title,
  to,
  image,
  comingSoon,
  sx,
}: IChainProps) {
  const { colorMode } = useColorMode();

  return (
    <Box
      key={title + "Chain"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      component={Link}
      href={to}
      style={{ textDecoration: "none" }}
      sx={{
        p: 2,
        transition: "transform 0.15s ease-in-out",
        "&&&:hover": {
          transform: "scale3d(1.25, 1.25, 1)",
        },
      }}
    >
      <StyledAvatar src={image} />
      <Typography
        align="center"
        sx={{
          fontFamily: "Source Sans Pro",
          fontSize: 16,
          fontWeight: 600,
          color: colorMode === "dark" ? "white" : "#172B4D",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
