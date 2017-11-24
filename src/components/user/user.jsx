// user.jsx

import React from 'react'
import { Social } from './../social'
import styles from './../../style.scss'

class User extends React.Component {
  render () {
    return (
      <div className={styles.user}>
        <div className={styles.userimg} />
        <div className={styles.userinfo}>
          <div className={styles.username}>Louis Dickinson</div>
          <span className={styles.postdate}>Yesterday at 11:49</span>
        </div>
        <Social />
      </div>
    )
  }
}

export { User }
