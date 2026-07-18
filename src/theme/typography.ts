import type { ThemeOptions } from "@mui/material/styles";

export const typography: NonNullable<ThemeOptions["typography"]> = {
  fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: "clamp(2rem, 3vw, 3rem)",
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: "clamp(1.5rem, 2vw, 2rem)",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: "clamp(1.25rem, 1.75vw, 1.5rem)",
    fontWeight: 600,
    lineHeight: 1.35,
  },
  h5: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  subtitle1: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "none",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.5,
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 600,
    textTransform: "uppercase",
  },
};

export const createTypography = (): NonNullable<ThemeOptions["typography"]> => typography;
