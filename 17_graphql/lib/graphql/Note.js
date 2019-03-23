const Note = require('../models/Note');

const types = `
type Note {
  _id: ID!
  title: String!
  body: String!
}
`;

const queries = `
notes: [Note]
note(id: ID!): Note
`;

const mutations = `
createNote(title: String!, body: String!): Note
deleteNote(id: ID!): Note
`;

const resolvers = {
  notes() {
    return Note.find();
  },
  note({ id }) {
    return Note.findById(id);
  },
  createNote({ title, body }) {
    return Note.create({ title, body });
  },
  deleteNote({ id }) {
    return Note.findByIdAndDelete(id);
  }
};

module.exports = {
  types,
  queries,
  mutations,
  resolvers
};
