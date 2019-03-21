import React, { Component } from 'react';
import NoteForm from './components/NoteForm';
import { addNote } from './actions/notes';
import { ConnectedNotes } from './components/Notes';

class App extends Component {

  handleSubmit = (title, body, event) => {
    event.preventDefault()
    addNote({ title, body })
  }

  render() {
    return (
      <>
        <NoteForm handleSubmit={this.handleSubmit} />
        <ConnectedNotes />
      </>
    );
  }
}

export default App;
