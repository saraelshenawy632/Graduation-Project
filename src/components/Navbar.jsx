import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
  Menu,
  MenuItem,
  Avatar
} from '@mui/material';
import {
  ShoppingCart,
  Person,
  AdminPanelSettings,
  ExitToApp
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { selectCartItems } from '../features/cartSlice';
import { selectIsAuthenticated, selectUser } from '../features/authSlice';

const Navbar = () => {
  const cartItems = useSelector(selectCartItems);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Debug logs
  console.log('Navbar - User:', user);
  console.log('Navbar - Is Authenticated:', isAuthenticated);
  console.log('Navbar - User Role:', user?.role);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h4"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
          }}
        >
          Aura Store
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {isAuthenticated ? (
            <>
              {user?.role === 'admin' && (
                <Button
                  component={RouterLink}
                  to="/admin"
                  color="inherit"
                  startIcon={<AdminPanelSettings />}
                >
                  Admin Panel
                </Button>
              )}
              <Button
                color="inherit"
                component={RouterLink}
                to="/profile"
              >
                Profile
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/logout"
              >
                Logout
              </Button>
              <IconButton
                component={RouterLink}
                to="/cart"
                color="inherit"
                sx={{ position: 'relative' }}
              >
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <IconButton
                onClick={handleMenu}
                color="inherit"
                sx={{ p: 0 }}
              >
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  {user?.name?.charAt(0) || <Person />}
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={RouterLink} to="/profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ExitToApp sx={{ mr: 1 }} /> Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                component={RouterLink}
                to="/login"
                color="inherit"
              >
                Login
              </Button>
              <Button
                component={RouterLink}
                to="/register"
                color="inherit"
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
