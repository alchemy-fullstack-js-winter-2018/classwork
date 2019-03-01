# Redux Exercises

## Redux without React

* install all normal dependencies
* `npm i -D @babel/node`
* create an `src/index.js` file
* create a reducer in `src/reducers/notes.js`
  * create an `initialState` that has an array of notes
* create an actionCreator in `src/actions/notes.js`
  * create a `CREATE_NOTE` action type and `createNote` action creator
  * `createNote` should take a title and body and pass those in a payload
* update `src/reducers/notes.js` so that it can handle the `CREATE_NOTE` action
  * upon receiving the `CREATE_NOTE` action append the note to state
* create a `getNotes` selector in `src/selectors/notes.js`
* `dispatch` your action in `src/index.js`
* use your selector to get all notes from your store in `src/index.js`
* run `src/index.js` `npx babel-node src/index.js`

## Redux with React

* setup `src/index.js` to use react
* create a `src/store.js` that creates an store and exports it
* create a `src/components/notes/Note.js` file
  * This is a presentational component
* create a `src/components/notes/Notes.js` file
  * This is a presentational component
* create a `src/containers/notes/AllNotes.js` file
  * subscribe to redux state changes
  * pass notes from redux to the `Notes` component
* create a `src/reducers/noteCreation.js` file
  * initialState should have an empty title and body
* create a `src/reducers/index.js`
  * use combine your reducers and use it in `src/store.js`
* create a `src/actions/noteCreation.js`
  * create a `CREATE_NOTE_UPDATE_TITLE` action type
  * create an `updateNoteTitle` actionCreator
    * HINT: this should take title as a parameter
  * create a `CREATE_NOTE_UPDATE_BODY` action type
  * create an `updateNoteBody` actionCreator
    * HINT: this should take body as a parameter
* update the noteCreation reducer
  * it should handle `CREATE_NOTE_UPDATE_TITLE`
  * it should handle `CREATE_NOTE_UPDATE_BODY`
* create a `src/selectors/noteCreation.js`
  * create a selector to `getTitle`
  * create a selector to `getBody`
* create a `src/components/notes/CreateNoteForm.js`
* create a `src/containers/notes/CreateNote.js`
  * create a `updateTitle` function to `dispatch` the `CREATE_NOTE_UPDATE_TITLE` action
    * grad the new title from `target.value`
  * create a `updateBody` function to `dispatch` the `CREATE_NOTE_UPDATE_BODY` action
    * grad the new title from `target.value`
  * create a `addNote` function
    * `dispatch` the `CREATE_NOTE` action
    * remember to prevent default
  * pass `title`, `body`, `updateTitle`, `updateBody`, and `addNote`
    to the `CreateNoteForm` component
* create an `src/components/app/App.js` file to render `CreateNote` and `AllNotes`
* BONUS: clear the `CreateNoteForm` after adding the note
  * HINT: in your `src/reducers/noteCreation.js` also handle the `CREATE_NOTE` action
    and set state back to the initialState

## Redux with React and Router

* create a `/` Route that loads `AllNotes`
* create a `/add` Route that loads `CreateNote`
* create a `/notes/:id` route that loads a Note at an index
  * E.G. `/notes/1` would load the note at index 1 from state
  * create a `getNote(state, index)` selector
  * create a `NoteDetail` component
    * this displays a single note
  * create a `NoteDetailByIndex` container
    * use `this.props.match.params.id` and `getNote`
* BONUS: How would you edit a note?
