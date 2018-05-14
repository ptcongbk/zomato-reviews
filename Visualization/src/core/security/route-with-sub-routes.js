/* eslint-disable */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ProtectRoute from './protect-route';
import DummyComp from './dummy';

class RouteWithSubRoutes extends Component {
  render() {
    return this.props.isAuth ? (
        <ProtectRoute {...this.props}></ProtectRoute>
      ) : (
        <Route path={this.props.path} render={props => (
          this.props.component ? (
              <this.props.component {...props} socket={this.props.socket} routes={this.props.routes} />
            ) : (
              <DummyComp {...props} routes={this.props.routes} />
            )
        )}/>
      )
  }
}

export default RouteWithSubRoutes;
