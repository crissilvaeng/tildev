// search.jsx

import React from 'react'
import styles from './../../style.scss'

class Search extends React.Component {
  render () {
    return (
      <div id='search' className={styles.search}>
        <input placeholder='Search for friends, posts or tags.' />
      </div>
    )
  }
}

export { Search }
