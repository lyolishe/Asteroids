import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from '@components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import isServer from '../utils/serverSide/isServer';
import App from './App';
import store, { sagaMiddleware } from './store/store';
import watchGotLeaderboard from './store/sagas/leaderboard';
import watchLogin from './store/sagas/auth';

import './index.less';

if (!isServer) {
  sagaMiddleware.run(watchGotLeaderboard);
  sagaMiddleware.run(watchLogin);
}

const worker = require('serviceworker-webpack-plugin/lib/runtime');

if ('serviceWorker' in navigator) {
  worker.register();
}

ReactDOM.hydrate(
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
);
