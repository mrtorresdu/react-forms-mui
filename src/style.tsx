import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0037ff',
    },
    // secondary: {
    //   main: '#007EF5',
    // },
    // error: {
    //   main: '#007EF5',
    // },
    // warning: {
    //   main: '#FF9800',
    // },o
    // info: {
    //   main: '#2196F3',
    // },
    // success: {
    //   main: '#4CAF50',
    // },
    background: {
      default: '#FFFFFF',
      paper: '#303030',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff)',
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFormLabel-root.MuiInputLabel-root': {
            fontWeight: 900,
          },
          '& .MuiOutlinedInput-root': {
            fieldset: {
              borderColor: '#ccc',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#0037ff',
              borderWidth: '3px',
            },
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ccc',
          fontWeight: 900,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#ccc',
          borderWidth: '3px',
          fontWeight: 900,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#0037ff',
              borderWidth: '3px',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0037ff',
              borderWidth: '3px',
            },
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
