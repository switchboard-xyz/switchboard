import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, Tooltip, Typography } from "@mui/material";
import React from "react";

interface AddressButtonProps {
  address: string;
  trim?: number;
  sx?: any;
}

export default function AddressButton(props: AddressButtonProps) {
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

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = props.address;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <Tooltip title="copy to clipboard" aria-label="copy to clipboard" arrow>
      <Button
        variant="text"
        size="small"
        startIcon={
          <ContentCopyIcon
            sx={{ fill: "var(--ifm-color-primary-darkest)" }}
            fontSize="small"
          />
        }
        onClick={copyToClipboard}
      >
        <Typography sx={sx} color="textSecondary">
          {trimString(props.address, props.trim)}
        </Typography>
      </Button>
    </Tooltip>
  );
}

function trimString(str: string, trim?: number): string {
  if (!trim || trim === 0 || str.length === 0 || str.length < trim) {
    return str;
  }

  const trimCount = trim;

  const trimIndex = Math.floor(str.length / 2);

  const startingIndex =
    trimCount % 2 === 0
      ? trimIndex - trimCount / 2
      : trimIndex - Math.floor(trimCount / 2) - 1;
  const endingIndex =
    trimCount % 2 === 0
      ? trimIndex + trimCount / 2
      : trimIndex - Math.floor(trimCount / 2);
  return `${str.slice(0, startingIndex)}...${str.slice(
    endingIndex,
    str.length
  )}`;
}
