import React from 'react'
import { connectFirestore } from './connectFirestore';

export default function Note({ note }) {
  if (!note) return null
  return (
    <>
      <p>{note.title}</p>
      <p>{note.body}</p>
    </>
  )
}

const mapFirestoreToProps = (firestore, props) => ({
  note: firestore.collection('notes').doc(props.id)
})

export const ConnectedNote = connectFirestore(
  mapFirestoreToProps
)(Note)
