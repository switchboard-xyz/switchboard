import useBaseUrl from "@docusaurus/useBaseUrl";
import { Box } from "@mui/material";
import React from "react";

interface ComingSoonProps {
  sx?: any;
}

export default function ComingSoon(props: ComingSoonProps) {
  let sx: any = {
    textTransform: "none",
    color: "var(--ifm-color-primary-light)",
    fontWeight: 800,
    margin: 0,
  };
  if (props.sx) {
    sx = {
      ...sx,
      ...props.sx,
    };
  }

  return (
    <Box sx={{ display: "flex", height: "7rem", ...sx }}>
      <img src={useBaseUrl("/img/icons/coming-soon/coming-soon.svg")} />
    </Box>
  );
}
