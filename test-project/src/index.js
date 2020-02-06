import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter as Router } from 'connected-react-router';
import getStore from './store';
import './index.css';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createHistory();
const store = getStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

