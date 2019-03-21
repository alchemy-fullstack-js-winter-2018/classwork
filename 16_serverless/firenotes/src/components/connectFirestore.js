import React from 'react'
import { app, firestore } from '../services/firebase';

export const connectFirestore = mapFirestoreToProps => Component => {
  class ConnectFirestore extends React.PureComponent {
    state = {}

    subscribe = (ref, dataKey) => {
      return ref.onSnapshot(snap => {
        if (snap instanceof app.firestore.DocumentSnapshot) {
          this.setState({ [dataKey]: { ...snap.data(), id: snap.id } })
        } else if (snap instanceof app.firestore.QuerySnapshot) {
          const data = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          this.setState({ [dataKey]: data })
        }
      })
    }

    componentWillMount() {
      const mapObject = mapFirestoreToProps(firestore, this.props)
      this.unsubscribe = Object.keys(mapObject).map(dataKey => {
        const ref = mapObject[dataKey]
        return this.subscribe(ref, dataKey)
      });
    }

    componentWillUnmount() {
      this.unsubscribe && this.unsubscribe.map(u => u())
    }

    render() {
      const props = { ...this.props, ...this.state };
      return (
        <Component {...props} />
      )
    }
  }

  return ConnectFirestore
}
