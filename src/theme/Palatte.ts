
import type { CommonColors } from "@mui/material/styles";
import type { PaletteOptions } from "@mui/material/styles";

const COMMON: CommonColors = {
  black: "#000000",
  white: "#ffffff",
};

const PRIMARY = {
  light: "#143c5f",
  main: "#11324f",
  dark: "#143c5f",
  contrastText: "#ffffff",
} as const;

const SECONDARY = {
  light: "#1f88a0",
  main: "#1A7185",
  dark: "#155a6a",
  contrastText: "#ffffff",
} as const;

const GREY: Record<string, string> = {
  400: "#91a3a9",
};

const createGradient = (color1: string, color2: string) =>
  `linear-gradient(180deg, ${color1} 0%, ${color2} 100%)`;

const BACKGROUNDS = {
  primaryGradient: createGradient(PRIMARY.light, PRIMARY.main),
  overlay: "rgba(255,255,255,0.14)",
  overlayHover: "rgba(255,255,255,0.22)",
};

const BORDERS = {
  divider: "rgba(255,255,255,0.1)",
  dividerSoft: "rgba(255,255,255,0.18)",
};

const SHADOWS = {
  z8: "0 8px 30px rgba(0,0,0,0.12)",
  z12: "0 10px 20px rgba(0,0,0,0.18)",
};

const palette: PaletteOptions = {
  common: { ...COMMON },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  grey: { ...GREY },
  backgrounds: { ...BACKGROUNDS },
  borders: { ...BORDERS },
  shadows: { ...SHADOWS },
};

export default palette;

declare module "@mui/material/styles" {
  interface Palette {
    backgrounds: typeof BACKGROUNDS;
    borders: typeof BORDERS;
    shadows: typeof SHADOWS;
  }
  interface PaletteOptions {
    backgrounds?: typeof BACKGROUNDS;
    borders?: typeof BORDERS;
    shadows?: typeof SHADOWS;
  }
}
