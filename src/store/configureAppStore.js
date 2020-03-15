import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootEpic from './middleware/epics'
import rootReducer from './reducers'

const epicMiddleware = createEpicMiddleware()

export default function configureAppStore(preloadedState) {
  
  //redux-observable wont be used on the project but i will left it installed and configured in case of escalability.
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      loggerMiddleware,
      epicMiddleware,
      ...getDefaultMiddleware({ thunk: false })
    ],
    preloadedState,
    enhancers: [monitorReducersEnhancer]
  })

  epicMiddleware.run(rootEpic)
  
  /* eslint-disable no-undef */
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }
  /* eslint-enable no-undef */

  return store
}