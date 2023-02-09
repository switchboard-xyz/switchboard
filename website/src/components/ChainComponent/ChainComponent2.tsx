import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";
import { Typography, Box, Avatar, Grid } from "@mui/material";
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
}

export default function ChainComponent2({ items }: ChainComponentProps) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Grid
        container
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={3}
      >
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
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={9}
          justifyContent="space-around"
          alignItems="center"
        >
          {items.map((item, index) => {
            return (
              <>
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
                      color:
                        colorMode === "dark"
                          ? "var(--ifm-navbar-link-color)"
                          : "var(--ifm-color-primary-dark)",
                      fontWeight: "var(--ifm-font-weight-bold)",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
