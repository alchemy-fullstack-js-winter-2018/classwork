const { buildSchema } = require('graphql');
const Note = require('./Note');
const request = require('superagent');

const schema = buildSchema(`
${Note.types}

type Character {
  name: String!
  id: ID!
  species: String!
}

type Query {
  ${Note.queries}
  characters: [Character]
}

type Mutation {
  ${Note.mutations}
}
`);

const resolvers = {
  ...Note.resolvers,
  characters() {
    return request('https://rickandmortyapi.com/api/character/')
      .then(res => res.body)
      .then(results => results.results);
  }
};

module.exports = {
  schema,
  resolvers
};
