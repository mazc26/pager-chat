import { combineEpics } from 'redux-observable'
import { searchGifsEpic, searchRandomGifsEpic } from './common'

const rootEpic = combineEpics(
  searchGifsEpic,
  searchRandomGifsEpic,
)

export default rootEpic