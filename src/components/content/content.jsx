// content.jsx

import Markdown from 'react-markdown'
import React from 'react'
import styles from './../../style.scss'

const Content = ({ content }) => {
  return (
    <div className={styles.content}>
      <Markdown source={content} />
    </div>
  )
}

export { Content }
