import { notesCollection }  from '../services/firebase'

export const addNote = note => notesCollection.add(note)
