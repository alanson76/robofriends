import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { searchRobots, requestRobots } from './reducers';

const reducers = combineReducers({
  searchRobots,
  requestRobots,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware, createLogger())
  )
);
export default store;
// export default createStore(reducers, applyMiddleware(createLogger()));
