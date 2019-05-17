import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, concatMap } from 'rxjs/operators';
import {
  FETCH_IMAGES,
  FETCH_IMAGES_FULFILLED,
} from '../actions/fetchImageTypes'

export const fetchImages = action$ => action$.pipe(
  ofType(FETCH_IMAGES),
  concatMap(
    (action) => {
      return ajax.getJSON(`https://jsonplaceholder.typicode.com/photos/${action.payload}`).pipe(
        map((response) => {
          return ({
            type: FETCH_IMAGES_FULFILLED,
            payload: response,
          });
        })
      )
    }
  ),
);
