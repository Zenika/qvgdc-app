import Game from 'components/Game/Game';
import Home from 'components/Home/Home';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
    </BrowserRouter>
  );
}

export default Router;
