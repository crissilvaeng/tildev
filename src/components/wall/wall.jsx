// wall.jsx

import { Card } from './../card'
import React from 'react'
import styles from './../../style.scss'

class Wall extends React.Component {
  render () {
    return (
      <div id='wall' className={styles.wall}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export { Wall }
