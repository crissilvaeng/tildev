// user.jsx

import React from 'react'
import { Social } from './../social'
import moment from 'moment'
import styles from './../../style.scss'

const User = ({ datetime }) => {
  return (<div className={styles.user}>
    <div className={styles.userimg} />
    <div className={styles.userinfo}>
      <div className={styles.username}>Cristina Silva</div>
      <span className={styles.postdate}>
        {moment(datetime).format('dd/MM/yyyy HH:mm')}
      </span>
    </div>
    <Social />
  </div>)
}

export { User }
