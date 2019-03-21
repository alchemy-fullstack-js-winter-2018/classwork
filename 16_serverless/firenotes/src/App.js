import React, { Component } from 'react';
import NoteForm from './components/NoteForm';
import { addNote } from './actions/notes';
import { ConnectedNotes, HookedNotes } from './components/Notes';
import { subscribe } from './services/firebase';
import Header from './components/Header';
import NoteFormHook from './components/NoteFormHook';

class App extends Component {

  handleSubmit = (title, body, event) => {
    event.preventDefault()
    addNote({ title, body })
  }

  render() {
    return (
      <>
        <NoteFormHook />
        <HookedNotes />
      </>
    );
  }
}

export default App;
