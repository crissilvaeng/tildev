// database-service.js
import * as firebase from 'firebase'

class DatabaseService {
  constructor () {
    this.database = firebase.database()
  }

  push (reference, data) {
    return this.database.ref(reference).push(data)
  }

  once (reference, eventType) {
    return this.database.ref(reference).once(eventType)
  }
}

export default DatabaseService
