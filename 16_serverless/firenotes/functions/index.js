const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

exports.updateTitle = functions.firestore.document('notes/{id}').onCreate((snap, context) => {
  const { id } = context.params

  const note = snap.data()

  return admin.firestore()
    .collection('notes')
    .doc(id)
    .update({
      ...note,
      title: `UPDATED: ${note.title}`
    })
})
