import { combineEpics } from 'redux-observable'
import { searchGifsEpic } from './common'

const rootEpic = combineEpics(
  searchGifsEpic,
  //searchRandomGifsEpic,
)

export default rootEpic