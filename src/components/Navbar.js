import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { mode, toggleMode } = useTheme();
  const user = useSelector(state => state.auth.user);
  const isAdmin = user?.role === 'admin';

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            cursor: 'pointer',
            fontWeight: 'bold',
            letterSpacing: 1
          }} 
          onClick={() => navigate('/')}
        >
          Aura Store
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" onClick={() => navigate('/products')}>Products</Button>
          
          {isAdmin && (
            <Button 
              color="inherit" 
              onClick={() => navigate('/admin')}
            >
              Admin Panel
            </Button>
          )}

          {user ? (
            <>
              <IconButton color="inherit" onClick={() => navigate('/cart')}>
                <ShoppingCartIcon />
              </IconButton>
              <Button color="inherit" onClick={() => navigate('/profile')}>Profile</Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
          )}
          
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
