import type { Components, Theme } from '@mui/material/styles';

const Button = (_theme: Theme) : Components<Theme> => {
  return {
    MuiButton: {
        defaultProps: {
            disableElevation: true,
            disableRipple: true
        },
        styleOverrides: {
            root: {
                '&:focus': {
                    outline: 'none',
                    border: 'none'
                }
            }
        }
    }
  }
}

export default Button