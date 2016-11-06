import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import recallab from './reducers/index';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const configureStore = () => {
  const middlewares = [thunk];
  const routingMiddleware = routerMiddleware(browserHistory);
  middlewares.push(routingMiddleware);
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  };

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    recallab,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
};

export default configureStore;
