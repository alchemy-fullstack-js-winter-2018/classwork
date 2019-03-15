const express = require('express');
const app = express();

const connection = require('./middleware/connection');
const { handler } = require('./middleware/error');

app.use(require('./middleware/cors'));

app.use('/tweets', connection, require('./routes/tweets'));

app.use(handler);

module.exports = app;
