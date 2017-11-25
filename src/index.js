// index.js

import './style.scss'
import './services/firebase'

import App from './app'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './store/configure-store'
import { startSetPosts } from './actions/posts'
import * as firebase from 'firebase'
import { signIn, signOut } from './actions/auth'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

store.dispatch(startSetPosts()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'))
})

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(signIn(user))
  } else {
    store.dispatch(signOut())
  }
})
