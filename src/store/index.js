import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { asyncReducer } from './redusers';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  asyncReducer,
  storeEnhancers(applyMiddleware(thunk))
);
