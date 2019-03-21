import React, { Component } from 'react';
import NoteForm from './components/NoteForm';
import { addNote } from './actions/notes';
import { ConnectedNotes } from './components/Notes';
import { ConnectedNote } from './components/NoteDetails';

class App extends Component {

  handleSubmit = (title, body, event) => {
    event.preventDefault()
    addNote({ title, body })
  }

  render() {
    return (
      <>
        <ConnectedNote id="8qdMHIBf90WVPvxzdZPQ" />
      </>
    );
  }
}

export default App;
