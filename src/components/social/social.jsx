// social.jsx

import React from 'react'
import social from './social.scss'
import styles from './../../style.scss'

class Social extends React.Component {
  render () {
    return (
      <div className={styles.actions + ' ' + social.social}>
        <i className='fa fa-heart fa-2x' aria-hidden='true' />
        <i className='fa fa-bookmark fa-2x' aria-hidden='true' />
      </div>
    )
  }
}

export { Social }
