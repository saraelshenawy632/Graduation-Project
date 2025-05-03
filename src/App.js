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
import { store } from './app/store';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Dashboard from './pages/Admin/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Admin/Orders';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import WelcomePage from './pages/WelcomePage';
import AdminProducts from './pages/Admin/AdminProducts';
import ProfilePage from './pages/Profile';

const AppContent = () => {
  const { mode } = useTheme();

  const customTheme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: {
          main: mode === 'light' ? 'hsl(207, 89.70%, 77.10%)' : '#2196f3',
          dark: '#1565c0',
          light: '#63a4ff',
        },
        secondary: {
          main: mode === 'light' ? '#90caf9' : '#0d47a1',
          light: '#e3f2fd',
          dark: '#1565c0',
        },
        background: {
          default: mode === 'light' ? '#f4f9ff' : '#000000',
          paper: mode === 'light' ? '#ffffff' : '#121212',
        },
        text: {
          primary: mode === 'light' ? '#212121' : '#ffffff',
          secondary: mode === 'light' ? '#555' : '#aaaaaa',
        },
        divider: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
        action: {
          hover: mode === 'light' ? 'rgba(25, 118, 210, 0.08)' : 'rgba(33, 150, 243, 0.1)',
          selected: mode === 'light' ? 'rgba(25, 118, 210, 0.16)' : 'rgba(33, 150, 243, 0.2)',
        },
      },
      components: {
        MuiCard: {
          styleOverrides: {
            root: {
              backgroundColor: mode === 'light' ? '#ffffff' : '#1a1a1a',
              borderRadius: 12,
              boxShadow: mode === 'light'
                ? '0 2px 8px rgba(0, 0, 0, 0.05)'
                : '0 0 10px rgba(33, 150, 243, 0.2)',
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: mode === 'light' ? '#87CEFA' : '#000000', // Light Sky Blue
              color: mode === 'light' ? '#000000' : '#ffffff', // black text in light mode
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: mode === 'dark' ? '0 0 8px #2196f3' : '0 0 6px #1565c0',
                backgroundColor: mode === 'dark' ? '#2196f3' : '#1565c0',
                color: '#fff',
              },
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: mode === 'dark' ? '#2196f3' : '#90caf9',
                },
                '&:hover fieldset': {
                  borderColor: mode === 'dark' ? '#64b5f6' : '#42a5f5',
                  boxShadow: mode === 'dark' ? '0 0 4px #2196f3' : 'none',
                },
                '&.Mui-focused fieldset': {
                  borderColor: mode === 'dark' ? '#64b5f6' : '#1976d2',
                },
              },
            },
          },
        },
      },
    }), [mode]);

  return (
    <MuiThemeProvider theme={customTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
              <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
              <Route path="/admin" element={<AdminRoute><Dashboard /></AdminRoute>} />
              <Route path="/admin/products" element={<AdminRoute><AdminProducts /></AdminRoute>} />
              <Route path="/admin/orders" element={<AdminRoute><Orders /></AdminRoute>} />
              <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <AppContent />
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;
