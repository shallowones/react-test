import { createStore } from 'redux'

import { isDev } from 'config'
import reducer from './reducer'


const devtools = isDev && window.devToolsExtension ? window.devToolsExtension : () => fn => fn

const configureStore = initialState => {
  const store = createStore(reducer, initialState, devtools())

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
