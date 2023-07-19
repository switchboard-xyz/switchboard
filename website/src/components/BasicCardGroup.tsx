import Link from "@docusaurus/Link";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";

export interface BasicCardItem {
  label: string;
  link: string;
  tooltip?: string;
}
export interface BasicCardProps {
  title: string;
  description?: string;
  items: Array<BasicCardItem>;
  sx?: any;
}

export default function BasicCard({
  title,
  description,
  items,
  sx,
}: BasicCardProps) {
  const withTooltip = (item: BasicCardItem) => {
    const linkComponent = (
      <Link to={item.link}>
        <Typography sx={{ margin: "0px 50px", padding: "0px 10px" }}>
          {" > "}
          {item.label}
        </Typography>
      </Link>
    );
    return item.tooltip ? (
      <Tooltip title={item.tooltip ?? item.label} arrow>
        {linkComponent}
      </Tooltip>
    ) : (
      linkComponent
    );
  };

  return (
    <section className="tsd-panel">
      <h3 className="tsd-panel-header">{title}</h3>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        {items.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.label}
              className="display-linebreak"
              sx={{ margin: "10px 0" }}
            >
              {withTooltip(item)}
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
}
