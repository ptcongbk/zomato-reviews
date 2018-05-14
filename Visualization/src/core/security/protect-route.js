import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class ProtectRoute extends Component {
  renderAuthComp(props) {
    const { component: Component, routes, socket } = this.props;
    const renderComponent = <Component socket={socket} routes={routes} {...props} />;
    return renderComponent;
  }

  render() {
    const { path } = this.props;
    return (
      <Route
        path={path}
        render={props => this.renderAuthComp(props)}
      />
    );
  }
}

export default ProtectRoute;
