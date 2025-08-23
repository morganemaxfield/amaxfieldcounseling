import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A7BA2',      // Royal blue for primary actions and highlights
    },
    secondary: {
      main: '#DCD6D0',      // muted sage green for secondary accents
    },
    background: {
      default: '#F5EFE6',   // Off-white for app background
      paper: '#FAFAFA',     // cream for surfaces (cards, sheets)
    },
    text: {
      primary: '#1A1A1A',   
      secondary: '#6A7BA2', 
    },
    tertiary: {
      main: '#C5B4E3',      // cream as an additional accent
    },
  },
  typography: {
    fontFamily: '"georgia","Nunito", "DM Sans", "Arial", sans-serif',
 // Quicksand has round, friendly letterforms
    h1: {
      fontWeight: 500,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.7, // More spacing for readability
    },
    button: {
      textTransform: 'none', // More approachable
      fontWeight: 500,
      fontSize: '0.95rem',
    },
  },
  shape: {
    borderRadius: 12, // More rounded corners feel friendlier
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 6px rgba(0, 0, 0, 0.07)',
    // ... other shadow levels
    '0px 8px 16px rgba(0, 0, 0, 0.09)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 22px',
          borderRadius: '25px', // Pill-shaped buttons feel friendly
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: '#6A7BA2'
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          padding: '24px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            '& fieldset': {
              borderColor: '#E2E8F0',
            },
            '&:hover fieldset': {
              borderColor: '#CBD5E0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4A9AC7',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Removes default gradient
        },
      },
    },
  },
});

export default theme;