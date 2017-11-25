// index.js

import './style.scss'
import './services/firebase'

import App from './app'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './store/configure-store'
import { startFetchPosts } from './actions/posts'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))

store.dispatch(startFetchPosts).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'))
})
