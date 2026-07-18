
import type { CommonColors } from "@mui/material/styles"
import type { PaletteOptions, SimplePaletteColorOptions } from "@mui/material/styles"

const COMMON: CommonColors = {
    black: "#000000",
    white: "#ffffff"
}

const PRIMARY: SimplePaletteColorOptions = {
    light: "#143c5f",
    main: "#11324f",
    dark: "#143c5f",
    contrastText: "#ffffff",
}

const SECONDARY: SimplePaletteColorOptions = {
    light: "#1f88a0",
    main: "#1A7185",
    dark: "#155a6a",
    contrastText: "#ffffff",
}

// Custom colors

const GREY: Record<string, string> = {
  400: "#91a3a9"
}

const palette: PaletteOptions = {
    common: { ...COMMON },
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    grey: { ...GREY }
};

export default palette;