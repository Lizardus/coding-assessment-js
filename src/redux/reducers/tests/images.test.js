import { fromJS } from 'immutable';
import {
  FETCH_IMAGES,
  FETCH_IMAGES_FULFILLED,
} from '../../actions/fetchImageTypes'
import { imagesReducer, initialState } from '../images';

describe('Images Reducer', () => {
  describe(FETCH_IMAGES, () => {
    it('sets isFetching to true', () => {
      const action = {
        type: FETCH_IMAGES,
      };

      expect(imagesReducer(initialState, action)).toEqual(
        initialState.set('isFetching', true),
      );
    });
  });

  describe(FETCH_IMAGES_FULFILLED, () => {
    it('sets isFetching to false and adds images', () => {
      const action = {
        type: FETCH_IMAGES_FULFILLED,
        payload: [{}, {}, {}],
      };

      const actualState = imagesReducer(initialState, action).toJS();
      const expectedState = initialState.merge({
        isFetching: false,
        images: action.payload,
      }).toJS();

      expect(actualState).toEqual(expectedState);
    });
  })
});
