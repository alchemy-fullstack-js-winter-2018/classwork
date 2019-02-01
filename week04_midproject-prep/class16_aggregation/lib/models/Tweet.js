const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  handle: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const projectLengthStage = () => ({ $project: { text: '$text', length: { $strLenCP: '$text' } } });

const groupByLength = () => ({ $group: { _id: null, avg: { $avg: '$length' } } });

tweetSchema.statics.averageLength = function() {
  return this.aggregate([
    { $project: { text: '$text', length: { $strLenCP: '$text' } } },
    { $group: { _id: null, avg: { $avg: '$length' } } }
  ]);
};

module.exports = mongoose.model('Tweet', tweetSchema);
