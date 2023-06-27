// Set MUI Theme
import { createTheme } from "@mui/material/styles";
import Palette from "./palette";
import typography from "./muiTypography";
import { default as snasm } from "./typography/snasm";
import { default as firaCode } from "./typography/firaCode";
import { MuiButton, MuiIconButton } from "./muiButton";

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
