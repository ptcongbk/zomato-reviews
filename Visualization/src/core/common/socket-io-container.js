import React from 'react';
import { Switch } from 'react-router';
import RouteWithSubRoutes from '../security/route-with-sub-routes';


const SocketIOContainer = props => (
  <Switch>
    {props.routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Switch>
);

export default SocketIOContainer;
