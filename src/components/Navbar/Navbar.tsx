import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export type NavbarLink = {
  label: string;
  href: string;
  active?: boolean;
};

export type NavbarProps = {
  brandName?: string;
  brandHref?: string;
  links?: readonly NavbarLink[];
  ctaLabel?: string;
  ctaHref?: string;
};

const defaultLinks: readonly NavbarLink[] = [
  { label: "Home", href: "#home", active: true },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const Navbar = ({
  brandName = "Aether UI",
  brandHref = "#home",
  links = defaultLinks,
  ctaLabel = "Get Started",
  ctaHref = "#get-started",
}: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, rgba(17, 50, 79, 0.98), rgba(26, 113, 133, 0.94))",
          borderBottom: "1px solid rgba(255,255,255,0.14)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 80 }, justifyContent: "space-between", gap: 2 }}>
            <Button
              component="a"
              href={brandHref}
              color="inherit"
              disableRipple
              sx={{
                p: 0,
                minWidth: "auto",
                textTransform: "none",
                borderRadius: 999,
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "rgba(255,255,255,0.16)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontWeight: 700,
                    color: "common.white",
                  }}
                >
                  A
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                    {brandName}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255,255,255,0.76)", display: { xs: "none", sm: "block" } }}
                  >
                    Design System
                  </Typography>
                </Box>
              </Box>
            </Button>

            {!isMobile ? (
              <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center", gap: 0.5 }}>
                {links.map((link) => (
                  <Button
                    key={link.label}
                    component="a"
                    href={link.href}
                    color="inherit"
                    sx={{
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 999,
                      fontWeight: 600,
                      color: link.active ? "common.white" : "rgba(255,255,255,0.82)",
                      backgroundColor: link.active ? "rgba(255,255,255,0.14)" : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.16)",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            ) : null}

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {!isMobile ? (
                <Button
                  component="a"
                  href={ctaHref}
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderRadius: 999,
                    px: 2.25,
                    py: 1,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.16)",
                  }}
                >
                  {ctaLabel}
                </Button>
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="Open navigation menu"
                  onClick={() => setMobileMenuOpen(true)}
                  sx={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "85%",
              maxWidth: 320,
              bgcolor: "background.paper",
              color: "text.primary",
            },
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6">{brandName}</Typography>
            <IconButton onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <List>
          {links.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                selected={link.active}
                onClick={() => setMobileMenuOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ p: 2 }}>
          <Button fullWidth component="a" href={ctaHref} variant="contained" color="primary">
            {ctaLabel}
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
