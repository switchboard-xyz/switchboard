import React from "react";
import Link from "@docusaurus/Link";
import { Box, Grid, Tooltip } from "@mui/material";

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
        <span>
          {" > "}
          {item.label}
        </span>
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
      <Grid container justifyContent="flex-start" alignItems="flex-start">
        {items.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.label}
              className="display-linebreak tsd-panel-content"
            >
              {withTooltip(item)}
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
}
