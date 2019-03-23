const express = require('express');
const app = express();
const { schema, resolvers } = require('./graphql/Schema');

app.use('/', express.static('public'));

app.use('/graphql', require('express-graphql')({
  schema,
  rootValue: resolvers,
  graphiql: true
}));

module.exports = app;
