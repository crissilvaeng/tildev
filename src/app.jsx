// app.jsx

import React from 'react'
import { TopBar } from './components'
import Wall from './components/wall/wall'

class App extends React.Component {
  render () {
    return (
      <div id='container'>
        <TopBar />
        <Wall />
      </div>
    )
  }
}

export default App
