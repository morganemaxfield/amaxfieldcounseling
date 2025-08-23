import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Link,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navLinkStyle = {
    fontWeight: 500,
    fontSize: '1.1rem',
    textDecoration: 'none',
    px: 1.5,
    py: 0.5,
    borderRadius: '20px',
    color: theme.palette.text.primary,
    transition: 'background 0.2s',
    '&:hover': {
      background: theme.palette.action.hover,
      textDecoration: 'none',
    },
  };

  const ctaStyle = {
    ...navLinkStyle,
    bgcolor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    px: 2.5,
    py: 0.7,
    fontWeight: 400,
    boxShadow: theme.shadows[2],
    '&:hover': {
      bgcolor: theme.palette.secondary.dark,
      color: theme.palette.secondary.contrastText,
    },
  };

  return (
    <AppBar
      position="sticky"
      color={theme.palette.text.primary}
      sx={{
        borderRadius: 0, // Ensures no rounded corners
        backgroundColor: theme.palette.background.default,
        boxShadow: 1
      }}
    >
      <Toolbar sx={{ py: 1, justifyContent: 'space-between'}}>
        {/* Logo */}
        <Typography
          variant="h4"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            fontWeight: 300,
            letterSpacing: '0.5px',
            fontFamily: 'inherit',
            '&:hover': { color: 'secondary.main' },
            transition: 'color 0.2s',
            color: theme.palette.text.primary,
          }}
        >
          Amalea Maxfield Counseling Services
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Link
              component={RouterLink}
              to="/"
              sx={navLinkStyle}
              underline="none"
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              sx={navLinkStyle}
              underline="none"
            >
              About
            </Link>
            {/* <Link
              component={RouterLink}
              to="/specialties"
              sx={navLinkStyle}
              underline="none"
            >
              Specialties
            </Link> */}
            <Link
              component={RouterLink}
              to="/feesAndInsurance"
              sx={navLinkStyle}
              underline="none"
            >
              Fees & Insurance
            </Link>
            <Link
              component={RouterLink}
              to="/appointment"
              sx={ctaStyle}
              underline="none"
            >
              Schedule Appointment
            </Link>
          </Stack>
        ) : (
          // Mobile Navigation (Hamburger Menu)
          <Box>
            <IconButton
              color="primary"
              aria-label="menu"
              onClick={handleMenuOpen}
              size="large"
              sx={{
                borderRadius: 2,
                bgcolor: 'rgba(74, 154, 199, 0.08)',
                '&:hover': { bgcolor: 'rgba(74, 154, 199, 0.15)' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 180,
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <MenuItem
                component={RouterLink}
                to="/"
                onClick={handleMenuClose}
                sx={navLinkStyle}
              >
                Home
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/about"
                onClick={handleMenuClose}
                sx={navLinkStyle}
              >
                About
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/specialties"
                onClick={handleMenuClose}
                sx={navLinkStyle}
              >
                Specialties
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/appointment"
                onClick={handleMenuClose}
                sx={ctaStyle}
              >
                Schedule Appointment
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
