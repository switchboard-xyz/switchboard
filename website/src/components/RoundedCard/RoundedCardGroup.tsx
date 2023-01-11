import React from "react";
import { Grid } from "@mui/material";
import RoundedCard, { RoundedCardProps } from "./RoundedCard";

export interface RoundedCardGroupProps {
  items: RoundedCardProps[];
  cols?: number;
  sx?: any;
}

export default function RoundedCardGroup({
  items,
  cols,
  sx,
}: RoundedCardGroupProps) {
  // const lg = Math.floor(12 / Math.min(cols ?? 2, items.length));

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid
          item
          style={{ flexGrow: 1 }}
          xs={12}
          md={6}
          lg={Math.floor(12 / cols ?? 2)}
        >
          <RoundedCard
            title={item.title}
            image={item.image}
            imageDark={item.imageDark}
            to={item.to}
            description={item.description}
            sx={sx}
          />
        </Grid>
      ))}
    </Grid>
  );
}
