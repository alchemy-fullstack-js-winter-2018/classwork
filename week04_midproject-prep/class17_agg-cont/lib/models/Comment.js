const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commentBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  comment: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Comment', commentSchema);
