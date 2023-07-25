import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/system";
import type { ReactNode } from "react";
import React from "react";

const StyledCard = styled(Card)<{ dark: number }>(({ theme, dark }) => ({
  display: "flex",
  flexDirection: "row",
  justifyItems: "baseline",
  background: dark ? "rgba(42, 56, 68, 1)" : "rgba(255, 255, 255, 0.6)",
  border: `${dark ? 0.15 : 0.1}rem solid var(--ifm-navbar-link-color)`,
  borderRadius: "13.2px",
  boxShadow: `0 6px 7px 5px rgba(${
    dark ? "107 107 107" : "107 107 107"
  }, 0.03)`,
  boxSizing: "border-box",
  m: 4,
  p: 4,
  width: "100%",
  height: "100%",
  verticalAlign: "middle",
  textDecoration: "none",
  [theme.breakpoints.down(300)]: {
    paddingLeft: "",
  },
  transition: "transform 0.15s ease-in-out",
  "&&&:hover": {
    background: dark ? "rgba(42, 56, 68, 1)" : "white",
    transform: "scale3d(1.05, 1.05, 1)",
  },
}));

const CustomListItem = styled(ListItem)(({ theme }) => ({
  fontWeight: 900,
  textDecoration: "none",
  "&::before": {
    content: '"\\00BB"',
    paddingRight: theme.spacing(1),
    // color: theme.palette.primary.main,
  },
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  display: "flex",
  maxHeight: "96px",
}));

interface SectionCardProps {
  title: string;
  description: string;
  links: Array<{ href: string; text: string }>;
  image: ReactNode;
  imageDark?: ReactNode;
  sx?: any;
}

export default function SectionCard({
  title,
  description,
  links,
  image,
  imageDark,
  sx,
}: SectionCardProps) {
  const { colorMode } = useColorMode();

  return (
    // <Link href={to} style={{ textDecoration: "none" }}>
    <StyledCard dark={colorMode === "dark" ? 1 : 0} sx={sx}>
      <CardContent sx={{ height: "100%", width: "100%" }}>
        <Grid container justifyContent="space-between">
          <Grid item md={4} xs={12}>
            <StyledCardHeader
              avatar={
                <div
                  style={{
                    height: 48,
                    width: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {colorMode === "dark" && imageDark ? imageDark : image}
                </div>
              }
              title={title}
              titleTypographyProps={{
                fontSize: "1.25rem",
                color: "var(--ifm-navbar-link-color)",
                fontWeight: "var(--ifm-font-weight-bold)",
              }}
            />
            {description ? (
              <>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{
                    color: "var(--ifm-navbar-link-color)",
                    fontSize: "1.1rem",
                    paddingLeft: 2,
                  }}
                >
                  {description}
                </Typography>
              </>
            ) : (
              <></>
            )}
          </Grid>
          <Grid item md={4} xs={12}>
            {/* <Typography
              variant="button"
              // component="h5"
              sx={{
                color: "var(--ifm-navbar-link-color)",
                fontSize: "1.1rem",
              }}
            >
              Quick Links
            </Typography> */}
            <List>
              {links.map((link, index) => (
                <CustomListItem key={index} disableGutters>
                  <Link to={link.href}>{link.text}</Link>
                </CustomListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
}
