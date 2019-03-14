const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  retweet: {
    type: Number,
    default: 0
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
