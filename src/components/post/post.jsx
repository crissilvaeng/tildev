// post.jsx

import React from 'react'
import styles from './../../style.scss'

class Post extends React.Component {
  render () {
    return (
      <button id='post' className={styles.post}>
        <i className='fa fa-pencil fa-3x fa-inverse' aria-hidden='true' />
      </button>
    )
  }
}

export { Post }
