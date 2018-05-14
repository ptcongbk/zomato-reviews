import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import * as RoutesModule from './routes';
import './index.css';
let routes = RoutesModule.default;

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  target
);

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept('./routes', () => {
    routes = require('./routes').default;
  });
}
