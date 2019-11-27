import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 700,
        borderRadius: '6em',
        padding: '9px 24px',
      },
      containedPrimary: {
        background: 'linear-gradient(135deg, #DB2244 0%, #C4285F 100%)',
        boxShadow: '0 3px 6px rgba(196, 40, 95, .3)',
        '&:hover': {
          boxShadow: '0 3px 6px rgba(196, 40, 95, .3)',
        },
        '&:disabled': {
          background: '#ddd',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#B31835',
    },
    secondary: {
      main: '#B31835',
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function QvgdcTheme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default QvgdcTheme;
