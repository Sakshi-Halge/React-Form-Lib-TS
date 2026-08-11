import type { SxProps, Theme } from "@mui/material";

export const navBarRoot: SxProps<Theme> = {
  flexGrow: 1,
};

export const navBarContainer: SxProps<Theme> = {
  background: (theme) => theme.palette.backgrounds.primaryGradient,
  borderBottom: (theme) => `1px solid ${theme.palette.borders.divider}`,
  boxShadow: (theme) => theme.palette.shadows.z8,
};

export const navBarToolbar: SxProps<Theme> = {
  minHeight: { xs: 72, md: 80 },
  justifyContent: "space-between",
  gap: 2,
  px: { xs: 2, md: 0 },
};

export const brandButton: SxProps<Theme> = {};

export const brandIcon: SxProps<Theme> = {
  color: (theme) => theme.palette.common.white,
  mr: 1,
};

export const brandText: SxProps<Theme> = {
  fontWeight: 700,
  color: (theme) => theme.palette.common.white,
};

export const authActionGroup: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 1,
};

export const authButtonCommon: SxProps<Theme> = {
  textTransform: "none",
  borderRadius: 2,
};

export const authLoginButton: SxProps<Theme> = {
  ...authButtonCommon,
  color: (theme) => theme.palette.common.white,
  minWidth: 100,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: (theme) => theme.palette.backgrounds.overlayHover,
  },
};

export const authSignUpButton: SxProps<Theme> = {
  ...authButtonCommon,
  minWidth: 110,
  boxShadow: (theme) => theme.palette.shadows.z12,
  "&:hover": {
    backgroundColor: (theme) => theme.palette.secondary.dark,
  },
};
