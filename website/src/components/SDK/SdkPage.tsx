import { Button, Grid, Tooltip, Typography } from "@mui/material";
import CodeBlock from "@theme/CodeBlock";
import React from "react";

import { capitalizeFirstLetterOfEachWord } from "../Addresses/utils";

interface SdkPageProps {
  chain: string;
  repo: string;
  sdks: { language: string; name: string; href: string }[];
}

export default function SdkPage(props: SdkPageProps) {
  const chainTitleCase = capitalizeFirstLetterOfEachWord(props.chain);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Switchboard x {chainTitleCase}</h1>
        <blockquote>
          <p>
            A collection of libraries and examples for interacting with
            Switchboard on {chainTitleCase}.
          </p>
        </blockquote>
      </div>
      {/* <Grid container>
        <Grid item>
          <Typography>
            &nbsp;You can clone the {chainTitleCase} SDK with the following:
          </Typography>
          <CodeBlock language="bash">
            git clone https://github.com/switchboard-xyz/{props.repo}
          </CodeBlock>
        </Grid>
        <Grid item></Grid>
      </Grid> */}
    </>
  );
}
