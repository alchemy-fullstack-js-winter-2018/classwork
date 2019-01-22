const express = require('express');
const app = express();
const tweets = require('./routes/tweets');
const notFound = require('./middleware/notFound');

app.use(require('morgan')('dev'));

app.use(express.json());
app.use('/tweets', tweets);

app.use(notFound);

module.exports = app;
