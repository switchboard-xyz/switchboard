// Set MUI Theme
import { default as firaCode } from "./typography/firaCode";
import { default as snasm } from "./typography/snasm";
import { MuiButton, MuiIconButton } from "./muiButton";
import typography from "./muiTypography";
import Palette from "./palette";

import { createTheme } from "@mui/material/styles";

// create theme and apply defaults
export const theme = createTheme({
  typography,
  components: {
    MuiTextField: {
      defaultProps: {
        autoComplete: "off",
      },
    },
    MuiFilledInput: {
      defaultProps: {
        autoComplete: "off",
      },
    },
    MuiButton: { styleOverrides: MuiButton },
    MuiIconButton: { styleOverrides: MuiIconButton },
    MuiCssBaseline: { styleOverrides: `${snasm}${firaCode}` },
  },
  palette: Palette,
});
