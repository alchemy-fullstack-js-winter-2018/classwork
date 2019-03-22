import { useState, useEffect } from 'react';
import { subscribe } from '../services/firebase'

export const useUser = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    subscribe(setUser)
  }, [false])

  return user
}
