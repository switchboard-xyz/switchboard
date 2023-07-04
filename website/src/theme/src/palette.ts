import createPalette from "@mui/material/styles/createPalette";

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  blue: "#4C6FFF",
  darkBlue: "#3D557A",
  gray: "#7A869A",
  lightGray: "#f3f4f7",
  grayBorder: "#DCE1E9",
  green: "#36B37E",
  lightestGray: "#F7F9FC",
  yellow: "#FFAC0A",
  red: "#FE0000",
  purple: "#8777D9",
  h1: "#252444",
  h2: "#1C2E4A",
  body: "#172B4D",
  subtitle2: "#3D557A",
  divider: "#55565A1F",
  secondaryBtnText: "#2A466F",
} as const;

const palette = createPalette({
  primary: { main: colors.blue },
  info: { main: colors.purple },
  success: { main: colors.green },
  warning: { main: colors.yellow },
  error: { main: colors.red },
  background: {
    default: colors.lightestGray,
    paper: colors.white,
  },
  typography: {
    body: colors.body,
    h1: colors.h1,
    h2: colors.h2,
    subtitle2: colors.subtitle2,
  },
  button: {
    secondaryText: colors.secondaryBtnText,
  },
  darkBlue: colors.darkBlue,
  blue: colors.blue,
  black: colors.black,
  white: colors.white,
  gray: colors.gray,
  green: colors.green,
  lightGray: colors.lightGray,
  divider: colors.divider,
  border: colors.grayBorder,
  yellow: colors.yellow,
  red: colors.red,
  purple: colors.purple,
});

export default palette;
