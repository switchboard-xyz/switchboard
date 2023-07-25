import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ComingSoonPopover() {
  return (
    <div>
      <Popover
        id={"simple-popover"}
        open={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            transform: "rotate(-30deg)",
            color: "#F47174",
            display: "flex",
          }}
        >
          <AccessTimeIcon fontSize="large" />
          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: "bold", color: "#F47174" }}
          >
            Coming Soon!
          </Typography>
        </Box>
      </Popover>
    </div>
  );
}
