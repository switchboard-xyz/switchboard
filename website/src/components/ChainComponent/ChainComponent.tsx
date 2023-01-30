import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";
import { Typography, Box, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { useColorMode } from "@docusaurus/theme-common";

export interface IChainProps {
  title: string;
  to: string;
  image: string;
  imageDark?: string;
  sx?: any;
}

export interface ChainComponentProps {
  items: Array<IChainProps>;
  radius: number;
}

export default function ChainComponent({ items, radius }: ChainComponentProps) {
  const { colorMode } = useColorMode();
  const count = items.length;
  const angle = 180 / (count - 1);
  const center = radius + 50;

  return (
    <Box sx={{ height: 1.25 * center, width: "100%" }}>
      {items.map((item, index) => {
        const x =
          2 * radius + radius * Math.cos((angle * index * Math.PI) / 180);
        const y =
          2 * radius + radius * Math.sin((angle * index * Math.PI) / 180);
        return (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            key={item.title + "Chain"}
            component={Link}
            href={item.to}
            style={{ textDecoration: "none" }}
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: y,
              left: x,
            }}
          >
            <Avatar
              src={
                colorMode === "dark" && item.imageDark
                  ? item.imageDark
                  : item.image
              }
              style={{ width: 48, height: 48 }}
            />
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontSize: "1.25rem",
                color: "var(--ifm-navbar-link-color)",
                fontWeight: "var(--ifm-font-weight-bold)",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
