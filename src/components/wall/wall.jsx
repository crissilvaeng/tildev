// wall.jsx

import { Card } from './../card'
import React from 'react'
import { connect } from 'react-redux'
import selectPosts from './../../selectors/posts'
import styles from './../../style.scss'

const Wall = props => (
  <div id='wall' className={styles.wall}>
    { props.posts.map(post => <Card key={post.id} {...post} />) }
  </div>
)

const mapStateToProps = state => {
  return {
    posts: selectPosts(state.posts, state.filters)
  }
}

export default connect(mapStateToProps)(Wall)
