import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from './route-with-sub-routes';

const DummyComp = props => (
  <Switch>
    {props.routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Switch>
);

export default DummyComp;
