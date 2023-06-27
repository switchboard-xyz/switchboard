import "@mui/material/styles";

interface PaletteMode {
  page: {
    primary: string;
    secondary: string;
    highlight: string;
  };
  text: {
    title: string;
    body: string;
    bodySecondary: string;
  };
}

interface SbPalette {
  white: string;
  black: string;
  indigo: string;
  yellow: string;
  orange: string;
  blue: string;
  cyan: string;
  gray: string;
  green: string;
  pink: string;
  purple: string;
  red: string;
  lightGray: string;
  lightBlue: string;
  lightYellow: string;
  lightPurple: string;
  transparent: string;
  lightBlue: string;
  pageText: {
    title: string;
    body: string;
    bodySecondary: string;
    highlight: string;
    action: string;
  };

  pageBackground: {
    primary: string;
    secondary: string;
    highlight: string;
    action: string;
    actionSuccess: string;
  };

  footer: {
    background: string;
    text: string;
  };
  navbar: {
    marketplace: string;
  };

  // Updated palette
  light: PaletteMode;
  dark: PaletteMode;
}

declare module "@mui/material/styles/createPalette" {
  interface Palette extends SbPalette {
    background: {
      primary: string;
      secondary: string;
    };
    typography: {
      body: string;
      h1: string;
      h2: string;
      subtitle2: string;
    };
    button: {
      secondaryText: string;
    };
    border: string;
    darkBlue: string;
  }

  interface PaletteOptions extends Partial<SbPalette> {
    background: {
      primary: string;
      secondary: string;
    };
    typography: {
      body: string;
      h1: string;
      h2: string;
      subtitle2: string;
    };
    button: {
      secondaryText: string;
    };
    divider: string;
    border: string;
    green: string;
    darkBlue: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1mono: true;
    body2mono: true;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    fontPrimary?: string;
  }
}
