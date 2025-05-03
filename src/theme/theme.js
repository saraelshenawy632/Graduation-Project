import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => {
  const isLight = mode === 'light';

  return createTheme({
    palette: {
      mode,
      ...(isLight
        ? {
            primary: {
              main: '#2196F3',
              light: '#64B5F6',
              dark: '#1976D2',
            },
            secondary: {
              main: '#00BCD4',
              light: '#4DD0E1',
              dark: '#0097A7',
            },
            background: {
              default: '#F1F5F9',
              paper: '#FFFFFF',
            },
            text: {
              primary: '#0F172A',
              secondary: '#334155',
            },
            success: {
              main: '#4CAF50',
            },
            error: {
              main: '#EF5350',
            },
          }
        : {
            primary: {
              main: '#64B5F6',
              light: '#90CAF9',
              dark: '#1E88E5',
            },
            secondary: {
              main: '#4DD0E1',
              light: '#80DEEA',
              dark: '#26C6DA',
            },
            background: {
              default: '#0F172A',
              paper: '#1E293B',
            },
            text: {
              primary: '#E0F2F1',
              secondary: '#B0BEC5',
            },
            success: {
              main: '#81C784',
            },
            error: {
              main: '#E57373',
            },
          }),
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
      allVariants: {
        color: isLight ? '#0F172A' : '#E0F2F1',
      },
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.5px',
        background: 'linear-gradient(90deg, #2196F3, #00BCD4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.25px',
        background: 'linear-gradient(90deg, #1976D2, #4DD0E1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      h3: {
        fontWeight: 700,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: '0.5px',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '10px 24px',
            transition: 'all 0.3s ease-in-out',
          },
          containedPrimary: {
            backgroundImage: 'linear-gradient(90deg, #2196F3, #00BCD4)',
            color: '#fff',
            '&:hover': {
              backgroundImage: 'linear-gradient(90deg, #1976D2, #0097A7)',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: isLight
              ? 'linear-gradient(to right, #2196F3, #00BCD4)' // Light mode
              : 'linear-gradient(to right, #0F172A, #1E293B)', // Dark mode
            color: '#ffffff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundImage: isLight
              ? 'linear-gradient(135deg, #FFFFFF, #F1F5F9)'
              : 'linear-gradient(135deg, #1E293B, #0F172A)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
              background: isLight
                ? 'linear-gradient(180deg, #ffffff, #f0f4f8)'
                : 'linear-gradient(180deg, #1E293B, #0F172A)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              },
              '&.Mui-focused': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              },
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
    shape: {
      borderRadius: 12,
    },
  });
};

export default getTheme;
