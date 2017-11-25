// user.jsx

import React from 'react'
import { Social } from './../social'
import moment from 'moment'
import styles from './../../style.scss'

const User = ({ datetime, displayName, photoURL }) => {
  const style = {
    background: `url(${photoURL}) 50% 50% / cover no-repeat`
  }
  return (<div className={styles.user}>
    <div className={styles.userimg} style={style} />
    <div className={styles.userinfo}>
      <div className={styles.username}>{displayName}</div>
      <span className={styles.postdate}>
        {moment(datetime).format('DD/MM/YYYY HH:mm')}
      </span>
    </div>
    <Social />
  </div>)
}

export { User }
