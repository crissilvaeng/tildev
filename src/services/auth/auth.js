// auth.js

import * as firebase from 'firebase'

class AuthService {
  constructor () {
    this.provider = new firebase.auth.GithubAuthProvider()
    this.user = null
  }

  signIn () {
    return firebase.auth().signInWithPopup(this.provider)
  }

  signOut () {
    return firebase.auth().signOut()
  }
}

export { AuthService }
