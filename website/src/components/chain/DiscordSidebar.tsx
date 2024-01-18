import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import { Button, Grid, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";

export default function DiscordSidebar(props: { children: React.ReactNode }) {
  const { colorMode } = useColorMode();

  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item md={9} xs={12}>
        {/* Content for the main section */}
        {props.children}
      </Grid>
      <Grid item md={3} xs={12}>
        <div style={{ marginTop: "10px", textAlign: "right" }}>
          {/* Content for the right sidebar */}
          <Typography variant="body2" style={{ marginBottom: "10px", font: "inherit", fontSize: "16px" }}>
            For support, ask ahead in our Discord developer community:
          </Typography>
          <Button variant="outlined" href="https://discord.gg/switchboardxyz" color="inherit" size="large" disableElevation>
            #dev-solana
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
