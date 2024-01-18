import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import { Avatar, Box, styled, Typography } from "@mui/material";
import type { CSSProperties } from "react";
import React, { ReactNode } from "react";

interface IAvatarIconProps {
  title?: string;
  image: string;
  to?: string;
  sx?: any;
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

export default function AvatarIcon(props: IAvatarIconProps) {
  const { colorMode } = useColorMode();
  const { title, to, image } = props;
  let sx: any = { p: 2 };
  if (props.sx) {
    sx = {
      ...sx,
      ...props.sx,
    };
  }

  return to ? (
    <Box
      key={title + "AvatarIcon"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      component={Link}
      href={to}
      style={{ textDecoration: "none" }}
      sx={sx}
    >
      <StyledAvatar src={image} />
      {title ? (
        <Typography
          align="center"
          sx={{
            fontFamily: "Geist",
            fontSize: 12,
            fontWeight: 600,
            color: colorMode === "dark" ? "white" : "#0458D7",
          }}
        >
          {title}
        </Typography>
      ) : (
        <></>
      )}
    </Box>
  ) : (
    <Box
      key={title + "AvatarIcon"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ textDecoration: "none" }}
      sx={sx}
    >
      <StyledAvatar src={image} />
      {title ? (
        <Typography
          align="center"
          sx={{
            fontFamily: "Geist",
            fontSize: 12,
            fontWeight: 600,
            color: colorMode === "dark" ? "white" : "#252A31",
          }}
        >
          {title}
        </Typography>
      ) : (
        <></>
      )}
    </Box>
  );
}
