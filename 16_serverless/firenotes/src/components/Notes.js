import React from 'react';
import { connectFirestore } from './connectFirestore';
import { notesCollection } from '../services/firebase';
import { useFirestore } from './useFirestore';

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

export const HookedNotes = () => {
  const notes = useFirestore(notesCollection)
  return <Notes notes={notes} />
}

const mapFirestoreToProps = firestore => ({
  notes: firestore.collection('notes')
})

export const ConnectedNotes = connectFirestore(
  mapFirestoreToProps
)(Notes)
