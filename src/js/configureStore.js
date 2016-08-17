import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import recallab from './reducers/index';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    recallab,
    applyMiddleware(...middlewares),
    window.devToolsExtension && window.devToolsExtension()
  );
};

export default configureStore;
