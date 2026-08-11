import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import type { NavbarProps } from "./navbarTypes";
import {
  navBarRoot,
  navBarContainer,
  navBarToolbar,
  brandButton,
  brandText,
  brandIcon,
  authActionGroup,
  authLoginButton,
  authSignUpButton,
} from "./navbarStyles";

const Navbar = ({
  brandName = "FormFlow",
  brandHref = "home",
}: NavbarProps) => {
  return (
    <Box component="header" sx={navBarRoot}>
      <AppBar position="static" elevation={0} sx={navBarContainer}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={navBarToolbar}>
            <Button
              component="a"
              href={brandHref}
              color="inherit"
              sx={brandButton}
              aria-label={brandName}
            >
              <AutoAwesomeIcon sx={brandIcon} fontSize="small" />
              <Typography variant="h2" sx={brandText}>
                {brandName}
              </Typography>
            </Button>

            <Box sx={authActionGroup}>
              <Button component="a" href="#login" color="inherit" variant="outlined" sx={authLoginButton}>
                Login
              </Button>
              <Button component="a" href="#signup" variant="contained" color="secondary" sx={authSignUpButton}>
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
