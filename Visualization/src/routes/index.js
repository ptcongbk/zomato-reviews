import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { PUBLIC_PATH } from '../constants';
import RouteWithSubRoutes from '../core/security/route-with-sub-routes';
import clientRoutes from './client';

// Combine all routes of application
const routesConfig = [
  clientRoutes,
];

const routes = (
  <Route path={PUBLIC_PATH}>
    <Switch>
      {routesConfig.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </Route>
);

export default routes;
