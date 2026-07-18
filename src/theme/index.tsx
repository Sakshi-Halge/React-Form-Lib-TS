import { useMemo, type ReactNode } from "react";
import { createTheme, responsiveFontSizes, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import palette from "./Palatte";
import AppComponentsOverrides from "./overrides";
import AppGlobalStyles from "./globalStyles";
import { createTypography } from "./typography";

type AppThemeConfigProps = {
  children?: ReactNode;
};

const AppThemeConfig = ({ children }: AppThemeConfigProps) => {
  const appTheme = useMemo(() => {
    const baseTheme = createTheme({
      palette,
      typography: createTypography(),
    });

    const themedComponents = createTheme(baseTheme, {
      components: AppComponentsOverrides(baseTheme),
    });

    return responsiveFontSizes(themedComponents);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <AppGlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppThemeConfig;