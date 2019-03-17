const mongoose = require('mongoose');
const { getUser } = require('../services/auth');

const tweetSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

tweetSchema.methods.withUser = function() {
  return getUser(this.handle)
    .then(user => ({
      ...this.toJSON(),
      handle: user.nickname
    }));
};

module.exports = mongoose.model('Tweet', tweetSchema);
