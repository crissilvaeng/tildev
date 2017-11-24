// social.jsx

import React from 'react'
import styles from './../../style.scss'

class Social extends React.Component {
  render () {
    return (
      <div className={styles.actions}>
        <span className={styles.heart} />
        <span className={styles.comment} />
        <span className={styles.share} />
      </div>
    )
  }
}

export { Social }
