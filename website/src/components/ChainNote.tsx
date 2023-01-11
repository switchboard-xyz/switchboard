import React from "react";
import { Typography, Box } from "@mui/material";
import { AptosIcon } from "./icons/AptosIcon";
import { NearIcon } from "./icons/NearIcon";
import { SolanaIcon } from "./icons/SolanaIcon";

export interface ChainNoteProps {
  chain: "aptos" | "near" | "solana";
  note: string;
  sx?: any;
}

export default function ChainNote({ chain, note, sx }: ChainNoteProps) {
  return (
    <>
      <Box display="flex" alignItems="center" sx={{ padding: "1rem", ...sx }}>
        {chain === "aptos" ? (
          <AptosIcon />
        ) : chain === "near" ? (
          <NearIcon />
        ) : (
          <SolanaIcon />
        )}
        <Typography
          display="inline"
          sx={{ padding: "0rem 0.5rem", fontWeight: "bold" }}
        >
          {" "}
          Note:{" "}
        </Typography>
        <Typography display="inline">{note}</Typography>
      </Box>
    </>
  );
}
