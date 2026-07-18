import type { Components, Theme } from '@mui/material/styles';

const Select = (theme: Theme): Components<Theme> => {
    return {
        MuiSelect: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: theme.palette.secondary.main
                    }
                }
            }
        }
    }
}

export default Select;