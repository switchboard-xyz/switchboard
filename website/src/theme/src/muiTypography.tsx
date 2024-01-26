import createTypography from "@mui/material/styles/createTypography";

import { theme } from ".";
import Palette from "./palette";
import firaCodeFamily from "./typography/firaCode";
import snasmFamily from "./typography/snasm";

export const MuiTypography = createTypography(Palette, (palette) => ({
  fontFamily: ["Source Sans Pro", firaCodeFamily, snasmFamily].join(","),
  fontPrimary: "Source Sans Pro",
  root: {
    fontFamily: "Snasm",
    fontSize: 16,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: theme.palette.pageText.title,
    marginRight: 12,
  },

  h1: {
    fontFamily: "Snasm",
    fontSize: 56,
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.21,
    letterSpacing: 0.08,
    color: theme.palette.pageText.title,
    [theme.breakpoints.down("sm")]: {
      fontSize: 42,
      lineHeight: 1.28,
      letterSpacing: -2.23,
    },
  },

  h2: {
    fontFamily: "Source Sans Pro",
    fontSize: 32,
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.03,
    letterSpacing: 2.91,
    color: theme.palette.pageText.title,
  },

  h3: {
    fontFamily: "Source Sans Pro",
    fontSize: 22,
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.5,
    letterSpacing: 2,
    color: theme.palette.pageText.title,
    [theme.breakpoints.down("sm")]: {
      fontSize: 15.4,
      letterSpacing: "1.4px",
    },
  },

  subtitle1: {
    fontFamily: "Source Sans Pro",
    fontSize: 18,
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.83,
    letterSpacing: 1.64,
    color: theme.palette.blue,
  },

  subtitle2: {},

  body1: {
    fontFamily: "Source Sans Pro",
    fontSize: 20,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.6,
    letterSpacing: 0.49,
    color: theme.palette.pageText.body,
    [theme.breakpoints.down("sm")]: {
      fontSize: 17,
      lineHeight: 1.5,
      letterSpacing: 0.7,
    },
  },

  body2: {
    fontFamily: "Source Sans Pro",
    fontSize: 17,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.53,
    letterSpacing: 0.5,
    color: theme.palette.pageText.body,
  },

  button: {},

  gutterBottom: {
    marginBottom: "8px",
  },
}));

export default MuiTypography;
