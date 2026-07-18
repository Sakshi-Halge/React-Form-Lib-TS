import type { Components, Theme } from '@mui/material/styles';

const Radio = (theme: Theme): Components<Theme> => {
    return {
        MuiRadio: {
            styleOverrides: {
                root: {
                    '&.Mui-checked': {
                        color: theme.palette.secondary.main
                    }
                }
            }
        }
    }
}

export default Radio;