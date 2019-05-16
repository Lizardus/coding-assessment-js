import { combineReducers } from 'redux-immutable';
import { messageReducer } from './message';
import { imagesReducer } from './images';

export default function createReducer(injectedReducers) {
  return combineReducers({
    message: messageReducer,
    images: imagesReducer,
    ...injectedReducers,
  });
}
