import Admin from 'components/Admin/Admin';
import Game from 'components/Game/Game';
import Home from 'components/Home/Home';
import Login from 'components/Login/Login';
import RouteNotFound from 'components/RouteNotFound/RouteNotFound';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function AuthenticateRoute({ component, ...options }) {
  const isLoggedIn = localStorage.getItem('token');
  const componentToRender = isLoggedIn ? component : Login;

  return <Route {...options} component={componentToRender} />;
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/login" component={Login} />
        <AuthenticateRoute path="/admin" component={Admin} />
        <Route component={RouteNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
