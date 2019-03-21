import React from 'react'
import { app, notesCollection } from '../services/firebase';

export const connectFirestore = (ref, key = 'data') => Component => {
  class ConnectFirestore extends React.PureComponent {
    state = {
      data: null
    }

    componentWillMount() {
      this.unsubscribe = notesCollection.onSnapshot(snap => {
        if (snap instanceof app.firestore.DocumentSnapshot) {
          this.setState({ data: { ...snap.data(), id: snap.id } })
        } else if (snap instanceof app.firestore.QuerySnapshot) {
          const data = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          this.setState({ data })
        }
      })
    }

    componentWillUnmount() {
      this.unsubscribe && this.unsubscribe()
    }

    render() {
      const props = { ...this.props, [key]: this.state.data };
      return (
        <Component {...props} />
      )
    }
  }

  return ConnectFirestore
}
