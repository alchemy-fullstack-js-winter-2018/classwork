import React from 'react'
import { connectFirestore } from './connectFirestore';

export default function Note({ note }) {
  return (
    <>
      <p>{note.title}</p>
      <p>{note.body}</p>
    </>
  )
}
