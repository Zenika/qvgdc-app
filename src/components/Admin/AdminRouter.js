import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AdminGameDetail from './AdminGameDetail/AdminGameDetail';
import AdminGames from './AdminGames/AdminGames';

const AdminRouter = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path} component={AdminGames} />
      <Route path={`${match.path}/:gameId`} component={AdminGameDetail} />
    </Switch>
  );
};

export default AdminRouter;
