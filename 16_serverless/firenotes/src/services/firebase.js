import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyCOVhGsn4an1ZWh1f0Lh2-c_dkMgeQZQtg",
  authDomain: "alchemy-serverless.firebaseapp.com",
  databaseURL: "https://alchemy-serverless.firebaseio.com",
  projectId: "alchemy-serverless",
  storageBucket: "alchemy-serverless.appspot.com",
  messagingSenderId: "1009114248651"
})

export const app = firebase

export const firestore = app.firestore()

export const notesCollection = firestore.collection('notes')

const provider = new firebase.auth.GithubAuthProvider()

export const subscribe = fn => firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if (user) {
    fn(user)
  } else {
    firebase.auth().signInWithRedirect(provider)
  }
})
