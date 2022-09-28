import React from "react";
import { Grid } from "@mui/material";
import RoundedCard, { RoundedCardProps } from "./RoundedCard";

export interface RoundedCardGroupProps {
  items: RoundedCardProps[];
  cols?: number;
}

export default function RoundedCardGroup({
  items,
  cols,
}: RoundedCardGroupProps) {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={12} md={12 / 2} lg={12 / (cols ?? 2)}>
          <RoundedCard
            title={item.title}
            image={item.image}
            imageDark={item.imageDark}
            to={item.to}
            description={item.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
