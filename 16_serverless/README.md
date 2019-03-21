# Firebase

## Agenda

* install/use create-react-app `npm i -g create-react-app`
* Create a firebase account
* use firebase-tools
  * initialize a firebase app
* use firebase deploy
* use firestore
  * setup and `initializeApp`
  * create an addNotes action
  * create a NoteForm container
  * create a Notes component
  * create a firestoreConnect HOC
  * create a AllNotes container
* use firebase auth
  * use the Github provider
  * subscribe to `onAuthStateChanged`
  * create a withUser HOC
* use cloud functions
  * setup a function to listen for new notes
  * update notes title on new note
