import { ofType } from 'redux-observable';
import { timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

const setLink = link => ({ type: 'setLink', link });

export const fetchMessage = action$ => action$.pipe(
  ofType('fetch'),
  mergeMap(() =>
    timer(5000).pipe(
      map(() => setLink({
        message: 'Read more about us',
        href: 'http://www.policyexpert.co.uk'
      }))
    )
  )
);
