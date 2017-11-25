// firebase.js

import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBXMH4hkWuRKUd3bzCMQZAt01lQ9IPnv0M',
  authDomain: 'til-baas.firebaseapp.com',
  databaseURL: 'https://til-baas.firebaseio.com',
  projectId: 'til-baas',
  storageBucket: 'til-baas.appspot.com',
  messagingSenderId: '441698128346'
}

firebase.initializeApp(config)
