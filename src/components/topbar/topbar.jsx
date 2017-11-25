// topbar.jsx

import Post from './../post/post'
import Profile from './../profile/profile'
import React from 'react'
import { Search } from './../search'
import styles from './../../style.scss'

class TopBar extends React.Component {
  render () {
    return (
      <div className={styles.topbar} >
        <Profile />
        <Search />
        <Post />
      </div>
    )
  }
}

export { TopBar }
