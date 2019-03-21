import React from 'react';
import { connectFirestore } from './connectFirestore';
import { notesCollection } from '../services/firebase';

export default function Notes({ notes }) {
  const noteListItems = notes && notes.map(note => {
    return (
      <li key={note.id}>
        <p>{note.title}</p>
        <p>{note.body}</p>
      </li>
    )
  })

  return (
    <ul>
      {noteListItems}
    </ul>
  )
}

export const ConnectedNotes = connectFirestore(
  notesCollection, 'notes'
)(Notes)
