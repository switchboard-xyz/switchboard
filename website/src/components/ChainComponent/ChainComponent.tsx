import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";
import { Typography, Box, Avatar, Grid, Tooltip } from "@mui/material";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";

export interface IChainProps {
  title: string;
  to: string;
  image: string;
  imageDark?: string;
  comingSoon?: boolean;
  sx?: any;
}

export interface ChainComponentProps {
  items: Array<IChainProps>;
  hideTitle?: boolean;
  sx?: any;
}

export default function ChainComponent({
  items,
  hideTitle,
  sx,
}: ChainComponentProps) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Grid
        container
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={3}
        sx={{ ...sx }}
      >
        {hideTitle ?? (
          <>
            <Grid item xs={12} sm={12} md={3}>
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
            </Grid>
          </>
        )}

        <Grid
          container
          item
          xs={12}
          sm={12}
          md={hideTitle ? 12 : 9}
          justifyContent="space-around"
          alignItems="center"
        >
          {items.map((item, index) => {
            return item.comingSoon ? (
              <Tooltip title="Coming Soon!">
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
                    style={{ width: 48, height: 48 }}
                  />
                  <Typography
                    variant="caption"
                    align="center"
                    sx={{
                      fontSize: "1rem",
                      color:
                        colorMode === "dark"
                          ? "var(--ifm-navbar-link-color)"
                          : "var(--ifm-color-primary-dark)",
                      // fontWeight: "var(--ifm-font-weight-semibold)",
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
                  style={{ width: 48, height: 48 }}
                />
                <Typography
                  variant="caption"
                  align="center"
                  sx={{
                    fontSize: "1rem",
                    color:
                      colorMode === "dark"
                        ? "var(--ifm-navbar-link-color)"
                        : "var(--ifm-color-primary-dark)",
                    fontWeight: "var(--ifm-font-weight-semibold)",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
