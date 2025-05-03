import React, { useMemo } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
  Box
} from '@mui/material';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import './App.css';

const AppContent = () => {
  const { mode } = useTheme();
  
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#2C3E50',
          },
          secondary: {
            main: '#E67E22',
          },
        },
      }),
    [mode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  );
}

export default App; 