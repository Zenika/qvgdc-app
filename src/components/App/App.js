import QvgdcTheme from 'components/QvgdcTheme/QvgdcTheme';
import Router from 'components/Router/Router';
import React, { useReducer } from 'react';
import { authReducer, initialAuthState } from 'reducers/authReducer';
import { AuthProvider } from 'store';

function App() {
  const useAuthState = useReducer(authReducer, initialAuthState);

  return (
    <AuthProvider value={useAuthState}>
      <QvgdcTheme>
        <Router />
      </QvgdcTheme>
    </AuthProvider>
  );
}

export default App;
