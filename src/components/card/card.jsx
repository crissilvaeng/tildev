// card.jsx

import { Content } from './../content'
import React from 'react'
import { User } from './../user'
import styles from './../../style.scss'

class Card extends React.Component {
  render () {
    return (
      <div className={styles.card}>
        <User />
        <Content />
      </div>
    )
  }
}

export { Card }
