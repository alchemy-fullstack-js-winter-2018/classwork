const { Router } = require('express');
const tweets = require('./tweets');

const resources = [
  tweets
];

module.exports = Router().use('/v1', ...resources);
