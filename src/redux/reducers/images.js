import { fromJS, List } from 'immutable';
import {
  FETCH_IMAGES,
  FETCH_IMAGES_FULFILLED,
 } from '../actions/fetchImageTypes'

export const initialState = fromJS({
  isFetching: false,
  images: [],
});

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return state.set('isFetching', true);
    case FETCH_IMAGES_FULFILLED:
      return state.merge({
        isFetching: false,
        images: [],
      })
    default:
      return state;
  }
};
