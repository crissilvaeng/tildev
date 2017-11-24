// app.jsx

import { TopBar, Wall } from './components'

import React from 'react'

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
