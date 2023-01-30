import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import { useColorMode } from "@docusaurus/theme-common";

export interface RoundedCardProps {
  title: string;
  to: string;
  image: ReactNode;
  imageDark?: ReactNode;
  sx?: any;
}

export default function RoundedCard({
  title,
  image,
  imageDark,
  to,
  sx,
}: RoundedCardProps) {
  const { colorMode } = useColorMode();

  return (
    <Link href={to} style={{ textDecoration: "none" }}>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <Grid item xs={12} md={6}>
          <div
            style={{
              height: 48,
              width: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {colorMode === "dark" && imageDark ? imageDark : image}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            fontSize: "1.25rem",
            color: "var(--ifm-navbar-link-color)",
            fontWeight: "var(--ifm-font-weight-bold)",
          }}
        >
          <Typography variant="h5">{title}</Typography>
        </Grid>
      </Grid>
    </Link>
  );
}
