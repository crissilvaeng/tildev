// card.jsx

import { Content } from './../content'
import React from 'react'
import { User } from './../user'
import styles from './../../style.scss'

const Card = ({ id, content, datetime, displayName, photoURL }) => {
  return (<div className={styles.card} key={id}>
    <User datetime={datetime} displayName={displayName} photoURL={photoURL} />
    <Content content={content} />
  </div>)
}

export { Card }
