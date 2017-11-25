// configure-store.js

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import postsReducer from './../reducers/posts'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
