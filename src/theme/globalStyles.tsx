import { GlobalStyles } from "@mui/material";
import type { GlobalStylesProps } from "@mui/material/GlobalStyles";
import type { Theme } from "@mui/material/styles";

const globalStyles: GlobalStylesProps["styles"] = (theme: Theme) => {
  const { palette, typography } = theme;

  return {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
    html: {
      height: "100%",
      width: "100%",
      colorScheme: palette.mode === "dark" ? "dark" : "light",
    },
    body: {
      minHeight: "100vh",
      width: "100%",
      lineHeight: 1.5,
      fontFamily: typography.fontFamily,
      backgroundColor: palette.background.default,
      color: palette.text.primary,
    },
    img: {
      display: "block",
      maxWidth: "100%",
      height: "auto",
    },
    picture: {
      display: "block",
      maxWidth: "100%",
      height: "auto",
    },
    "input, select, textarea, button": {
      font: "inherit",
    },
  };
};

const AppGlobalStyles = () => <GlobalStyles styles={globalStyles} />;

export default AppGlobalStyles;