// posts.js

import { PostService } from './../services'

const service = new PostService()

export const ADD_POST = 'ADD_POST'

// ADD_POST
export const addPost = (post) => ({
  type: ADD_POST,
  post
})

export const startAddPost = (postData = {}) => {
  return (dispatch) => {
    const {
      title = '',
      content = '',
      tags = [],
      datetime = 0
    } = postData
    const post = { title, content, tags, datetime }
    service.push(post)
      .then(ref => {
        dispatch(addPost({
          id: ref.key,
          ...post
        }))
      })
  }
}

export const FETCH_POSTS = 'FETCH_POSTS'

// FETCH_POSTS
export const fetchPosts = posts => ({
  type: FETCH_POSTS,
  posts
})

export const startFetchPosts = () => {
  return dispatch => {
    return service.once('value').then(snapshot => {
      const posts = []
      snapshot.forEach(childSnapshot => {
        posts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(fetchPosts(posts))
    })
  }
}
