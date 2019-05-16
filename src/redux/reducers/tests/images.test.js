import { fromJS } from 'immutable';
import {
  FETCH_IMAGES,
  FETCH_IMAGES_FULFILLED,
} from '../../actions/fetchImageTypes'
import { imagesReducer, initialState } from '../images';

describe('Images Reducer', () => {
  describe(FETCH_IMAGES, () => {
    it('sets isFetching to true', () => {
      const fetchAction = {
        type: FETCH_IMAGES,
      };
      expect(imagesReducer(initialState, fetchAction)).toEqual(
        initialState.set('isFetching', true),
      );
    });
  });
});
