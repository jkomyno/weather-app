import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  logger,
  sagaMiddleware,
];

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middlewares),
);

// sagaMiddleware.run(rootSaga);

export default store;