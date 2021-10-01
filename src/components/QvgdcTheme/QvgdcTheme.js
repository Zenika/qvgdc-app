import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

const baseFonts = [
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
];

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: 14,
        fontWeight: 600,
        borderRadius: '6em',
        padding: '9px 24px',
        fontFamily: ['Montserrat', 'Source Sans Pro', ...baseFonts].join(','),
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
      containedSizeSmall: {
        padding: '4px 16px',
      },
      text: {
        padding: '4px 16px',
      },
    },
  },
  palette: {
    text: {
      primary: '#42454d',
    },
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
    fontFamily: ['Source Sans Pro', ...baseFonts].join(','),
    fontSize: 16,
    h1: {
      fontFamily: ['Montserrat', 'Source Sans Pro', ...baseFonts].join(','),
      fontWeight: 600,
    },
    h2: {
      fontFamily: ['Montserrat', 'Source Sans Pro', ...baseFonts].join(','),
      fontWeight: 600,
    },
    h3: {
      fontFamily: ['Montserrat', 'Source Sans Pro', ...baseFonts].join(','),
      fontWeight: 600,
    },
    h4: {
      fontFamily: ['Montserrat', 'Source Sans Pro', ...baseFonts].join(','),
      fontWeight: 600,
    },
    h5: {
      fontFamily: ['Montserrat', 'Source Sans Pro', ...baseFonts].join(','),
      fontWeight: 600,
    },
    h6: {
      fontFamily: ['Montserrat', 'Source Sans Pro', ...baseFonts].join(','),
      fontWeight: 600,
    },
  },
});

function QvgdcTheme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default QvgdcTheme;
