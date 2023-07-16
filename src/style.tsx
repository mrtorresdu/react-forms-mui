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
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFormLabel-root.MuiInputLabel-root': {
            fontWeight: 900,
          },
          '& .MuiInputBase-root': {
            fontWeight: 900,
            '&.Mui-focused': {
              borderColor: '#fff',
            },
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
  },
});

theme = responsiveFontSizes(theme);
