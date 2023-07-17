import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  // palette: {
  //   mode: 'light',
  //   primary: {
  //     main: '#53396f',
  //     dark: '#795a9e',
  //   },
  //   warning: {
  //     main: '#ff9800',
  //   },
  // },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFormLabel-root.MuiInputLabel-root': {
            fontWeight: 900,
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 900,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
