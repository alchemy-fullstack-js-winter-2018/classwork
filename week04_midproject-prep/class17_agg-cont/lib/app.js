const express = require('express');
const app = express();

const morgan = require('morgan');
const connection = require('./middleware/connection');
const { handler } = require('./middleware/error');
const notFound = require('./middleware/notFound');
const { bearerToken } = require('./middleware/ensureAuth');

app.use(morgan('dev', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json());

app.use(bearerToken);
app.use('/auth', connection, require('./routes/auth'));
app.use('/posts', connection, require('./routes/posts'));

app.use(notFound);
app.use(handler);

module.exports = app;
