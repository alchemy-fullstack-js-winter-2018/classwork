# Redux Practice

Create a note taking application with redux

* Setup for a redux application
* create a `src/reducers/notes.js`
  * initial state is an object `const initialState = {}`
* create a `src/store.js`
  * create a store with the notes reducer
* create a `src/components/app/App.js`
* create a `src/index.js`
  * use `Provider` from `react-redux`
  * render your `App` component wrapped with `Provider`
* add some notes to the initialState in `src/reducers/notes.js`
  * use `shortid.generate` to create unique ids
```js
const initialState = {
  [shortid.generate()]: {
    title: 'my first note',
    body: 'redux is great'
  }
};
```
* create a `src/selectors/notes.js`
  * create a `getNotes` selector
    * HINT: Use Object.keys to iterate through all notes ids
      for each id return an object with the notes title, body, and id.
      `{ ...state[id], id }`
* create a `src/components/Notes.js`
  * this is a functional/presentational component
* create a `src/containers/AllNotes.js`
  * connect to redux
  * use the `Notes` component
* create a `src/actions/notes.js`
  * create an `addNote` action
* update the notes reducers to handle the add note action
* create a `src/components/AddNoteForm.js`
* create a `src/containers/AddNote.js`
  * connect to redux
  * dispatch the addNote action
