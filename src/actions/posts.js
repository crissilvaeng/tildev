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
      datetime = 0,
      photoURL = '',
      displayName = '',
      uid = ''
    } = postData
    const post = { title, content, tags, datetime, photoURL, displayName, uid }
    service.push(post)
      .then(ref => {
        dispatch(addPost({
          id: ref.key,
          ...post
        }))
      })
  }
}

export const SET_POSTS = 'SET_POSTS'

// SET_POSTS
export const setPosts = posts => ({
  type: SET_POSTS,
  posts
})

export const startSetPosts = () => {
  return dispatch => {
    return service.once('value').then(snapshot => {
      const posts = []

      snapshot.forEach((childSnapshot) => {
        posts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setPosts(posts))
    })
  }
}
