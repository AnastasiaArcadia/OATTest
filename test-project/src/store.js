import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';
import { connectRouter } from 'connected-react-router'


export default (history) => {
  return createStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history)
    }),
    composeWithDevTools(applyMiddleware(createLogger(), thunk, routerMiddleware(history)))
  );
};

