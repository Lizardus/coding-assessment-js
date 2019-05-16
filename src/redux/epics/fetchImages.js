import { ofType } from 'redux-observable';
import { ajax } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import {
  FETCH_IMAGES,
  FETCH_IMAGES_FULFILLED,
} from '../actions/fetchImageTypes'

export default action$ => action$.pipe(
  ofType(FETCH_IMAGES),
  mergeMap(() =>
    ajax.getJSON('https://jsonplaceholder.typicode.com/photos').pipe(
      map(response => ({
        type: FETCH_IMAGES_FULFILLED,
        response,
      }))
    )
  )
);
