import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, flatMap, } from 'rxjs/operators';
import {
  FETCH_IMAGES,
  FETCH_IMAGES_FULFILLED,
} from '../actions/fetchImageTypes'

export const fetchImages = action$ => action$.pipe(
  ofType(FETCH_IMAGES),
  mergeMap((action) => {
    const { page, pageSize } = action.payload;
    const reqs = [];
    const start = page * pageSize;
    const end = start + pageSize;
    for (let i = start; i <= end; i + 1) {
      reqs.push(ajax.getJSON(`https://jsonplaceholder.typicode.com/photos/${i}`))
    }
    ajax.getJSON('https://jsonplaceholder.typicode.com/photos').pipe(
      map(response => ({
        type: FETCH_IMAGES_FULFILLED,
        payload: response,
      }))
    )
  }),
);
