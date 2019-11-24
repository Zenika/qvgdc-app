import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from 'components/Home/Home';
import Question from 'components/Question/Question';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/loading" component={Question} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
