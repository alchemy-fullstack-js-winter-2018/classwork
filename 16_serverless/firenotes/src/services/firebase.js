import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCowkfBDO-kM34LcE7l8w-xHYVT2uQMXbY",
  authDomain: "firenotes-2b948.firebaseapp.com",
  databaseURL: "https://firenotes-2b948.firebaseio.com",
  projectId: "firenotes-2b948",
  storageBucket: "firenotes-2b948.appspot.com",
  messagingSenderId: "563943298982"
})

export const app = firebase

export const firestore = app.firestore()

export const notesCollection = firestore.collection('notes')
