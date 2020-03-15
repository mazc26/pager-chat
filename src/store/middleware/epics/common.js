import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'

import { apiParser } from '../../../api/apiParser';
import {
  searchGifs,
  searchGifsSuccess,
  searchGifsError,
  searchRandomGifs,
  searchRandomGifsSuccess,
  searchRandomGifsError
 } from '../../reducers/common'

export const searchGifsEpic = action$ => action$.pipe(
  ofType(searchGifs.type),
  mergeMap(action =>
    from(
      apiParser("search", "GET", action.payload)
      .then(searchGifsSuccess)
      .catch(searchGifsError)
    )
  ))

export const searchRandomGifsEpic = action$ => action$.pipe(
  ofType(searchRandomGifs.type),
  mergeMap(action =>
    from(
      apiParser("trending", "GET", action.payload)
      .then(searchRandomGifsSuccess)
      .catch(searchRandomGifsError)
    )
  ))

  

