import React from "react";
import Link from "@docusaurus/Link";
import { Typography, Card, CardActionArea, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";

const StyledCard = styled(Card)<{ dark: number }>(({ theme, dark }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  textAlign: "left",
  minWidth: "50%",
  backgroundColor: dark ? "rgba(53, 76, 79, 0.4)" : "rgba(200, 202, 204, 0.4)",
  position: "relative",
  borderRadius: "13.2px",
  boxShadow: `0 6px 7px 5px rgba(${
    dark ? "107 107 107" : "107 107 107"
  }, 0.03)`,
  [theme.breakpoints.down(300)]: {
    paddingLeft: "",
  },
  "&:hover": {
    background: dark ? "rgba(42, 56, 68, 1)" : theme.palette.white,
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  whiteSpace: "nowrap",
  fontSize: 22,
  marginLeft: "22px",
  fontWeight: 600,
  letterSpacing: "0.16px",
  [theme.breakpoints.down(300)]: {
    marginLeft: "10px",
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: 18.5,
  margin: "20px 0px 0px",
  // height: "110px",
  minHeight: "50px",
  lineHeight: 1.29,
  letterSpacing: "0.44px",
  [theme.breakpoints.down(400)]: {
    fontSize: "17px",
  },
  [theme.breakpoints.down(300)]: {
    fontSize: 13,
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: "21px",
  [theme.breakpoints.down(300)]: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
}));

export interface RoundedCardProps {
  title: string;
  image: string;
  description: string;
  linkTo: string;
  style: any;
}

export default function RoundedCard({
  title,
  image,
  description,
  linkTo,
  style,
}: RoundedCardProps) {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <StyledCard dark={colorMode === "dark" ? 1 : 0}>
      <CardActionArea LinkComponent={Link} href={linkTo}>
        <StyledCardContent>
          <StyledTitle
            sx={{
              color: colorMode === "dark" ? "#dbdbdb" : "#0b3863",
            }}
          >
            {title}
          </StyledTitle>
          <StyledDescription
            variant="body2"
            sx={{
              color: colorMode === "dark" ? "#dbdbdb" : "#313e79",
            }}
          >
            {description}
          </StyledDescription>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}
