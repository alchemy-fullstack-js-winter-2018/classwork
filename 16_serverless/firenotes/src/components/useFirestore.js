import { useState, useEffect } from 'react'
import { app } from '../services/firebase'

export const useFirestore = ref => {
  const [data, setData] = useState(null)
  useEffect(() => {
    return ref.onSnapshot(snap => {
      if (snap instanceof app.firestore.DocumentSnapshot) {
        setData(snap.data())
      } else if (snap instanceof app.firestore.QuerySnapshot) {
        const data = snap.docs.map(doc => doc.data())
        setData(data)
      }
    })
  }, [false])

  return data
}
