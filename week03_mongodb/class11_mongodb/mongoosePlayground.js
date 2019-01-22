const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2:27017/tweets', {
  useNewUrlParser: true
});

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

const Tweet = mongoose.model('Tweet', tweetSchema);

Tweet
  .findByIdAndDelete('5c47a164442e5d54f02f19a2')
  .then(data => console.log(data));
