import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import {
  fetchMessage,
  fetchImages,
} from './epics';

const rootEpic = combineEpics(
  fetchMessage,
  fetchImages,
);
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer(),
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
