const express = require('express');
const app = express();
const tweets = require('./routes/tweets');
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');

app.use(require('morgan')('dev', {
  skip() {
    return process.env.NODE_ENV === 'test';
  }
}));

app.use(express.json());
app.use('/tweets', tweets);

app.use(notFound);

app.use(handler);

module.exports = app;
