// posts.js

import { ADD_POST, FETCH_POSTS } from './../actions/posts'

const postsReducerDefaultState = []

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        action.post
      ]
    case FETCH_POSTS:
      return action.posts
    default:
      return state
  }
}
