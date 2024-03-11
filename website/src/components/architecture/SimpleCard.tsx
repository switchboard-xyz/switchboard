// SimpleCard.tsx
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import { Grid, styled, Typography } from "@mui/material";
import React from "react";

interface SimpleCardProps {
  title: string;
  content: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title, content }) => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <StyledCard dark={Number(colorMode === "dark")} className="simple-card-container">
        <Grid container spacing={1} justifyContent="flex-start" alignItems="top">
          <Grid item xs={12}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: content }} />
          </Grid>
        </Grid>
      </StyledCard>
    </div>
  );
};

const StyledCard = styled("div")<{ dark: number }>(({ dark }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  padding: "32px",
  gap: "16px",
  border: "solid 1px #E8E8E8",
  borderRadius: "16px",
  flexDirection: "column",
  boxShadow: "0 11px 15px 0 rgba(164, 164, 164, 0.21)",
}));

export default SimpleCard;
