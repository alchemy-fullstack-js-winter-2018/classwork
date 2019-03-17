require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const seedData = require('./test/seedData');

seedData({})
  .then(() => console.log('done'))
  .catch((err) => console.error('failed', err))
  .finally(() => mongoose.connection.close());
