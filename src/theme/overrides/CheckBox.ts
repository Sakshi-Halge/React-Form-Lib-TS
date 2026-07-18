import type { Components, Theme } from '@mui/material/styles';

const CheckBox = (theme: Theme): Components<Theme> =>{
    return {
        MuiCheckbox: {
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

export default CheckBox;