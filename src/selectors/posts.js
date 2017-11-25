// posts.js

import moment from 'moment'

export default (posts, { title, content, tags, datetime }) => {
  return posts.sort((a, b) => {
    return moment(a.datetime).isBefore(b.datetime) ? 1 : -1
  })
}
