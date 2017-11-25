// posts-service.js

import DatabaseService from './database-service'

class PostService extends DatabaseService {
  constructor () {
    super()
    this.reference = 'posts'
  }

  push (data) {
    return super.push(this.reference, data)
  }

  once (eventType) {
    return super.once(this.reference, eventType)
  }
}

export { PostService }
