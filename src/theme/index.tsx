import { useMemo } from "react"
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

import palette from "./Palatte"
import AppComponentsOverrides from "./overrides"


const AppThemeConfig = () => {
    const appTheme = useMemo(() => {
        const baseTheme = createTheme({
            palette
        });
        
        return createTheme(baseTheme, {
            components: AppComponentsOverrides(baseTheme)
        })
    }, [])

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={appTheme}>
                <CssBaseline />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default AppThemeConfig