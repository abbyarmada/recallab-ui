import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import recallab from './reducers/index';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';


const configureStore = () => {
  const middlewares = [thunk];
  const routingMiddleware = routerMiddleware(browserHistory);
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
    middlewares.push(routingMiddleware);
  }

  return createStore(
    recallab,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
};

export default configureStore;
